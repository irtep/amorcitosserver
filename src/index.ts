import express, { Request, Response } from 'express';

const app : express.Application = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (_req: Request, res: Response): void => {
    res.send('no niin!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
