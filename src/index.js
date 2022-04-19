import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Helloooo there!')
})

app.listen(PORT, () => {
  console.log(`A tiny app is listening on port ${PORT}`)
})