import React, { Component } from 'react';

/* First we will make a new context */
export const GoalContext = React.createContext({
    name: '',
    sessions: 0,
    conversions: 0,
    conversionValue: 0,
    update: (name: string, type: string, val: number | string) => {},
});

/* Then create a provider Component */
class GoalProvider extends Component {
    componentDidMount = () => {
        if (window.localStorage.getItem('goal')) {
            const goalDetails = JSON.parse(
                window.localStorage.getItem('goal') as string,
            );
            this.setState({
                name: goalDetails.name,
                sessions: goalDetails.sessions,
                conversions: goalDetails.conversions,
                conversionValue: goalDetails.conversionValue,
            });
        }
    };

    state = {
        name: '',
        sessions: 0,
        conversions: 0,
        conversionValue: 0,
    };

    update = (name: string, type: string, val: number | string) => {
        this.setState({
            [name]: val,
        });
    };

    render() {
        return (
            <GoalContext.Provider
                value={{
                    name: this.state.name,
                    sessions: this.state.sessions,
                    conversions: this.state.conversions,
                    conversionValue: this.state.conversionValue,
                    update: this.update,
                }}
            >
                {this.props.children}
            </GoalContext.Provider>
        );
    }
}

/* then make a consumer which will surface it */
const GoalConsumer = GoalContext.Consumer;

export default GoalProvider;
export { GoalConsumer };
