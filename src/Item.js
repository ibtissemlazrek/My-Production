import React ,{Component} from'react';
import './Item.css';
const Item=(props)=> {
    const {items ,deleteItem}= props;
    let length=items.length;
    const listItems=  length ?(items.map(item=>{
        return(
            <div key={item.id}>
            <span> { item.name}</span>
            <span> { item.age}</span>
            <span onClick={()=>deleteItem(item.id)}> &times;</span>

            </div>
        )
    })
    ):(<p> there is not any item to show </p>)
    return (
    <div>
        <div className="ListItems"> 
        <span> Name </span>
         <span>Age </span>
          <span> Action </span>
        </div>
      {listItems}
        </div>

    )

}
export default Item


