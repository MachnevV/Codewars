function countSheeps(arrayOfSheep) {
    let count = 0;
        for (let prop of arrayOfSheep) {
            if (prop == true) {
                count++;
            }
        }
    return count;
}