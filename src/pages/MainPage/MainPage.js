import React, { Component } from 'react';
import API from "axios";

class MainPage extends React.Component {

  state = {
    people: [],
    filtered: [],
    search: ""
  }

  //When the component mounts
  componentDidMount() {
    API.getPeople()
    .then(res => this.setState({people: res.results}))
  }

  //map through the array people and filter...
  sortByFirstName = () => {
    let sorted = this.state.people.filter(
      (person) => {
        // returns all people with values that it can find
        return person.firstName.indexOf(this.state.search) !== -1
      })
    this.setState({filtered: [sorted]})
  }

  sortByLastName = () => {

  }

  sortByAge = () => {

  }

  // Whenver a user types a character in the search box, we update our state
  onChangeHandler = evt => {
    const search = evt.target.search;
    const value = evt.target.value;
    this.setState({
      [search]: value
    });
    this.getPeople(this.state.search)
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          search = {this.state.search}
          onChangeHandler = {this.onChangeHandler}
        </Jumbotron>
        <Table>
          onClick={this.sortByFirstName}
          onClick={this.sortByLastName}
          onClick={this.sortByAge}
          filtered={this.state.filtered}
        </Table>
      </Container>
    )
  }
}

export default MainPage;