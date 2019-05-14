import React, { Component } from 'react';
import profile_data from './profile_data';
import './profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: profile_data.id,
      name: profile_data.name,
      courses: profile_data.courses,
      reviews: profile_data.reviews
    }
  }
  render() {
    let profileName = (
      <h1>{this.state.name}</h1>
    );
    let userID = (
      <h2>ID: {this.state.id}</h2>
    )
    let courseList = (<ul className="course-list">

            {
                this.state.courses.map((item, index) => {
                    return <li key={`course-${index}`}>{this.state.courses[index]}</li>;
                })
            }
    </ul>);

    let reviewsList = (<ul className="review-list">

    {
        this.state.reviews.map((item, index) => {
            return <li key={`review-${index}`}>{this.state.reviews[index]}</li>;
        })
    }
    </ul>);

    return (<div className="profile container">
      {profileName}
      {userID}
      <h2>My Courses</h2>
      {courseList}
      <h2>My Reviews</h2>
      {reviewsList}
    </div>);
  }
}

export default Profile;