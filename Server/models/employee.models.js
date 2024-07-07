
import mongoose from "mongoose"

const employee= mongoose.Schema({
    name:{
        type:String,
    },
    empId:{
        type:String,
    },
    empEmail:{
        type:String,
    },
    empContact:{
        type:String,
    },
    designation:{
        type:String,
    },
    empAddress:{
        type:String,
    }
})

const Emp=mongoose.model("employeeDetails",employee)

export default Emp
