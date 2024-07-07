import express from "express"
import { registerTask } from "../controller/task.controller.js";
import { getAllTask } from "../controller/task.controller.js";
import { updateTask} from "../controller/task.controller.js";
import {deleteTask} from "../controller/task.controller.js";

const router = express.Router();

router.route("/registertask").post(registerTask);
router.route("/getalltask").get(getAllTask);
router.route("/updatetask/:id").put(updateTask);
router.route("/deltetask/:id").delete(deleteTask);

export default router;

