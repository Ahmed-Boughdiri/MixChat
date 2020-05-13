
export const trait = (word: string): string =>{
    if(word.length > 25) {
        const chx = word.slice(0,25) + "...";
        return chx
    } else {
        return word
    }
}

