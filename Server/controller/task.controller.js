 
import Task from "../models/task.models.js";

export const registerTask= async (req, res) => {
    try {
        const {tid,title,description,statuss,dueDate,progressUpdates,createdAt,updatedAt} = req.body;

        if ([tid,title,description,statuss,dueDate,progressUpdates,createdAt,updatedAt].some((field) => typeof field === 'string' && field.trim() === "")) {
            return res.status(400).json({ message: "Tiitle,Description,Status,Due-Date all this fileds are required" });
        }

        const existingTask = await Task.findOne({tid});

        if (existingTask) {
            return res.status(400).json({ message: "task with id exist" });
        }
        const newTask = await Task.create({
            tid,
            title,
            description,
            statuss,
            dueDate,
            progressUpdates,
            createdAt,
            updatedAt
        });

        res.status(201).json({
            success: true,
            message: "Details inserted successfully",
            newTask,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
}; 
export const getAllTask = async (req, res) => {
    try {
        const task = await Task.find();

        if (!task || task.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No task found",
            });
        }

        res.status(200).json({
            success: true,
            task,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { tid,
            title,
            description,
            statuss,
            dueDate,
            progressUpdates,
            createdAt,
            updatedAt} = req.body;

        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        task.tid = tid || task.tid;
        task.title = title || task.title;
        task.description = description || task.description;
        task.statuss = statuss|| task.statuss;
        task.dueDate= dueDate || task.dueDate;
        task.createdAt = createdAt|| task.createdAt;
        task.updatedAt= updatedAt || task.updatedAt;
        task.progressUpdates =progressUpdates !== undefined ?progressUpdates : task.progressUpdates;

        await task.save();

        res.status(200).json({
            success: true,
            message: "task updated successfully",
            task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
         
        const task = await Task.findByIdAndDelete(id);


        if (!task) {
            return res.status(404).json({
                success: false,
                message: "task not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "task deleted successfully",
             
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
