function firstNonRepeatingChar(str) {
  const charCount = {};

  // Step 1: Count character frequencies
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Step 2: Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // or return -1 if preferred
}

// Test examples
console.log(firstNonRepeatingChar("aabbcdd"));   // "c"
console.log(firstNonRepeatingChar("aabbcc"));    // null
console.log(firstNonRepeatingChar("swiss"));     // "w"
