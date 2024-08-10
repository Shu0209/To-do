import { useEffect, useState } from "react"


function EditTask({ onClose,updateTask,TaskName,TaskDesc}) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handelChange=(e)=>{

const {name,value}=e.target

if(name=="taskName"){
    setTaskName(value)
}
else{
    setDescription(value)
}
    }

    useEffect(()=>{
        setTaskName(TaskName)
        setDescription(TaskDesc)
    },[])

const handleUpdate=(e)=>{
    e.preventDefault()
    let taskObj={}
    taskObj["Name"]=taskName
    taskObj["Description"]=description
   updateTask(taskObj)
}

    return (
        <>
            <div className=" w-[100vw] h-[100%] backdrop-blur-lg p-2 m-2 absolute top-0 left-0 ">
                <div className=" bg-gray-500 m-1 p-1 top-4 rounded-2xl absolute left-[50%] translate-x-[-50%] " >
                    <button onClick={onClose} className="text-white absolute right-5 font-bold text-xl" >X</button>
                    <h1 className="font-bold font-serif p-2 m-2 text-center">Update Task</h1>
                    <h3>Task:</h3>
                    <input name="taskName" type="text" className="border-[1px] " value={taskName} onChange={handelChange}/>
                    <h3>Discription</h3>
                    <textarea name="description" id="" rows="4" cols="40" className="border-[1px] w-[100%]"  value={description} onChange={handelChange}></textarea>
                    <div className="">
                        <button onClick={handleUpdate} className="bg-violet-600 m-1 p-2 rounded-2xl text-white font-bold" >Update</button>
                        <button onClick={onClose} className="bg-violet-600 m-1 p-2 rounded-2xl text-white font-bold">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default EditTask