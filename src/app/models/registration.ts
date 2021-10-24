export interface Question {
    id: number,
    name: string,
    answerId: number,
    answers: Answer[]
};

export interface Answer {
    id: number,
    name: string,
};