import React from 'react';

function Thead(props) {
  return (
    <thead className="col-s-12">
      <tr>
        <th className="m-2 p-2">First Name<i className="fas fa-sort" onClick={props.sortByFirstName}></i></th>
        <th className="m-2 p-2">Last Name<i className="fas fa-sort" onClick={props.sortByLastName}></i></th>
        <th className="m-2 p-2">Email</th>
        <th className="m-2 p-2">Phone</th>
        <th className="m-2 p-2">Age<i className="fas fa-sort" onClick={props.sortByAge}></i></th>
      </tr>
    </thead>
  )

}
export default Thead;