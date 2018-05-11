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
                <li>Search for apartments.</li>
                <li>Add apartment detail.</li>
                <li>Update floor plan detail.</li>
                <li>Delete apartment.</li>
            </ul>
        </p>
        <hr/>


            <div>
                <button className="MyButton" onClick={ FilterRepublicans} >Show Apartments</button>
                <button className="MyButton" onClick={ FilterDemocrats} >Add Apartments</button>
                <button className="MyButton" onClick={ FilterUtahSenators } >Update Floor Plan</button>
                <button className="MyButton" onClick={ FilterUtahSenior } >Delete Apartment</button>
            </div>


            <hr/>

            { this.state.showpol ? React.createElement( RenderToScreen ) : <div>Click a Button</div> }

            </div>
        )
    }
}
