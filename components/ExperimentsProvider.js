import React, { Component } from 'react';

import { validityObj, evidenceObj, effortObj } from '../data/questions';

/* First we will make a new context */
export const ExperimentsContext = React.createContext();

// these object represent the data structure for each experiment
// const validity = {};
// for (const [key, value] of Object.entries(validityObj)) {
//     console.log(key, value);
//     validity[key] = +validityObj[key].toggled; // convert false to 0
// }

// const evidence = {};
// for (const [key, value] of Object.entries(evidenceObj)) {
//     console.log(key, value);
//     evidence[key] = +evidenceObj[key].toggled; // convert false to 0
// }

// const effort = {};
// for (const [key, value] of Object.entries(effortObj)) {
//     console.log(key, value);
//     effort[key] = +effortObj[key].toggled; // convert false to 0
// }

class ExperimentsProvider extends Component {
    // 1. initially load experiments from local storage

    componentDidMount = () => {
        if (window.localStorage.getItem('experiments')) {
            const experiments = JSON.parse(
                window.localStorage.getItem('experiments'),
            );
            this.setState({
                experiments,
            });
        }
    };

    state = {
        experiments: [],
    };

    // 2. Add experiments

    addExperiment = () => {
        const id =
            '_' +
            Math.random()
                .toString(36)
                .substr(2, 9);
        const name = 'New Experiment';

        const experiments = this.state.experiments;
        experiments.unshift({
            id,
            name,
            score: 0,
            effort: effortObj,
            evidence: evidenceObj,
            validity: validityObj,
        }); //add new experiment to start of exp array
        this.setState({
            experiments,
        });
        window.localStorage.setItem('experiments', JSON.stringify(experiments));
    };

    // 3. Update experiments

    updateExperiment = (id, args) => {
        console.log('running');

        const newExperiments = [...this.state.experiments];
        newExperiments.forEach((experiment, key) => {
            // console.log({ keykey: newExperiments[key] });

            if (id === experiment.id) {
                newExperiments[key] = {
                    ...this.state.experiments[key],
                    ...args,
                };

                // data: {
                //     coolVar
                //     ...args, // this then does th ers
                // },

                // newExperiments[key] = {};
                // if (name) experiments[key].name = name;
                // if (score || score === 0) experiments[key].score = score;
            }
        });
        console.log({ newExperiments });

        // this.setState({
        //     experiments,
        // });
        // window.localStorage.setItem('experiments', JSON.stringify(experiments));
    };

    // 4. Delete experiments

    deleteExperiment = id => {
        const experimentsInitial = this.state.experiments
            ? this.state.experiments
            : [];
        const experiments = experimentsInitial.filter(exp => {
            return exp.id !== id;
        });

        this.setState({
            experiments,
        });
        window.localStorage.setItem('experiments', JSON.stringify(experiments));
    };

    render() {
        return (
            <ExperimentsContext.Provider
                value={{
                    experiments: this.state.experiments,
                    addExperiment: this.addExperiment,
                    deleteExperiment: this.deleteExperiment,
                    updateExperiment: this.updateExperiment,
                }}
            >
                {this.props.children}
            </ExperimentsContext.Provider>
        );
    }
}

/* then make a consumer which will surface it */
const ExperimentsConsumer = ExperimentsContext.Consumer;

export default ExperimentsProvider;
export { ExperimentsConsumer };
