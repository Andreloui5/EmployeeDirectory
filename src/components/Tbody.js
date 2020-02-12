import React from 'react'

function Tbody(props){
  return (
    // maps through the filtered state, and produces results on the page
    props.state.filtered.map((item, i) => (
      <tr key={i}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.age}</td>
      </tr>
    ))
  )
}
export default Tbody;