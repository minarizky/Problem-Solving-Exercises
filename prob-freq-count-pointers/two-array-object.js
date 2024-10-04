function twoArrayObject(keys, values) {
    const result = {};
  
    // Loop through the keys array
    for (let i = 0; i < keys.length; i++) {
      // Assign the value from the values array or null if there is no corresponding value
      result[keys[i]] = i < values.length ? values[i] : null;
    }
  
    return result;
  }