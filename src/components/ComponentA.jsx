import ComponentB from "./ComponentB"


const ComponentA = ({numA=0}) => {
  return (
    <div>
        value:{numA+5}
        <ComponentB numB={numA+5}/>
        </div>
  )
}

export default ComponentA