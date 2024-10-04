function averagePair(arr, target) {
    if (arr.length === 0) return false;  // no pairs can exist in an empty array
  
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
      const average = (arr[left] + arr[right]) / 2;
      
      if (average === target) {
        return true; // found a matching pair
      } else if (average < target) {
        left++; // move left pointer to the right to increase the average
      } else {
        right--; // move right pointer to the left to decrease the average
      }
    }
    
    return false; // no pair found that matches the target
  }