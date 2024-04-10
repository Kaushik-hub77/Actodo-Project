
import Todoitem from "./TodoItem";
function Todolist(props){
   
    const Activityarr= props.Activityarr
    const setactivityarr= props.setactivityarr


    return(
        <>

              <div className="bg-[#BDB4EA] rounded-md p-2 flex-grow">
                  <h1 className="text-2xl font-medium">Today's Activity</h1>
                  {
                    Activityarr.length===0?<p>You haven't added anything Yet</p>:""
                  }
                  {
                    Activityarr.map(function(item,index){
                        return <Todoitem id={item.id} activity={item.activity} index={index} Activityarr={Activityarr} setactivityarr={setactivityarr}></Todoitem>
                    })
                  }
                </div>


                </>
    
    )
}

export default Todolist