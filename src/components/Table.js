import React from 'react';
import Thead from './Thead';
import Tbody from './Tbody';

function Table(props) {
  return(
    
    <table>
    
    {console.log(props)}

      <Thead
      sortByFirstName={props.sortByFirstName}
      sortByLastName={props.sortByLastName}
      sortByAge={props.sortByAge}
      />
      <Tbody 
        key={props.key}
        firstName={props.firstName}
        lastName={props.lastName}
        email={props.email}
        phone={props.phone}
        age={props.age}
        filtered={props.filtered}
      />
    </table>
  )
}
export default Table;