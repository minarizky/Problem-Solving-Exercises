// Function to find the length of the longest consecutive decrease of integers
function longestFall(arr) {
    if (arr.length === 0) return 0; // Return 0 for an empty array

    let maxLength = 1; // To keep track of the longest fall
    let currentLength = 1; // To keep track of the current fall length

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            currentLength++; // Increment current length if it's a decrease
        } else {
            maxLength = Math.max(maxLength, currentLength); // Update maxLength if needed
            currentLength = 1; // Reset current length for a new potential fall
        }
    }

    // Final comparison to ensure the last sequence is considered
    return Math.max(maxLength, currentLength);
}