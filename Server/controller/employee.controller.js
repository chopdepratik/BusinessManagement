import Emp from "../models/employee.models.js";
import { createToken } from "../middleware/employee.middleware.js";

export const registerEmp = async (req, res) => {
    try {
        const { name, empId, empEmail, empContact, designation, empAddress } = req.body;

        if ([name, empId, empEmail, empContact, designation, empAddress].some((field) => field.trim() === "")) {
            return res.status(400).json({ message: "All Fields are required" });
        }

        const existingEmployee = await Emp.findOne({ empId });

        if (existingEmployee) {
            return res.status(400).json({ message: "Employee with id exists" });
        }

        const employee = await Emp.create({
            name,
            empId,
            empEmail,
            empContact,
            designation,
            empAddress,
        });

        const token = createToken(employee._id, employee.empEmail);
        res.status(201).json({
            success: true,
            message: "Details inserted successfully",
            employee,
            token,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};

export const getAllEmp = async (req, res) => {
    try {
        const employees = await Emp.find();

        if (!employees || employees.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No employee found",
            });
        }

        res.status(200).json({
            success: true,
            employee: employees,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

export const updateEmp = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, empId, empEmail, empContact, designation, empAddress } = req.body;

        const employee = await Emp.findById(id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found",
            });
        }

        employee.name = name || employee.name;
        employee.empId = empId || employee.empId;
        employee.empEmail = empEmail || employee.empEmail;
        employee.empContact = empContact || employee.empContact;
        employee.empAddress = empAddress || employee.empAddress;
        employee.designation = designation !== undefined ? designation : employee.designation;

        await employee.save();

        res.status(200).json({
            success: true,
            message: "Employee updated successfully",
            employee,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteEmp = async (req, res) => {
    try {
        const { id } = req.params;

        const employee = await Emp.findByIdAndDelete(id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Employee deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
