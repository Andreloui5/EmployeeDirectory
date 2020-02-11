import React, { Component } from 'react';
import API from "axios";

class MainPage extends React.Component {

  state = {
    people: [],
    filtered: [],
    sortAsc: false,
    search: ""
  }

  getRandomPeople = () => {

  }

  //When the component mounts
  componentDidMount() {
    API.getPeople()
    .then(res => this.setState({people: res.results}))
  }

  //map through the array people and filter
  sortByFirstName = () => {
    

    this.setState({filtered: sorted})
  }

  sortByLastName = () => {

  }

  sortByAge = () => {

  }

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