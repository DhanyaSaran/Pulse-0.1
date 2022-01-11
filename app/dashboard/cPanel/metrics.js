import React from "react";
import { Route, Switch } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './styles/metrics'

//for dropdown
const options = [
  'one', 'two', 'three'
];

// for table
const data = [
  { name: "Queue", value:'100 GB', extra:'100M Records' },
  { name: "Ingested", value:'100 GB' },
  { name: "Queue", value:'100 GB', extra:'100M Records' },
  { name: "Ingested", value:'100 GB' },
 
]


const metrics=()=>{
  let defaultOption = options[0];
const onSelect=(value)=>{

defaultOption=value

}


    return(
        <div className='container'>
      
       <Dropdown
       className="dropdown"
       options={options} 
       onChange={(val)=>onSelect(val)} 
       value={defaultOption} 
       placeholder="Select an option" />



<section className="table">
{/* <table width={'100%'}>
    <thead className="table-heading">
      <tr>
        <th >Logs Pipeline</th>
      </tr>
    </thead>
    <tbody className="table-body">
    {data.map((val, key) => {
          return (
            <tr key={key} className={key%2==0?'firstrow':'secondrow'} >
              <td>{val.name}</td>&nbsp;
              <td >{val.value}
              {val.extra?
              <span className="extra-value">{val.extra}</span>:<span/>}
              </td>
            </tr>
          )
        })} 
    </tbody>
  </table> */}

<table>
    <thead >
        <th>Logs Pipeline</th> 
    </thead>
    <tbody >
    {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>
                 {val.value} <br/>
                 <text className="extra-value">{val.extra?val.extra:''}</text>
               </td>
               
            </tr>
          )
        })} 
    </tbody>
  </table>

</section>
  



    </div>
    )
   
}


export default metrics