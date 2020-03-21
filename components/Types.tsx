export type Question = {
    labels?: string[];
    text: string;
    vals: number[];
    value: number;
};

export type Effort = {
    testing: Question;
    deployment: Question;
};

export type Evidence = {
    userTesting: Question;
    qualitative: Question;
    quantitative: Question;
    heatmaps: Question;
    expert: Question;
    academic: Question;
    previousExperiments: Question;
};

export type Validity = {
    fold: Question;
    fiveSecs: Question;
    addingRemoving: Question;
    userMotivation: Question;
    friction: Question;
};

export type Experiment = {
    id: string;
    name: string;
    score: number;
    effort: Effort;
    evidence: Evidence;
    validity: Validity;
};
