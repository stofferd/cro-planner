// validity
export const validityObj = {
    fold: {
        text: 'Above the fold?',
        vals: [0, 2],
        toggled: false,
    },
    fiveSecs: {
        text: 'Noticeable within 5 seconds?',
        vals: [0, 2],
        toggled: false,
    },
    addingRemoving: {
        text: 'Adding or removing an element?',
        vals: [0, 2],
        toggled: false,
    },
    userMotivation: {
        text: 'Intended to increase motivation?',
        vals: [0, 2],
        toggled: false,
    },
    friction: {
        text: 'Intended to reduce friction?',
        vals: [0, 2],
        toggled: false,
    },
};

// Evidence base:
export const evidenceObj = {
    userTesting: {
        text: 'Supported by evidence from user testing?',
        vals: [0, 1],
        toggled: false,
    },
    qualitative: {
        text:
            'Supported by evidence from qualitative data (surveys, feedback)?',
        vals: [0, 1],
        toggled: false,
    },
    quantitative: {
        text: 'Supported by evidence from quantitative data/analytics?',
        vals: [0, 1],
        toggled: false,
    },
    heatmaps: {
        text: 'Supported by evidence from session replay/heatmaps?',
        vals: [0, 1],
        toggled: false,
    },
    expert: {
        text: 'Supported by expert review and recommendation?',
        vals: [0, 1],
        toggled: false,
    },
    academic: {
        text:
            'Supported by academic research, published research or controlled studies?',
        vals: [0, 1],
        toggled: false,
    },
    previousExperiments: {
        text: 'Supported by previous experiments?',
        vals: [0, 1],
        toggled: false,
    },
};

// Effort:
export const effortObj = {
    testing: {
        text:
            'How difficult will this idea be to test? (High, Medium, Low, No dev)?',
        vals: [0, 1, 2, 3],
        toggled: false,
    },
    fiveSecs: {
        text: 'How difficult will this idea be to deploy to live?',
        vals: [0, 1, 2, 3],
        toggled: false,
    },
};
