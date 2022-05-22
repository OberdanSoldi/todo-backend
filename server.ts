import express from "express";
const app = express();

import routes from "./src/routes";

app.use(express.json());
app.use(routes);

const port = 9000;
app.listen(port, () => console.log(`Server started on port ${port}`));
