import { Link } from "react-router-dom"
import { useState } from "react"
import {useNavigate} from "react-router-dom";

function Signup(props) {
    const users= props.users
    const setusers= props.setusers


    const navigate= useNavigate()
    const[usrname,setusrname]=useState()
    const[pswrd,setpswrd]=useState()

    const handleur=(event)=>{
        setusrname(event.target.value)
    }

    const handlepas=(event)=>{
        setpswrd(event.target.value)
    }

    const adduser=()=>{
        setusers([...users,{username:usrname,password:pswrd}])
        navigate("/")
    }


    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi👋</h1>
            <p>SignUp here :)</p>

            <div className="flex flex-col gap-2 my-2">
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Username" onChange={handleur}></input>
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password" onChange={handlepas}></input> 
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="confirmpassword"></input>
                <button className="bg-[#FCA201] w-24 p-l1 rounded-md" onClick={adduser}>
                    Submit
                    </button>

                    <p>Already have an account? <Link to={"/"} className="underline" >Login</Link></p>
            </div>

            </div>
        </div>

    )
}


export default Signup