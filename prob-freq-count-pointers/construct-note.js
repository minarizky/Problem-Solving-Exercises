function constructNote(message, letters) {
    if (message.length === 0) return true;  // empty message can always be built
    if (letters.length === 0) return false; // non-empty message can't be built with no letters
    
    // Create frequency counters for the letters
    const letterCount = {};
    
    // Populate the letter frequency counter
    for (let char of letters) {
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
    
    // Check if we can build the message with the given letters
    for (let char of message) {
      if (!letterCount[char] || letterCount[char] <= 0) {
        return false; // not enough occurrences of char
      }
      letterCount[char]--; // use up one occurrence of the char
    }
    
    return true; // all characters in message were found in letters
  }