// There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

const locations = [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3]
]
let k = 0
for (let i = 0; i < locations.length; i++) {
    const currentLocation = locations[i]

    if (currentLocation[0] > 2) {
        const invalidLocation = true
        if (invalidLocation) {
            k++
            console.log("This location is invalid")
        }
    }
}
console.log(`There were ${k} invalid locations`)

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/