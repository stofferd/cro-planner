import React, { Component } from 'react'

/* First we will make a new context */
const ExperimentsContext = React.createContext()

/* Then create a provider Component */
class ExperimentsProvider extends Component {

    componentDidMount = () => {
        if (window.localStorage.getItem('experiments')) {
            const experiments = JSON.parse(window.localStorage.getItem('experiments'));
            console.log(experiments);
            
            this.setState({
                experiments
            })            
        } 
    }

    state = {
        experiments: []
    }

    addExperiment = (id, name) => {
        const experiments = this.state.experiments;
        experiments.unshift({id, name, score: 0})
        this.setState({
            experiments
        })
    }

    render () {
        return (
            <ExperimentsContext.Provider value={{ 
                experiments: this.state.experiments, 
                addExperiment: this.addExperiment
            }} >
                {this.props.children}
            </ExperimentsContext.Provider>
        )
    }
}

/* then make a consumer which will surface it */
const ExperimentsConsumer = ExperimentsContext.Consumer

export default ExperimentsProvider
export { ExperimentsConsumer }