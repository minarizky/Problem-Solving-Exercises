function sameFrequency(num1, num2) {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
  
    // If the lengths of the strings are not the same, return false
    if (strNum1.length !== strNum2.length) return false;
  
    const countDigits = {};
  
    // Count frequency of digits in the first number
    for (let digit of strNum1) {
      countDigits[digit] = (countDigits[digit] || 0) + 1;
    }
  
    // Compare frequencies of digits in the second number
    for (let digit of strNum2) {
      if (!countDigits[digit]) {
        return false; // if a digit doesn't exist or has a different frequency
      } else {
        countDigits[digit] -= 1;
      }
    }
  
    return true;
  }