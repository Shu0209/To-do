import { useEffect, useState } from "react"
import CreateTask from "../Modals/CreateTask.jsx"
import Card from "./Card.jsx"
import { stringify } from "postcss"

function MyComponent() {
    const [showModel, setShowModel] = useState(false)
    const [taskList,setTaskList]=useState([])

useEffect(()=>{
    let arr=localStorage.getItem("taskList");
   
    if(arr){
        let obj=JSON.parse(arr)
        setTaskList(obj)
    }

},[])


const deleteTask=(index)=>{
    let tempList=taskList
    tempList.splice(index,1)
    localStorage.setItem("taskList",JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}



    const saveTask=(taskObj)=>{
let tempList=taskList
taskList.push(taskObj)
localStorage.setItem("taskList", JSON.stringify(tempList))
setTaskList(tempList)
setShowModel(false)
    }

    const updateListArray=(obj,index)=>{
        let tempList=taskList
        tempList[index]=obj
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload();
    }

    return (
        <>
        <div className="bg-slate-200">
         
                <div className="text-center bg-slate-300 h-60">
                    <h1 className="text-4xl font-bold font-serif m-3 p-2">Todo List</h1>
                    <button onClick={() => setShowModel(true)} className="bg-blue-700 w-32 h-10 rounded-3xl font-serif text-white m-2 p-2 ">Create Task</button>
                    

                </div>
                
                
                {showModel && <CreateTask save={saveTask} onClose={()=>setShowModel(false)} />}
                   <div className=" p-10 m-2 w-[100%] flex flex-wrap gap-10 justify-center ">
                    {taskList.map((obj,index)=><Card taskName = {obj.Name}  taskDesc = {obj.Description} index = {index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
                    </div> 
                    <Card/>

                    </div>

        </>
    )
}
export default MyComponent