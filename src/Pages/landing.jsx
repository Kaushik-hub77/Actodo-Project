import Header from "../Components/Header.jsx"
import Card from "../Components/Card.jsx"
import TodoContainer from "../Components/TodoContainer.jsx";
import {useLocation} from "react-router-dom"

function Landing(){


    const data= useLocation()
    console.log(data.state.user)

    return(
        <div class="bg-black p-16 ">
    <div class="bg-[#EFEFEF] p-10 rounded-md">
      {/* Header */}
    <Header username={data.state.user} ></Header>
    {/* Card */}
    <div className="flex gap-5 justify-between flex-grow my-4 flex-wrap">
       <Card bgcolor={"#8272DA"} title={23} subtitle={"Chennai"}></Card>
       <Card bgcolor={"#FD6663"} title={"20 December"} subtitle={"14:03:34"} ></Card>
       <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>
    </div>
    {/* Todo Container*/}
    <TodoContainer></TodoContainer>
    </div>
    </div>
    )

}

export default Landing