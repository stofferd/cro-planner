import React, { Component } from 'react';

import { validityObj, evidenceObj, effortObj } from '../data/questions';

/* First we will make a new context */
export const ExperimentsContext = React.createContext();

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

    updateExperiment = (id, key1, key2, key3, val, recalculate) => {
        // get a copy of experiments from state
        const newExperiments = [];
        newExperiments.push(...this.state.experiments);
        console.log({ id, key1, key2, key3, val, recalculate });

        // loop through and modify by ID
        newExperiments.forEach((experiment, key) => {
            if (id === experiment.id) {
                if (key3) {
                    // nested values
                    experiment[key1][key2][key3] = val;
                    if (recalculate) {
                        experiment.score = this.recalculateScore(experiment);
                    }
                } else if (key2) {
                    // @TODO probably not needed...
                    experiment[key1][key2] = val;
                } else if (key1) {
                    // top level things like score or name
                    experiment[key1] = val;
                }
            }
        });
        // update state
        this.setState({
            newExperiments,
        });
        // update local storage
        window.localStorage.setItem(
            'experiments',
            JSON.stringify(newExperiments),
        );
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

    recalculateScore = ({ validity, evidence, effort }) => {
        let newScore = 0;
        for (let [key, item] of Object.entries(validity)) {
            newScore += parseInt(item.value);
        }
        for (let [key, item] of Object.entries(evidence)) {
            newScore += parseInt(item.value);
        }
        for (let [key, item] of Object.entries(effort)) {
            newScore += parseInt(item.value);
        }

        return newScore;
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
