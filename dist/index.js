"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT);
app.use(express_1.default.static(path_1.default.resolve(__dirname, "public")));
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
