import Card from "./Card"
import "./App.css"
import { useEffect, useState } from "react"
import ComponentA from "./components/ComponentA"
import ComponentC from "./components/ComponentC"
import ComponentB from "./components/ComponentB"

function App(){
    const [count,setCount]=useState(0)
    useEffect(()=>{ },
[count] // dependencies (state variable)
)
    console.log(count)
    return(
 <div>
    <span>count:{count}</span>
<hr/>
    <button onClick={()=>setCount(count + 1)} >click</button>
 <Card title="IPhone" price = {60}brand ="iphone12" />
 <Card title="SAMSUNG"  brand ="samsung" />
 <Card title= "POCO" price={1000} brand ="poco"/>
 <ComponentA/>
 <ComponentB/>
 <ComponentC/>

  
 

 </div>
 )
}
export default App