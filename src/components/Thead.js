import React from 'react';

function Thead(props) {
  return (
    <thead>
      <tr>
        <th></th>
        <th>First Name<i className="fas fa-sort" onClick={props.sortByFirstName}></i></th>
        <th>Last Name<i className="fas fa-sort" onClick={props.sortByLastName}></i></th>
        <th>Email</th>
        <th>Phone</th>
        <th>Age<i className="fas fa-sort" onClick={props.sortByAge}></i></th>
      </tr>
    </thead>
  )

}
export default Thead;