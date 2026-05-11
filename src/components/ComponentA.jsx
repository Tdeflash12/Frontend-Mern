import { useDispatch,useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice"
import ComponentB from "./ComponentB"


const ComponentA = () => {
    const dispatch=useDispatch();
    const {count}=useSelector((state)=> state.counter);
   
    function increaseCounter(){
      dispatch(increment())
    }

    function decreaseCounter(){
      dispatch(decrement())
    }
  return (
    <div>
        value:{count}
        <ComponentB />
        <button onClick={increaseCounter}>increase counter</button>
        <button onClick={decreaseCounter}>decrease counter</button>


        </div>

  )
}

export default ComponentA