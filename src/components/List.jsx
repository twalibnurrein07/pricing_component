import React from "react";

function List(prop){
  return(
    <ul>
    <p><li>{prop.list1}</li></p>
    <p><li>{prop.list2}</li></p>
    <p><li>{prop.list3}</li></p>
    <p><li>{prop.list4}</li></p>
   </ul>  
  )  
}

export default List;