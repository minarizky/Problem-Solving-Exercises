// Function to check if the first string is a subsequence of the second string
function isSubsequence(str1, str2) {
    let pointer1 = 0; // Pointer for str1
    let pointer2 = 0; // Pointer for str2

    // Loop through str2 until either pointer goes out of bounds
    while (pointer2 < str2.length) {
        // If characters match, move the pointer for str1
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++;
        }

        // If we've gone through all characters in str1, return true
        if (pointer1 === str1.length) {
            return true;
        }

        // Always move the pointer for str2
        pointer2++;
    }

    // If we finish looping through str2 without matching all of str1, return false
    return pointer1 === str1.length;
}