export interface Action {
    type: string;
    payload?: any;
}

export interface Reducer<I> {
    ( state: I, action: Action ): I
}