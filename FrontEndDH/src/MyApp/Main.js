import React, { Component } from 'react'
import Apartments from './1-Apartments'
import CreateApts from './2-CreateApts'
import UpdateApts from './3-UpdateApts'
import CreateFl from './4-CreateFloors'
import UpdateFl from './5-UpdateFloors'
import Style from './Style.css'
import Template from './Template'

class Main extends Component {
    render() {
        return (
            <div className="Main">
            <header className="Main-header">
            <h1 className="Main-title">Apartment Unit Mix Analysis</h1>
            </header>
        <hr/>
        <p className="Main-intro">
            <ul>
                <li>Enter apartment information.</li>
                <li>Add floor plan detail.</li>
                <li>Create a cluster with multiple apartments.</li>
                <li>Then graph the information in the cluster.</li>
            </ul>
        </p>
        </div>
        );
    }
}

export default Main;