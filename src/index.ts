import express from "express";
import swagger from 'swagger-ui-express';
import { usersRoutes } from "./routes/users.routes";
import doc from 'doc.json';

const app = express();
app.use(express.json());
app.use('/api-docs', swagger.serve, swagger.setup(doc));
app.use("/users", usersRoutes);

export { app };
