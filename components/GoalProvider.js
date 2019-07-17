import React, { Component } from 'react'

/* First we will make a new context */
const GoalContext = React.createContext()

/* Then create a provider Component */
class GoalProvider extends Component {

    componentDidMount = () => {
        if (window.localStorage.getItem('goal')) {
            const goalDetails = JSON.parse(window.localStorage.getItem('goal'));
            this.setState({
                name: goalDetails.name,
                sessions: goalDetails.sessions,
                conversions: goalDetails.conversions,
                conversionValue: goalDetails.conversionValue,
            })            
        } 
    }

    state = {
        name: '',
        sessions: 0,
        conversions: 0,
        conversionValue: 0,
    }

    update = (name, type, val) => {
        this.setState({
            [name]: val
        })
    }

    render () {
        return (
            <GoalContext.Provider
                value={{
                    name: this.state.name,
                    sessions: this.state.sessions,
                    conversions: this.state.conversions,
                    conversionValue: this.state.conversionValue,
                    update: this.update
                }}
            >
                {this.props.children}
            </GoalContext.Provider>
        )
    }
}

/* then make a consumer which will surface it */
const GoalConsumer = GoalContext.Consumer

export default GoalProvider
export { GoalConsumer }