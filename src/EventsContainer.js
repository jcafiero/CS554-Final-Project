import React, { Component } from 'react';
import './ArticleFiles.css';
import EventList from './EventList';
import EventBtn from './EventBtn';

import events from './event_data';

class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events
    };
  }

  async componentDidMount() { 
    this.setState({
      events: events
    });
    // console.log(this.state.articles)
  }
  render() {
    console.log(this.state.events);
    let body = (
      <div className="container">
          <EventBtn />
          <EventList events={this.state.events} />
      </div>
    );
    return body;
  }
}

export default EventsContainer;