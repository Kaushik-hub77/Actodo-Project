import Addtodoform from "./Addtotform"
import Todolist from "./Todolist"
import { useState } from "react"
function TodoContainer() {


    const[Activityarr,setactivityarr]=useState([
        {
            id:1,
            activity:"Go For A Walk"
        },
        {
            id:2,
            activity:"Have a BreakFast"
        },
        {
            id:3,
            activity:"Take A Shower"
        }
    ])



    return (
            <div>
                <div className="flex gap-5 flex-wrap">
                    <Addtodoform Activityarr={Activityarr} setactivityarr={setactivityarr}></Addtodoform>
                    <Todolist Activityarr={Activityarr} setactivityarr={setactivityarr}></Todolist>
             </div>
            </div>

    )
}

export default TodoContainer