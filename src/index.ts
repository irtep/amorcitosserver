import express, { Request, Response } from 'express';
import 'dotenv/config';
import path from 'path';
// imports for IZ4 password bank
import apiCredentialsRouter from './routes/apiCredentials';
import apiAuthRouter from './routes/apiAuth';
import apiUsersRouter from './routes/apiUsers';
import errorhandler from './errors/errorhandler';
import jwt from 'jsonwebtoken';

const app: express.Application = express();
const port: number = Number(process.env.PORT);

const checkToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        let token: string = req.headers.authorization!.split(" ")[1];
        res.locals.user = jwt.verify(token, String(process.env.ACCESS_TOKEN_KEY));
        next();
    } catch (e: any) {
        console.log(e);
        res.status(401).json({});
    }
}

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.json());
// IZ4 routes:
app.use("/api/auth", apiAuthRouter);
app.use("/api/credentials", checkToken, apiCredentialsRouter);
app.use("/api/users", apiUsersRouter);
app.use(errorhandler);
app.use((req : express.Request, res : express.Response, next : express.NextFunction) => {

    if (!res.headersSent) {
        res.status(404).json({ viesti : "invalid route"});
    }

    next();
});

// get to root returns Amorcitos Portal
app.get('/', (_req: Request, res: Response): void => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
