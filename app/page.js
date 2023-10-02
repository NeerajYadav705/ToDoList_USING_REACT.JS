"use client"
import React, { useState } from "react";

const page = () =>{
    const [title, settitle] = useState("");
    const [dets, setdets] = useState("");
    const [task , setTask] = useState([]);
    const submitHandler = (e) =>{
        e.preventDefault();
        setTask([...task,{title,dets}]);
        settitle("");
        setdets("");
    }

    const deletHandler = (i) =>{
        let copytask = [...task]
        copytask.splice(i,1)
        setTask(copytask)
    }

    let renderTask = <h>No Task Available</h>
   if(task.length>0){
    renderTask = task.map((t,i) => {

        return(
         <li key={i} className="flex items-center justify-between mb-6">
             <div className="flex justify-between w-2/3"> 
             <h5 className="text-xl font-semibold">{t.title}</h5>
             <h5 className="text-lg font-light">{t.dets}</h5>
             </div>
            <button 
            onClick={ () => {
                deletHandler(i)
            }}
            className="bg-red-500 text-white px-4 py-2 rounded font-bold">X</button>
         </li>
        );
     });
   }
    return(
        <>
        <h1 className="bg-gray-200 text-black text-5xl font-extralight text-center p-2 ">To - Do - List</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter you task" 
            className="text-2xl border-gray-800 border m-8 py-2 rounded"
            value={title}
            onChange={(elem)=>{
                settitle(elem.target.value)
            }}
            > 
            </input>

            <input type="text" placeholder="Task Details"
             className="text-2xl border-gray-800 border m-8 py-2 rounded"
             value={dets}
             onChange={(elem)=>{
                setdets(elem.target.value)

             }}
             > 
            </input>

            <button className="bg-gray-200 text-black font-semibold px-10 py-3 rounded ">Add</button>
        </form>

        <hr/>
        <div className="p-8 bg-gray-200">
             <ul>
                {renderTask}
             </ul>
        </div>
        </>
    )
}

export default page