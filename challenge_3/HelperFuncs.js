let removePins = (count, newBoard) => {

    var result = newBoard
    console.log(count)
    var lengthOfEntireArray = newBoard.length
    for (let i = lengthOfEntireArray - 1; i >= 0; i--) {
        var currentItem = newBoard[i]
        if (count === 0) {
            break
        }
        var lengthOfSubArray = currentItem.length
        for (let j = 0; j < lengthOfSubArray; j++) {
            currentItem.pop()
            count--
            if (count === 0) {
                break
            }
        }
    }
    console.log(result)
    return result
}

module.exports = {
    removePins
}