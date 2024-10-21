require('dotenv').config();

const express = require('express');
const OpenAI = require('openai');
const cors = require ('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// swagger path?

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// cors middleware?
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Authentication, X-Username, X-Password, X-ApiKey",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
};

// basic midleware?
app.use((req, res, next) => {
  console.log('Basic Middleware Stuff...');
  // res.set(CORS_HEADERS);
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// error handling?
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something is broken!');
});

// swagger?

app.get('/', (req, res)=>{
  res.send('Hello from the mycelium network');
});

app.post('/api/gpt', async(req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { 
          role: 'system',
          content: 'You are a positivity assistant. Please translate my thought into a pithy one sentence positive growth mindest reframing of the original input.'},
        {
          role: 'user',
          content: prompt,
        },
      ]
    })
    res.json({ completion: completion.choices[0].message.content});
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: 'An error occured while processing this request.',
      error: error.message,
    });
  }
});

// JWT_SECRET
const JWT_SECRET = '9527e3a06a598251710743aa74e29e3681762684a01b184762469005a26afef3';

// USERS
const users = [
  { 
    name: { first: 'Mutsumi', last: 'Hata' },
    login: { username: 'Mutsumi', password: 'Hata' }
  },
  { 
    name: { first: 'Bob', last: 'Smith' },
    login: { username: 'Bob', password: 'Smith' }
  }
];
console.log('Username: ', users[0].login.username);
console.log('Password: ', users[0].login.password);

// LOGIN
app.post('/login', (req, res) => {
  try {
    authHeader = req.headers.authorization;
    console.log('AuthHeader: ', authHeader);
    if(!authHeader || !authHeader.startsWith('Basic ')) {
      return res.status(401).send({ error: 'Unauthorized' });
    }
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');

    const user = users.find(user => user.login.username === username);

    if (user && password === user.login.password) {
      // GENERATES TOKEN
      const token = jwt.sign({ username: user.login.username }, JWT_SECRET, {expiresIn: '1d' });

      console.log('Token: ', token);

      // ROUTE to (/{user.name.first})
      const redirectUrl =`/${user.name.first}`;
      console.log('ReDirectUrl: ', redirectUrl);

      res.status(200).json({ token, redirectUrl: `/${user.name.first}`});
    } else {
      res.status(401).send('Username or password is incorrect');
    }
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).send('Server error');
  }
});

// AUTHENTICATION MIDDLEWARE
const authenticateJWT = (req, res, next) =>  {
  let authHeader = req.headers['authorization'];
  console.log('AUTHENTICATION');
  console.log('AuthHeader: ', authHeader);

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    console.log('AuthHeader Deconstructed: ', token);

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ error: 'Authorization header missing'  });
  }
};

// AUTHENTICATED ROUTES
app.get('/users', authenticateJWT, (req, res) => {
  const userNames = users.map(user => user.name.first);
  res.status(200).json({ users: userNames });
});

const PORT =process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));