require('dotenv').config();

const express = require('express');
const OpenAI = require('openai');
const cors = require ('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// swagger path?

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

const plantedSeeds = [];

app.post('/plantseeds', (req, res) => {
  const { goal } = req.body;

  if (!goal) {
    return res.status(400).json({ error: 'Goal is required'});
  }
  plantedSeeds.push({ goal, timestamp: new Date() });
  console.log(`Seed planted with goal: ${goal}`);

  const imageUrl = `${req.protocol}://${req.get('host')}/images/seed.jpg`;

  res.status(201).json({ message: 'Seed planted successfully', goal, imageUrl });
});

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.post('/growthmindset', async(req, res) => {
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
const JWT_SECRET = process.env.JWT_SECRET;

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
    const authHeader = req.headers.authorization;
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


      res.cookie('jwtToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      })

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
  let token = null;

  let authHeader = req.headers['authorization'];
  console.log('AUTHENTICATION');
  console.log('AuthHeader: ', authHeader);

  if (authHeader) {
    token = authHeader.split(' ')[1];
    console.log('AuthHeader Deconstructed: ', token);
  } else if (req.cookies && req.cookies.jwtToken) {
    token = req.cookies.jwtToken;
    console.log('JWT Token from Cookie: ', token);
  }

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, user) = {
      if (err) {
        return res.status(403).json({ error: 'Invalid token'});
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ error: 'Aughroization header or token missing'});
  }
};

// AUTHENTICATED ROUTES
app.get('/:user', authenticateJWT, (req, res) => {
  const { user } = req.params;

  const foundUser = users.find(u => u.name.first === user);

  if (!foundUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({ message: `Welcome, ${foundUser.name.first}`});
});

const PORT =process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));