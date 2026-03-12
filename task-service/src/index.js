const express = require("express");

const app = express();
app.use(express.json());

let tasks = [];

app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
    const task = req.body;
    task.id = tasks.length + 1;
    tasks.push(task);
    res.status(201).json(task);
});

/* UPDATE TASK */
app.put("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    task.title = req.body.title;
    res.json({ status: "updated", task });
});

/* DELETE TASK */
app.delete("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);

    res.json({ status: "deleted" });
});

app.listen(3002, () => {
    console.log("task service running on 3002");
});