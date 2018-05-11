import React from 'react'
import './Style.css'

export default class Template extends React.Component{
    render(){
        return(
            <div className="TempCont">
            <h3>{ this.props.info.description}</h3>
        <div><strong>Name: </strong>{ this.props.info.person.name }</div>
        <div><strong>Party: </strong>{ this.props.info.party }</div>
        <div><strong>State: </strong>{ this.props.info.state }</div>
        </div>
    )
    }
}