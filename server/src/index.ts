import express, { Request, Response } from 'express';
import 'dotenv/config';
import path from 'path';
// imports for IZ4 password bank
import apiCredentialsRouter from './routes/apiCredentials';
import apiAuthRouter from './routes/apiAuth';
import apiUsersRouter from './routes/apiUsers';
import errorhandler from './errors/errorhandler';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app: express.Application = express();
const port: number = Number(process.env.PORT);

// CORS for development mode
const corsOptions: cors.CorsOptions = {
    origin: 'http://localhost:3000', // or '*' for all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // specify allowed headers
    credentials: true, // enable if credentials are required
  };

app.use(cors(corsOptions));

// Middleware to check JWT token
const checkToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('checking');
    try {
        let token: string = req.headers.authorization!.split(" ")[1];
        res.locals.user = jwt.verify(token, String(process.env.ACCESS_TOKEN_KEY));
        next();
    } catch (e: any) {
        console.log('jwtError: ', e);
        res.status(401).json({});
    }
}

// Serve static files for root route from 'public'
app.use(express.static(path.resolve(__dirname, 'public')));

// JSON parser middleware for API routes
app.use(express.json());

// API routes for IZ4
app.use("/api/auth", apiAuthRouter);
app.use("/api/credentials", checkToken, apiCredentialsRouter);
app.use("/api/users", apiUsersRouter);
app.use(errorhandler);

// Custom 404 handler for API routes
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!res.headersSent) {
        res.status(404).json({ message: "invalid route" });
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

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
