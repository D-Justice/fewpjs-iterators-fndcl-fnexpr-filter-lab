function findMatching(drivers, string) {
    let matches = drivers.filter(n => {
        return n.toLowerCase() === string.toLowerCase();
    })
    return matches;
}
function fuzzyMatch(drivers, string) {
    let matches = drivers.filter(n => {
        return n[0] === string[0];
    })
    return matches;
}
function matchName(drivers, string) {
    let matches = drivers.filter(n => {
        return n.name === string;
    })
    return matches;
}