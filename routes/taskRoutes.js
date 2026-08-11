import express from "express";
import {
    getTasks,
    sortTasks,
    addTask,
    searchTasks,
    renderEditPage,
    updateTask,
    toggleComplete,
    deleteTask,
    removeChecked,
    clearAll
} from "../controllers/taskController.js";

const router = express.Router();

// Root & Sort
router.get("/", getTasks);
router.get("/sort", sortTasks);

// Task operations under /todos
router.post("/todos", addTask);
router.get("/todos/search", searchTasks);
router.get("/todos/removeChecked", removeChecked);
router.get("/todos/clearAll", clearAll);

// ID specific routes
router.get("/todos/edit/:id", renderEditPage);
router.patch("/todos/edit/:id", updateTask);
router.post("/todos/:id/complete", toggleComplete);
router.delete("/todos/:id", deleteTask);

export default router;