import React from 'react';
// import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css';
import ArticleContainer from './ArticleContainer';
import EventsContainer from './EventsContainer';
import Profile from './Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        articles: [],
        events: [],
        profile: []
    }
}
async componentDidMount() {
  // const articles = await ApiService.getArticles({
  //     first_name: '',
  //     last_name: ''
  // });
  // this.setState({
  //     articles: articles
  // });
}
  render() {
    return (
      <div className="App">
        <Navbar />

        {/* <Profile profile={this.state.profile} /> */}
        
        <ArticleContainer articles={this.state.articles}/>

        <EventsContainer events={this.state.articles} />
      </div>
    );
  }
  
}

export default App;
