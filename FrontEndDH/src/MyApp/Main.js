import React, { Component } from 'react'
import Apartments from './1-Apartments'
import CreateApts from './2-CreateApts'
import UpdateApts from './3-UpdateApts'
import CreateFl from './4-CreateFloors'
import UpdateFl from './5-UpdateFloors'
import Style from './Style.css'
import Template from './Template'
import SenData from './senators'

export default class Main extends React.Component{
    state = { showpol: false, senators: [] }

    render(){

        const FilterRepublicans = () => {
            const RepSen = SenData.filter( (politician) => { return politician.party === "Republican"  })
            this.setState({ senators: RepSen , showpol: true })
        }


        const FilterDemocrats = () => {
            const DemSen = SenData.filter((politician) => { return politician.party === "Democrat" })
            this.setState({ senators: DemSen , showpol: true })
        }


        const FilterUtahSenators = () => {
            const UtahSen = SenData.filter( (politician) => { return politician.state === "UT"  } )
            this.setState({ senators: UtahSen , showpol: true })
        }


        const FilterUtahSenior = () => {
            const Senior = SenData.filter( (politician) => { return politician.description === "Senior Senator from Utah"  })
            this.setState({ senators: Senior , showpol: true })
        }


        const RenderToScreen = () => {
            console.clear()
            console.log(this.state.senators)
            return this.state.senators.map((politician) => { return <Template key={politician.phone} info={politician} />  })
        }


            return(
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


            <div>
                <button className="MyButton" onClick={ FilterRepublicans} >Republicans</button>
                <button className="MyButton" onClick={ FilterDemocrats} >Democrats</button>
                <button className="MyButton" onClick={ FilterUtahSenators } >Utah Senators</button>
                <button className="MyButton" onClick={ FilterUtahSenior } >Utah Senior Senator</button>
            </div>


            <hr/>

            { this.state.showpol ? React.createElement( RenderToScreen ) : <div>Click a Button</div> }

            </div>
        )
    }
}
