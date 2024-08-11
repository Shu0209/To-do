import React, { useState } from "react"
import EditTask from "../Modals/EditTask"

const Card = ({ taskName, taskDesc, index ,deleteTask , updateListArray}) => {

    const [model,setModel]=useState(false);

    const updateTask=(obj)=>{
        updateListArray(obj,index)
    }

const handelDelete=()=>{
deleteTask(index)
}

    return (<>
        
            <div className=" w-60 h-auto m-2 p-1 shadow-2xl rounded-3xl bg-slate-50">
                <div className="border-green-600 border-2 rounded-3xl m-2 shadow-2xl"></div>
                <p className="text-center p-1 m-1">{taskName}  </p>
                <p className="text-center p-1 m-1 break-words overflow-visible">{taskDesc}</p>
                <div className="flex justify-end p-2 m-2 gap-4">
                <i onClick={()=>setModel(true)} className="fa-regular fa-pen-to-square text-green-600 cursor-pointer"></i>
                <i onClick={handelDelete} className="fa-solid fa-trash-can text-green-600 cursor-pointer"></i>
                </div>
                <div className=" w-[100vw]">
                {model && <EditTask updateTask={updateTask} onClose={()=>setModel(false)} TaskName={taskName} TaskDesc={taskDesc}/>}
                </div>
            </div>
        
    </>
    )
}
export default Card