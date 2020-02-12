import React from 'react';
import API from "axios";
import Jumbotron from '../../components/Jumbotron';
import Table from '../../components/Table';





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
  searchByFirstName = () => {
    let sorted = this.state.people.filter(
      (person) => {
        // returns all people with values that it can find
        return this.state.people.results.name.first.indexOf(this.state.search) !== -1
      })
      // sets state of filtered to include returned items from filter
    this.setState({filtered: [sorted]})
  }

  sortByFirstName = () => {
  
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
      <div className= "container">
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
      </div>
    )
  }
}

export default MainPage;