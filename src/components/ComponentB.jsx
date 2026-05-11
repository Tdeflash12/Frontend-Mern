
import { useSelector } from "react-redux";

const ComponentB = () => {
    const {count}=useSelector((state)=> state.counter);
  
  return (
    <div>ComponentB:{count}</div>
  )
}

export default ComponentB