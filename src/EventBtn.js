import React, { Component } from 'react';
// import { Link, Router } from 'react-router-dom';

//todo: Get btn working with react-router


class EventBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { user } = this.state;
    // await ApiService.createEvent({
    //   userID: parseInt(user)
    // });
    console.log(this.props);
    this.props.history.push('/addEvent');
  }

  render() {
    return (
      // <Router>
      // <Link to="/">
          <button onClick={this.handleSubmit} className="btn btn-secondary">Add Event</button>
        // </Link>
        // </Router>

      
    )
  }
}

export default EventBtn;