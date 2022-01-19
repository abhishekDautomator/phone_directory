import React from 'react';
import Header from './Header';
import './AddSubscriber.css';
import {Link} from "react-router-dom";

export default class AddSubscriber extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name:'',
            phone:''
        }
    }

    onChangeHandler = (event) =>{
        const state = this.state;
        if(event.target.name === 'name'){
            state.name=event.target.value;
            state.phone=this.state.phone;
        }else if(event.target.name === 'phone'){
            state.name=this.state.name;
            state.phone=event.target.value;
        }
        this.setState(state);
        console.log(this.state);
    }

    onFormSubmitted = (event) =>{
        event.preventDefault();
        this.props.addSubscribers(this.state);
        this.setState({id:0, name:"", phone:''});
        this.props.history.push("/");
    }

    render() {
    return (<div>
        <Header heading="Add Subscriber"/>
        <div className="component-body-container">
            <Link to="/">
            <button className="custom-btn">Back</button>
            </Link>
            <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                <label htmlFor="name" className="label-control">Name: </label><br/>
                <input onChange={this.onChangeHandler} id="name" type="text" name="name" className="input-control"></input><br/>
                <label htmlFor="phone" className="label-control">Phone: </label><br/>
                <input onChange={this.onChangeHandler} id="phone" type="text" name="phone" className="input-control"></input><br/><br/>
                <div className="subscriber-info-container">
                    <span className="subscriber-to-add-heading">Subscriber to be added :</span><br/>
                    <span className="subscriber-info">Name: {this.state.name}</span><br/>
                    <span className="subscriber-info">Phone: {this.state.phone}</span><br/><br/>
                    <button type="submit" className="custom-btn add-btn">Add</button>
                </div>
            </form>
        </div>
    </div>)}
}