// Function to separate positive and negative integers in place
function separatePositive(arr) {
    let positiveIndex = 0; // Pointer for the next position of positive numbers

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            // If the current element is positive, swap it with the element at positiveIndex
            if (i !== positiveIndex) {
                [arr[positiveIndex], arr[i]] = [arr[i], arr[positiveIndex]];
            }
            positiveIndex++;
        }
    }

    return arr; // Return the modified array (though it's done in place)
}
