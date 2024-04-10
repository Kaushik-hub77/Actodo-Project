import { useState } from "react"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"
function Login(props){



    const navigate= useNavigate()


    var userfound= false
     
    const[usrname,setusrname]=useState()
    const[pswrd,setpswrd]=useState()
    const[msguser,setmsguser]=useState(true)

    const users= props.users


    const handleur=(event)=>{
        setusrname(event.target.value)
    }

    const handlepas=(event)=>{
        setpswrd(event.target.value)
    }



    function handleclick(){
        console.log(users)
        users.forEach(function(item){
            if(item.username===usrname && item.password===pswrd)
            {
                console.log("success")
                setmsguser(true)
                userfound= true
                navigate("/Landing", {state:{user:usrname}})

            }
        })

        if(userfound===false)
        {
            console.log("unsuccessfull")
            setmsguser(false)
        }
    }


 
    return(
      <>

        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi👋</h1>
     {
        msguser?<p>I Help You Manage Your Activities Before You Login:)</p> : <p className="text-red-600">Login Unsuccessfull Please signup before You Login</p>}
        <div className="flex flex-col gap-2 my-2">
            <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Username" value={usrname} onChange={handleur}></input>
            <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password" value={pswrd} onChange={handlepas}></input> 
            <button className="bg-[#8272DA] w-24 p-l1 rounded-md" onClick={handleclick}>
                Submit
                </button>

                <p>Don't Have an Account? <Link to={"/Signup"} className="underline" >SignUp</Link></p>
        </div>

        </div>
    </div>
    </>
    )
}

export default Login