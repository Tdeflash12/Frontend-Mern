
import { useSelector } from "react-redux";

const ComponentC = () => {
    const {count}=useSelector((state)=> state.counter);

  return (
    <div>ComponentC: {count}</div>
  )
}

export default ComponentC