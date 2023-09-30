"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const wss = new ws_1.Server({ server });
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello, welcome to the streaming service!');
});
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
