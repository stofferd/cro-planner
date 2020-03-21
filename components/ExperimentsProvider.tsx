import React, { ReactNode } from 'react';
import { Experiment, Validity, Evidence, Effort } from './Types';
import { validityObj, evidenceObj, effortObj } from '../data/questions';
import update from 'immutability-helper';

/* First we will make a new context */
type ExpContext = {
    experiments?: Experiment[];
    addExperiment?: () => void;
    deleteExperiment?: (id: string) => void;
    updateExperiment?: (
        id: string,
        key1: string,
        key2: string,
        key3: string,
        val: number,
        recalculate?: boolean,
    ) => void;
};
export const ExperimentsContext = React.createContext<ExpContext>({});

const ExperimentsProvider = ({ children }: { children: ReactNode }) => {
    // 1. initially load experiments from local storage
    const [experiments, setExperiments] = React.useState<Experiment[]>([]);

    React.useEffect(() => {
        if (window.localStorage.getItem('experiments')) {
            const experiments = JSON.parse(
                window.localStorage.getItem('experiments') as any,
            );
            setExperiments(experiments);
        }
    }, []);

    // 2. Add experiments
    const addExperiment = () => {
        const id =
            '_' +
            Math.random()
                .toString(36)
                .substr(2, 9);
        const name = 'New Experiment';

        const newExperiments: Experiment[] = [...experiments];
        newExperiments.unshift({
            id,
            name,
            score: 0,
            effort: effortObj,
            evidence: evidenceObj,
            validity: validityObj,
        }); //a dd new experiment to start of exp array
        setExperiments(newExperiments);

        window.localStorage.setItem(
            'experiments',
            JSON.stringify(newExperiments),
        );
    };

    // 3. Update experiments

    const updateExperiment = (
        id: string,
        key1: string,
        key2: string,
        key3: string,
        val: number,
        recalculate?: boolean,
    ) => {
        // loop through and modify by ID
        const thisExp = [...experiments].filter((e: Experiment) => {
            return id === e.id;
        })[0];
        const expIndex = experiments.indexOf(thisExp);

        let newExp;
        if (key3) {
            // nested values
            newExp = update(thisExp, {
                [key1]: { [key2]: { [key3]: { $set: val } } },
            });
            if (recalculate) {
                newExp.score = recalculateScore(newExp);
            }
        } else if (key2) {
            // @TODO probably not needed...
            newExp = update(thisExp, {
                [key1]: { [key2]: { $set: val } },
            });
        } else if (key1) {
            // top level things like score or name
            newExp = update(thisExp, {
                [key1]: { $set: val },
            });
        }
        if (!newExp) return;
        const newExperiments = update(experiments, {
            [expIndex]: { $set: newExp },
        });

        // update state
        setExperiments(newExperiments);
        // update local storage
        window.localStorage.setItem(
            'experiments',
            JSON.stringify(newExperiments),
        );
    };

    // 4. Delete experiments

    const deleteExperiment = (id: string) => {
        const experimentsInitial = [...experiments] || [];
        const newExperiments = experimentsInitial.filter((exp: Experiment) => {
            return exp.id !== id;
        });

        setExperiments(newExperiments);
        window.localStorage.setItem(
            'experiments',
            JSON.stringify(newExperiments),
        );
    };

    const recalculateScore = ({
        validity,
        evidence,
        effort,
    }: {
        validity: Validity;
        evidence: Evidence;
        effort: Effort;
    }) => {
        let newScore = 0;
        for (let [key, item] of Object.entries(validity)) {
            newScore += item.value;
        }
        for (let [key, item] of Object.entries(evidence)) {
            newScore += item.value;
        }
        for (let [key, item] of Object.entries(effort)) {
            newScore += item.value;
        }

        return newScore;
    };

    return (
        <ExperimentsContext.Provider
            value={{
                experiments,
                addExperiment,
                deleteExperiment,
                updateExperiment,
            }}
        >
            {children}
        </ExperimentsContext.Provider>
    );
};

/* then make a consumer which will surface it */
export const ExperimentsConsumer = ExperimentsContext.Consumer;

export default ExperimentsProvider;
