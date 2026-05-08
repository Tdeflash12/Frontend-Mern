import React, { useState } from 'react'

function Card({title, price=100, brand}){
   const [favorite,setFavorite]= useState(false)
  const [jenisha,setJenisha]= useState(0)
  const[abhesh,setAbhesh]=useState(0)
    return(
    <div className='card'>
      <h1>{title}</h1>
      <h1>{price}</h1>
      <span>{brand}</span>
      
      <hr/>
      <button onClick={()=>setFavorite(!favorite)}>{favorite?  'favorite': 'Not favorite'}</button>
      <hr/>
      <button onClick={()=>setJenisha(!jenisha)}>{jenisha? 'Abhesh':"jenisha"}</button>
      <button onClick={()=>setAbhesh(!abhesh)}>{abhesh? "Abhesh":"Mandal"}</button>
     
    </div>
  )
}

export default Card;