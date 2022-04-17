"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes/routes"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Well done!');
});
app.use('/', routes_1.default);
app.listen(4000, () => {
    console.log('The application is listening on port 3000!');
});
