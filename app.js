import express from "express";
import methodOverride from "method-override";
import path from "path";
import { fileURLToPath } from "url";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Mount Routes
app.use("/", taskRoutes);

export default app;