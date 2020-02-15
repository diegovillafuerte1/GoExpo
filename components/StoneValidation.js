import React from 'react';
import { Text } from 'react-native';


// what if each stone on the board knew what groups and liberties it was a part of and then when it was interacted with, it would fire off an event
// should a group be: every stone, or a map of a key to a group of stones?
function increaseLiberties(capturedStone) {
    // go through each group touching this stone and increase it's liberties
}
// returns a boolean answering whether or not we captured the group that the given stone is apart of
function tryCaptureStones(newGoban, stoneInOpposingGroup, originalStoneIndex) {
    console.log(newGoban[stoneInOpposingGroup.index]);
    console.log(JSON.stringify(stoneInOpposingGroup));
    let isCapture = false;
    stoneInOpposingGroup.group.forEach((stoneIndex) => {
        console.log("stone we're looking at capturing: ");
        console.log(JSON.stringify(stoneInOpposingGroup));
        // let newStone = {...stone};
        // stone loses a liberty (should never be at 0 here)
        // console.log(newGoban[stoneIndex].groupLiberties);
        if (newGoban[stoneIndex].groupLiberties.length > 0) {
            let indexOfOriginalStoneInGroup = stoneInOpposingGroup.groupLiberties.findIndex(element => element == originalStoneIndex);
            console.log(indexOfOriginalStoneInGroup);
            newGoban[stoneIndex].groupLiberties.splice(indexOfOriginalStoneInGroup, 1);
            console.log(JSON.stringify(newGoban[stoneIndex].groupLiberties));
            console.log("removing index: " + originalStoneIndex + " from the liberties of index: " + stoneIndex);
        }
        console.log('liberties of opposing stone: ');
        console.log(stoneInOpposingGroup.groupLiberties);
        // stone is now captured
        if (stoneInOpposingGroup.groupLiberties.length == 0) {
            newGoban[stoneIndex].value = 3;
            newGoban[stoneIndex].group = [];
            newGoban[stoneIndex].groupLiberties = [];
            console.log("stone will be captured!");
            isCapture = true;
            increaseLiberties(newGoban[stoneIndex]);
            // TODO: should incremement score here
        }
        // stone = newStone;

    });
    return [newGoban, isCapture];
        // return true;
    // }
    // return false;
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
// returns the board state after validation, and a boolean if there was an error
export function validateStone(currentBoard, placedStone, index) {
    // each stone has a concept of the groups that it's in
    // we have to check every space that the stone is touching and if it's touching a group of stones, add it to those
    // groups
    let newGoban = [...currentBoard];
    let libertiesOfPlacedStone = [];
    let stonesInGroupOfPlacedStone = [];
    stonesInGroupOfPlacedStone.push(index);
    // console.log(stonesInGroupOfPlacedStone);
    // whether or not this group is capturing at least one stone
    let isCapture = false;

    // ternaries handle the edges and corners of the board and set that direction to null
    const northIndex = index > 8 ? index - 9 : null;
    const eastIndex = (index % 8 !== 0) || (index == 0) ? index + 1 : null;
    const southIndex = index < 71 ? index + 9 : null;
    const westIndex =  (index !== 0) && (index % 9 !== 0) ? index - 1 : null;
    const indexesToCheck = [northIndex, eastIndex, southIndex, westIndex];
    console.log("-------------------------------------------------------------------------------------");


    console.log('index of placed stone: ' + index);
    console.log(JSON.stringify(newGoban));
    // console.log(placedStone);
    let i;
    for (i = 0; i < indexesToCheck.length; i++) {
        // console.log("just after for loop starts");
        // console.log(stonesInGroupOfPlacedStone);
        let currentIndexToCheck = indexesToCheck[i];

        // console.log("we're checking index: " + currentIndexToCheck);
        // console.log("the object at this position is: ");
        // console.log(currentBoard[currentIndexToCheck]);
        // if the direction we're checking is null, then our current square is on the edge of the board
        if (currentIndexToCheck == null) {
            continue;
        }
        // this direction contains an empty square, so we're adding it to the placed stone's "liberties"
        else if (currentBoard[currentIndexToCheck].value == 3) {
            console.log("pushing liberty onto array for direction: " + i);
            libertiesOfPlacedStone.push(indexesToCheck[i]);
        }
        // this directiion contains a piece from the other color, we need to handle captures now, because
        // that will also factor into whether or not a move is suicidal
        else if (currentBoard[currentIndexToCheck].value != placedStone.value) {
            // console.log("there's an enemy stone here! It's this stone: ");
            // console.log(currentBoard[currentIndexToCheck]);
            // console.log("it's group has these liberties: " + currentBoard[currentIndexToCheck].groupLiberties)
            let newGobanAndIsCapture = tryCaptureStones(newGoban, currentBoard[currentIndexToCheck], index);
            newGoban = newGobanAndIsCapture[0];
            isCapture = newGobanAndIsCapture[1];
        }
        // the value of the placedStone is equal to the value in this direction i.e. it's of the same color
        else {
            // we need to merge the liberties of this group of stones with our own liberties
            // this is effectively the union of our current liberties and the group's liberties
            let unionOfLiberties = [
                ...new Set([...currentBoard[currentIndexToCheck].groupLiberties,...libertiesOfPlacedStone])
            ];
            libertiesOfPlacedStone = unionOfLiberties;
            console.log("union of liberties: ");
            console.log(unionOfLiberties);
            // we also need to merge these two groups
            let unionOfGroups = [...new Set([...currentBoard[currentIndexToCheck].group, ...stonesInGroupOfPlacedStone])];
            stonesInGroupOfPlacedStone = unionOfGroups;
        }
    }

    // after we've merged all the groups this stone could be touching, we should have a set of all the liberties, 
    // if that number is 0, this move is invalid (it's suicidal)
    if (!isCapture && libertiesOfPlacedStone.length == 0) {
        console.log("error, move is suicidal");
        return [currentBoard, true];
    }
    // if the move wasn't suicidal we need to update every stone with it's new knowledge of its group and # of liberties
    else {
        stonesInGroupOfPlacedStone.forEach(stoneIndex => {
            console.log(stoneIndex);
            currentBoard[stoneIndex].group = [...stonesInGroupOfPlacedStone];
            currentBoard[stoneIndex].groupLiberties = [...libertiesOfPlacedStone];
        });
        // console.log("first stone in the group: ");
        // console.log(stonesInGroupOfPlacedStone[0]);
        return [newGoban, false];
    }
}
