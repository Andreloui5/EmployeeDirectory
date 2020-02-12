import React from 'react'

function Tbody(props){
  return (
    // maps through the filtered state, and produces results on the page
    <div> 
    {props.filtered.map((item, i) => (
      <tr key={i}>
        <td>{item.name.first}</td>
        <td>{item.name.last}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.dob.age}</td>
      </tr>
    ))}
    </div>
  )
}
export default Tbody;