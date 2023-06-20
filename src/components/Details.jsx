import React from 'react'
import TheData from "./Data";

export default function Details() {
let itemid=+window.location.href.slice(30,(window.location.href.length))
// console.log(itemid)

//conditinal rendring #############
let data=TheData.map(a=>{
    return a.id===itemid? (
      <div key={a.id} className='TheProductInDetails'>
        <img src={a.image} alt='this is imageMan'/>
        <div className='flexx'>
        <h2>Product id: {a.id}</h2>
        <h3>Name: {a.title.slice(0,30)}</h3>
        <h6>Name: {a.description.slice(0,100)}</h6>
        <h4>Price: {a.price}</h4>
        <button className='detailsbuybtn'>BUY</button>
        </div>
      </div>
    ):null
  })
  // console.log(data)
  // const final=data.filter(a=>a.id===itemid)
  return (
    

    <div className='Details'>
     {data}
    </div>
  )
}
