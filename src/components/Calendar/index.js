import React, { Component } from 'react';
import Day from "./Day"
import styles from "../Calendar/calendar.module.css"

class Calendar extends Component {
    constructor(props){
        super(props);
        this.state={
            currentDate:new Date(),
        }
    }
    setDate=(date)=>{
        this.setState({currentDate:date})}
    
    render() {
        const {currentDate} = this.state;
        return (
            <div>
                <Day currentDate={currentDate} setDate={this.setDate}/>
            </div>
        );
    }
}

export default Calendar;

