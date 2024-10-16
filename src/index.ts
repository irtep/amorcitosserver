import express, { Request, Response } from 'express';
import 'dotenv/config';
import path from 'path';

const app : express.Application = express();
const port: number = Number(process.env.PORT);

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.json());

app.get('/', (_req: Request, res: Response): void => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
