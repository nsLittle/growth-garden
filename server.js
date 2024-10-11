require('dotenv').config();

const express = require('express');
const OpenAI = require('openai');
const cors = require ('cors');

const app = express();
app.use(cors());
app.use(express.json());

// swagger path?

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// cors middleware?

// basic midleware?

// error handling?

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

const PORT =process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));