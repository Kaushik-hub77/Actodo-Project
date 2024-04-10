import {  useState } from "react"

function Addtodoform(props) {

    const Activityarr= props.Activityarr
    const setactivityarr= props.setactivityarr

    const[newlist,setnewlist]= useState()
    
    const handlechange=(event)=>{
        setnewlist(event.target.value)
    }

    const addlist=()=>{
        setactivityarr([...Activityarr,{id:Activityarr.length+1, activity:newlist}])
        setnewlist("")
    }

    return (
        <>
            <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-2xl">Manage Activities</h1>

                <div>
                    <input  value={newlist}  onChange={handlechange} className="bg-transparent p-1  border border-black " placeholder="New Activity?"></input>
                    <button className="bg-black text-white p-1  border border-black" onClick={addlist}>Add</button>
                </div>
            </div>
        </>
    )
}

export default Addtodoform 