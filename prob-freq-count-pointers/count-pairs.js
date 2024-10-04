// Function to count the number of pairs that sum to a target
function countPairs(arr, target) {
    const seen = new Set(); // Set to track seen numbers
    let count = 0; // Count of pairs found

    for (let num of arr) {
        const complement = target - num; // Calculate the required complement
        
        // Check if the complement exists in the seen set
        if (seen.has(complement)) {
            count++; // Increment count if a pair is found
        }

        // Add the current number to the seen set
        seen.add(num);
    }

    return count; // Return the total count of pairs
}