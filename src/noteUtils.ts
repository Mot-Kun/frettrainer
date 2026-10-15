import { fretboard } from "./fretboard";

export function getRandomNote(): string {
    const randomString = Math.floor(Math.random() * fretboard.length);
    const randomFret = Math.floor(Math.random() * fretboard[randomString].length)

    return fretboard[randomString][randomFret]
}

export function checkNotes(n1: string, n2: string): boolean {
    return n1 === n2
}