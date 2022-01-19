import React from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter , Route, Switch} from 'react-router-dom';

export default class PhoneDirectory extends React.Component{
    constructor(){
        super();
        this.state = {
            subscribersList: [{
                id:1,
                name:"Abhishek",
                phone:"8884081917"
            }]
        };
    }

    addSubscribers = (subscribers) =>{
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length>0){
            subscribers.id = subscribersList[subscribersList.length-1].id+1;
        }else{
            subscribers.id = 1;
        }
        subscribersList.push(subscribers);
        this.setState({subscribersList: subscribersList});
        console.log(this.state.subscribersList);
    }

    deleteSubscribers = (subscriberId) =>{
        console.log("Subscriber id to delete : "+subscriberId);
        let subscribersList = this.state.subscribersList;
        console.log(subscribersList);
        subscribersList.splice(subscriberId-1,1);
        console.log(subscribersList);       
        this.setState({subscribersList: subscribersList});
        console.log(this.state.subscribersList);
    }

    render() { 
        return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <ShowSubscribers deleteSubscribers={this.deleteSubscribers} subscribersList={this.state.subscribersList}/>
                </Route>
                <Route exact path='/add'
                    render={({history})=><AddSubscriber history={history} addSubscribers={this.addSubscribers}/>}
                />
            </Switch>
        </BrowserRouter>
        )
    }
}