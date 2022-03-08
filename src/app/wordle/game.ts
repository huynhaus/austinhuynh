import { Guess } from "./guess";

export interface Game {
    currentRow: number;
    currentCol: number;
    gameCompleted: boolean;
    guesses: Guess[];
    word: string;
}