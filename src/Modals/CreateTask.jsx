import { useState } from "react"

function CreateTask({ onClose,save }) {
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

const handleCreate=()=>{
    let taskObj={}
    taskObj["Name"]=taskName
    taskObj["Description"]=description
    save(taskObj)
}

    return (
        <>
            <div className=" w-[100vw] h-[100vh] fixed top-0  backdrop-blur-lg flex justify-center p-2 m-2 ">
                <div className="bg-gray-500 m-1 p-1 fixed top-4 rounded-2xl" >
                    <button onClick={onClose} className="text-white absolute right-5 font-bold text-xl" >X</button>
                    <h1 className="font-bold font-serif p-2 m-2 text-center">Create Task</h1>
                    <h3>Task Name:</h3>
                    <input name="taskName" type="text" className="border-[1px] " value={taskName} onChange={handelChange}/>
                    <h3>Discription</h3>
                    <textarea name="description" id="" rows="4" cols="40" className="border-[1px]"  value={description} onChange={handelChange}></textarea>
                    <div className="">
                        <button onClick={handleCreate} className="bg-violet-600 m-1 p-2 rounded-2xl text-white font-bold" >Create</button>
                        <button onClick={onClose} className="bg-white m-1 p-2 rounded-2xl text-gray-700 font-bold">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CreateTask