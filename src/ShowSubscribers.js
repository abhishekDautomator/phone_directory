import './ShowSubscribers.css';
import React, { Component} from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {

  onDeleteClick = (subscriberId) =>{
    this.props.deleteSubscribers(subscriberId);
  }

  render() {

    return (
      <div className="component-container">
       <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <Link to="/add">
          <button className="custom-btn add-btn">Add</button>
          </Link>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            this.props.subscribersList.map(entry => {
              return <div key={entry.id} className="grid-container">
              <span className="grid-item">{entry.name}</span>
              <span className="grid-item">{entry.phone}</span>
              <span className="grid-item action-button-container">
                <button onClick={this.onDeleteClick.bind(this, entry.id)} className="custom-btn delete-btn">Delete</button>
              </span>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;
