export type Column = [string, string, string, string, string]

export type BoardState = {
    CorrectAnswer: string,
    Rows: {
        checked: boolean,
        data: Column,
        matchresult: MatchResult[]
    }[]
}

export enum MatchResult {
    NoMatch = 0,
    MatchButDifferentPos = 1,
    Match = 2
}