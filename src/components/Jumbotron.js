import React from 'react'


function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <form className="search">
          <div className="form-group">
            <label htmlFor="language">Search Term:</label>
            <input
              value={props.search}
              onChange={props.onChangeHandler}
              name="term"
              list="term"
              type="text"
              className="form-control"
              placeholder="Type in a name to begin"
              id="term"
            />
          </div>
        </form>
      </div>
    </div>
  )
}