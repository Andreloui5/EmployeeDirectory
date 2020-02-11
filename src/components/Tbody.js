import React from 'react'

function Tbody(props){
  return (
    props.filtered.map((item, i) => (
      <TrBody key={i}>item</TrBody>
    ))
  )
}
