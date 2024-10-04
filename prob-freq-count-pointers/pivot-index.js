// Function to find the pivot index where the sum of items to the left equals the sum to the right
function pivotIndex(arr) {
    const totalSum = arr.reduce((acc, num) => acc + num, 0); // Calculate total sum of the array
    let leftSum = 0; // Initialize left sum

    for (let i = 0; i < arr.length; i++) {
        // Right sum is total sum minus left sum minus current element
        const rightSum = totalSum - leftSum - arr[i];

        // Check if left sum equals right sum
        if (leftSum === rightSum) {
            return i; // Return the current index as the pivot index
        }

        // Update left sum for the next iteration
        leftSum += arr[i];
    }

    return -1; // Return -1 if no pivot index exists
}