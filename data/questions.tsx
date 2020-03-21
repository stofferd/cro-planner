// validity
export const validityObj = {
    fold: {
        text: 'Above the fold?',
        vals: [0, 2],
        value: 0,
    },
    fiveSecs: {
        text: 'Noticeable within 5 seconds?',
        vals: [0, 2],
        value: 0,
    },
    addingRemoving: {
        text: 'Adding or removing an element?',
        vals: [0, 2],
        value: 0,
    },
    userMotivation: {
        text: 'Intended to increase motivation?',
        vals: [0, 2],
        value: 0,
    },
    friction: {
        text: 'Intended to reduce friction?',
        vals: [0, 2],
        value: 0,
    },
};

// Evidence base:
export const evidenceObj = {
    userTesting: {
        text: 'Supported by evidence from user testing?',
        vals: [0, 1],
        value: 0,
    },
    qualitative: {
        text:
            'Supported by evidence from qualitative data (surveys, feedback)?',
        vals: [0, 1],
        value: 0,
    },
    quantitative: {
        text: 'Supported by evidence from quantitative data/analytics?',
        vals: [0, 1],
        value: 0,
    },
    heatmaps: {
        text: 'Supported by evidence from session replay/heatmaps?',
        vals: [0, 1],
        value: 0,
    },
    expert: {
        text: 'Supported by expert review and recommendation?',
        vals: [0, 1],
        value: 0,
    },
    academic: {
        text:
            'Supported by academic research, published research or controlled studies?',
        vals: [0, 1],
        value: 0,
    },
    previousExperiments: {
        text: 'Supported by previous experiments?',
        vals: [0, 1],
        value: 0,
    },
};

// Effort:
export const effortObj =
    // : {
    //     [key: string]: {
    //         [key: string]: string[] | string | Array<number> | number;
    //     };
    // }
    {
        testing: {
            labels: ['High', 'Medium', 'Low', 'No dev'],
            text: 'How difficult will this idea be to test?',
            vals: [0, 1, 2, 3],
            value: 0,
        },
        deployment: {
            labels: ['High', 'Medium', 'Low', 'No dev'],
            text: 'How difficult will this idea be to deploy to live?',
            vals: [0, 1, 2, 3],
            value: 0,
        },
    };
