import React from 'react'

export default class Header extends React.Component{
    render(){
        let text = "Turn of "+ this.props.turn;
        return (<header> {text} </header>);
    }
}