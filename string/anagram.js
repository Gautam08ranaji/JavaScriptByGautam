function areAnagrams(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
//   const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr1 = str1;
  const cleanStr2 = str2

  // If lengths differ, not anagrams
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Sort and compare
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Test examples
console.log(areAnagrams("listen", "silent"));           // true
console.log(areAnagrams("hello", "world"));             // false
console.log(areAnagrams("Dormitory", "Dirty room"));  // true
