import React, { useState } from "react";
import TheData from "./Data";
import { Link } from "react-router-dom";

export default function Allproducts() {
  // console.log(TheData.splice(0,1))
  let [list, updateList] = useState(TheData);
  let [SecondList,newList]=useState(list)
  // const handleRemoveItem = 
 

  const AllData = TheData.map((data,index) => {
    // console.log(data)
    return (
        <tbody key={data.id}>
          <tr>
            <td>{data.id}</td>
            <td>{data.title.slice(0,10)}</td>
            <td>{data.description.slice(0,20)}</td>
            <td>{data.price}</td>
            <td>{data.rating.rate}</td>
            <td>
                <Link to={`/details/${data.id}`}> <button>Deatails</button></Link>
                
                <button onClick={
                      () => {
                       let targetitem= list.splice(index,1)
                      //  console.log(id)
                       updateList(list.filter(item => item.id !== targetitem.id));
                       newList(updateList)
                         
                       }

                }>Delete</button>
                <button>Edit</button>
            </td>
          </tr>
        </tbody>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rate</th>
            <th>Operations</th>
          </tr>
        </thead>
        {AllData}
      </table>
    </div>
  );
}
