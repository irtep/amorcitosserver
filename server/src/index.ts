import express, { Request, Response } from 'express';
import 'dotenv/config';
import path from 'path';
// imports for IZ4 password bank
import apiCredentialsRouter from './routes/apiCredentials';
import apiAuthRouter from './routes/apiAuth';
import apiUsersRouter from './routes/apiUsers';
import { errorhandler, ErrorClass } from './errors/errorhandler';
import jwt from 'jsonwebtoken';
/* enable for dev, when needed*/
//import cors from 'cors';

const app: express.Application = express();
const port: number = Number(process.env.PORT);

// CORS for development mode
/* enable for dev, when needed
const corsOptions: cors.CorsOptions = {
    origin: 'http://localhost:3000', // '*' would be all
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };

app.use(cors(corsOptions));
*/
// Middleware to check JWT token
const checkToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('checking');
    try {
        const token: string = req.headers.authorization!.split(" ")[1];
        res.locals.user = jwt.verify(token, String(process.env.ACCESS_TOKEN_KEY));
        next();
    } catch (e: any) {
        console.log('jwtError: ', e);
        next({ status: 401, message: "Unauthorized access." });
    }
}

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(express.json());

// API routes for IZ4
app.use("/api/auth", apiAuthRouter);
app.use("/api/credentials", checkToken, apiCredentialsRouter);
app.use("/api/users", apiUsersRouter);
app.use(errorhandler);

// Custom 404 handler for API routes
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!res.headersSent) {
        next(new ErrorClass(404, "Invalid route."));
    }
    next();
});

// GET request for root route to serve its index.html
app.get('/', (_req: Request, res: Response): void => {
    res.sendFile('index.html', { root: path.resolve(__dirname, 'public') });
});

// GET request for '/iz4' route to serve its index.html
app.get('/iz4', (_req: Request, res: Response): void => {
    res.sendFile('index.html', { root: path.resolve(__dirname, 'public/iz4') });
});

    // GET request for '/izFoods' route to serve its index.html
    app.get('/izFoods', (_req: Request, res: Response): void => {
        res.sendFile('index.html', { root: path.resolve(__dirname, 'public/izFoods') });
    });

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
