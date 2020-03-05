//TODO: attach debugger and step through

let originalStoneValue = null;
let isCapture = false;

function validateIndicesOfStone(currentBoard, placedStoneIndex, memo, libertiesInThisGroup, indiciesInThisGroup, previousIndex) {
    // console.log("recursing right now");
    let index = placedStoneIndex;
    // ternaries handle the edges and corners of the board and set that direction to null
    const northIndex = index > 8 ? index - 9 : null;
    const eastIndex = (index % 8 !== 0) || (index == 0) ? index + 1 : null;
    const southIndex = index < 71 ? index + 9 : null;
    const westIndex =  (index !== 0) && (index % 9 !== 0) ? index - 1 : null;
    const indexesToCheck = [northIndex, eastIndex, southIndex, westIndex];


    // this is the data we're going to add to recursively
    let currentLiberties = libertiesInThisGroup;
    let currentIndicies = [...indiciesInThisGroup, placedStoneIndex];
    if (!memo.has(placedStoneIndex)) {
        let i;
        for (i = 0; i < indexesToCheck.length; i++) {
            let currentIndexToCheck = indexesToCheck[i];

            // if the direction we're checking is null, then our current square is on the edge of the board and we're looking off the board
            if (currentIndexToCheck !== null && currentIndexToCheck !== previousIndex) {
                // check if this current location has already been checked
                // if (!memo.has(currentIndexToCheck)) {
                    // this direction contains an empty square, so we're adding it to the placed stoneGroup's "liberties"
                    if (currentBoard[currentIndexToCheck].value == 3) {
                        currentLiberties++;
                    }
                    // this direction contains a piece from the other color, we need to get liberties of that group as well
                    else if (currentBoard[currentIndexToCheck].value !== currentBoard[placedStoneIndex].value) {
                        // ignore stones of the original color, they'll be reached by another branch if they're relevant
                        if (currentBoard[currentIndexToCheck].value !== originalStoneValue) {
                            let test = validateIndicesOfStone(currentBoard, currentIndexToCheck, memo, 0, [], placedStoneIndex);
                            let opposingLiberties = test[0];
                            let opposingIndicies = test[1];
                            if (opposingLiberties === 0){
                                isCapture = true;
                                opposingIndicies.forEach(opposingIndex => {
                                    console.log("opposing index: " +opposingIndex);
                                    currentBoard[opposingIndex].value = 3;
                                });
                            }
                        }

                    }
                    // the value of the placedStone is equal to the value in this direction i.e. it's of the same color
                    else {
                        let temp = validateIndicesOfStone(currentBoard, currentIndexToCheck, memo, libertiesInThisGroup, indiciesInThisGroup, placedStoneIndex);
                        currentLiberties += temp[0]; // we can resolve the current bug by making this currentLiberties += libertiesInThisGroup + temp[0], but that seems wrong to me
                        currentIndicies = [...currentIndicies, ...temp[1]];
                        console.log(currentLiberties);

                    }

                    // memo.set(currentIndexToCheck, [currentLiberties, currentIndicies]);
                // }
            }
        }
        memo.set(placedStoneIndex, [currentLiberties, currentIndicies]);
    }

    return memo.get(placedStoneIndex);
}


// currentBoard is the array of every point on the board (and their indexes, keys and 
// values) before the stone is placed
// currentBoard: [ spaces: array ]
// 
// spaces: [{
//     key:            string   ('A1' - 'I9')    board position
//     value:          int      (0, 1 or 3)      stone color
//     group:          array    (some # spaces)  all spaces of the same color touching this stone
//     groupLiberties: array    (some # spaces)  all empty spaces touching this group
//     }]
//
// placedStone is an object in the spaces array   
//
// index:          int      (0-81)           index of item in the array
// 
// returns the board state after validation, and a boolean if there was an error [spaces: array, isError: bool]
export function validateStone(originalBoard, index, turn) {
    
    // get copies of the old data to update
    let newStone = {...originalBoard[index]};
    let newGoban = [...originalBoard];

    // 0 represents a black stone and 1 represents a white stone. The values are initialized at 3
    newStone.value = turn % 2;
    newGoban.splice(index, 1, newStone);

    // instantiate memoization table to help with recursion
    let memo = new Map();
    // if we're placing a white stone, we don't care about white groups which are not connected with our group
    originalStoneValue = newStone.value;

    let test = validateIndicesOfStone(newGoban, index, memo, 0, [], null);
    console.log(test);
    let libertiesOfPlacedStoneGroup = test[0];
    if (libertiesOfPlacedStoneGroup === 0 && isCapture === false){
        console.log("error");
        return [originalBoard, true];
    }
    // console.log(JSON.stringify(newGoban));

    return [newGoban, false];


}