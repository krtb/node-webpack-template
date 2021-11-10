import express from 'express';
// https://stackoverflow.com/questions/64383909/dirname-is-not-defined-in-node-14-version
import { fileURLToPath } from 'url';
import path, {dirname} from 'path';
const app = express();
// server port number
const PORT = 3000;

// support serving static files. https://expressjs.com/en/starter/static-files.html
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));