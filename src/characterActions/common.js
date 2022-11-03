export const setTimeLife = (character, timeDecrement) => {
    return (character.time - timeDecrement) < 0 ? character.time : character.time - timeDecrement
}

export const setEnergy = (character, energyDecrement) => {
    return (character.energy - energyDecrement) < 2 ? character.energy : character.energy - energyDecrement
}

export const setHygiene = (character, hygieneDecrement) => {
    return (character.hygiene - hygieneDecrement) < 0 ? character.hygiene   : character.hygiene - hygieneDecrement
}
