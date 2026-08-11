import db from "../config/db.js";

// Get All Tasks
export const getTasks = async (req, res) => {
    const order = req.query.order || "ASC";
    const q = `SELECT * FROM tasks ORDER BY task_date ${order}, task_time ${order}`;

    try {
        const [results] = await db.query(q);
        res.render("index.ejs", { res: results, order, searchQuery: "" });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Internal Server Error");
    }
};

// Sort Redirect
export const sortTasks = (req, res) => {
    const order = req.query.order === "desc" ? "desc" : "asc";
    res.redirect(`/?order=${order}`);
};

// Add New Task
export const addTask = async (req, res) => {
    const { task, date, task_time } = req.body;
    const q = `INSERT INTO tasks (task, task_date, task_time) VALUES (?, ?, ?)`;

    try {
        await db.query(q, [task, date, task_time]);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

// Search Tasks
export const searchTasks = async (req, res) => {
    const searchQuery = req.query.q || "";
    const order = req.query.order || "asc";
    const sortOrder = order.toLowerCase() === "desc" ? "DESC" : "ASC";
    const q = `SELECT * FROM tasks WHERE task LIKE ? ORDER BY id ${sortOrder}`;

    try {
        const [results] = await db.query(q, [`%${searchQuery}%`]);
        res.render("index.ejs", { res: results, order, searchQuery });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Internal Server Error");
    }
};

// Edit Task Page
export const renderEditPage = async (req, res) => {
    const { id } = req.params;
    const q = `SELECT * FROM tasks WHERE id = ?`;

    try {
        const [results] = await db.query(q, [id]);
        if (results.length === 0) return res.status(404).send("Task not found");
        res.render("editTask.ejs", { task: results[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Internal Server Error");
    }
};

// Update Task
export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { task, task_date } = req.body;
    const q = `UPDATE tasks SET task = ?, task_date = ? WHERE id = ?`;

    try {
        await db.query(q, [task, task_date, id]);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

// Complete Status Toggle
export const toggleComplete = async (req, res) => {
    const { id } = req.params;
    const completed = req.body.completed ? 1 : 0;
    const q = `UPDATE tasks SET completed = ? WHERE id = ?`;

    try {
        await db.query(q, [completed, id]);
        res.redirect("/");
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Internal Server Error");
    }
};

// Delete Single Task
export const deleteTask = async (req, res) => {
    const { id } = req.params;
    const q = `DELETE FROM tasks WHERE id = ?`;

    try {
        await db.query(q, [id]);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

// Remove Checked
export const removeChecked = async (req, res) => {
    const q = `DELETE FROM tasks WHERE completed = 1`;

    try {
        await db.query(q);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

// Clear All Tasks
export const clearAll = async (req, res) => {
    const q = `DELETE FROM tasks`;

    try {
        await db.query(q);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};