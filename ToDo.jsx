import React, { Fragment, useState } from 'react'
const ToDo = () => {
let[list,setList]=useState({
    listItems:""
})

let[listvalue,setListvalue]=useState([])

let[editIndex,setEditindex]=useState(null)
let {listItems}=list
let handlechange=(e)=>{
    setList({listItems:e.target.value})
}
let handlesubmit=(e)=>{
    e.preventDefault()
    if(editIndex!=null){
        listvalue[editIndex]=listItems
        setList({listItems:""})
        setEditindex(null)
    }else{
        setListvalue([...listvalue,listItems])
        setList({listItems:""})
    }
}
let handleEdit=(id)=>{
    setEditindex(id)
    setList({listItems:listvalue[id]})
   
}
let handleDelete=(id)=>{
    let modifiedArray=listvalue.filter((ele,index)=>{
        return index!==id
    }) 
    setListvalue(modifiedArray)
}
  return (
    <div>
      <h1>To-Do-App</h1>  
      <form onSubmit={handlesubmit}>
        <input type="text" name="listItems"id="listItems" placeholder='Items to be Added' value={listItems} onChange={handlechange}/>
        <input type="submit" values={editIndex!==null?"update value":"Add Items"}/>
        </form>
        <ul>
            {
                listvalue.map((ele,index)=>{
                    return<Fragment key={index}>
                        <li>{ele}<button onClick={()=>handleEdit(index)}>Edit</button><button onClick={()=>handleDelete(index)}>Delete</button></li>
                    </Fragment>
                })
            }
            {/* <li>Manisha<button>Edit</button><button>Delete</button></li> */}
        </ul>
        <button onClick={()=>setListvalue([])}>Clear All</button>
     

    </div>
  )
}

export default ToDo
