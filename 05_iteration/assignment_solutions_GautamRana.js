// /*
//   Assignment: JavaScript & React Native Questions
//   Submitted by: Gautam Rana
//   Date: June 17, 2025


//   Instructions:
//   - Questions 1, 2, and 6 are plain JavaScript logic-based problems. These can be tested directly using Node.js.
//   - Questions 3, 4, and 5 are based on React Native components and require a React Native environment (like Expo) to test.

//   To run JavaScript questions:
//   - cope each and paste it on js online compiler for easyness`

//   To run React Native questions:
//     cope each and paste on react native online compoler for easyness
// */

// /* ----------------------------- QUESTION 1 -----------------------------

// Given a string s, find the length of the longest substring without duplicate characters.
// Example:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// */

// let s = "abcabcbb";

// function longestNonRepeatedSubString(s) {
//   let maxLength = 0;
//   let substr = "";

//   for (let i = 0; i < s.length; i++) {
//     current = "";

//     for (let j = i; j < s.length; j++) {
//       if (current.includes(s[j])) {
//         break;
//       } else {
//         current += s[j];
//       }
//     }

//     if (maxLength < current.length) {
//       maxLength = current.length;
//       substr = current;
//     }
//   }
//   return `longest non repeated substring is ${substr} and length is ${maxLength} `;
// }

// console.log(longestNonRepeatedSubString(s));

// /* ----------------------------- QUESTION 2 -----------------------------

// Question:
// Given an integer array nums, return true if there exists a triple of indices (i, j, k)
// such that i < j < k and nums[i] < nums[j] < nums[k].
// Examples:
// 1. Input: nums = [1, 2, 3, 4, 5] => Output: true
// 2. Input: nums = [2, 1, 5, 0, 4, 6] => Output: true
// */

// let num = [2, 1, 5, 0, 4, 6];

// function findTriplets(num) {
//   let solution = false;

//   for (let i = 0; i < num.length - 2; i++) {
//     if (num[i] < num[i + 1] && num[i + 1] < num[i + 2]) {
//       solution = true;
//       return solution;
//     }
//   }
//   return solution;
// }

// console.log(findTriplets(num));

// /* ----------------------------- QUESTION 3 -----------------------------

// Create a virtualized list component that efficiently renders a large list of items,
// only rendering items that are visible within the viewport in React Native.
// */

// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// const DATA_OBJECT = {
//   a1: { title: 'Item A1' },
//   b2: { title: 'Item B2' },
//   c3: { title: 'Item C3' },
//   d4: { title: 'Item D4' },
// };

// const DATA = Object.entries(DATA_OBJECT).map(([key, value]) => ({
//   id: key,
//   ...value,
// }));

// const Item = ({ title }: { title: string }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const VirtualizedListFromObject = () => {
//   return (
//     <FlatList
//       data={DATA}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => <Item title={item.title} />}
//       initialNumToRender={10}
//       maxToRenderPerBatch={10}
//       windowSize={5}
//       removeClippedSubviews={true}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#c2f9ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 18,
//   },
// });

// export default VirtualizedListFromObject;

// /* ----------------------------- QUESTION 4 -----------------------------

// You're rendering a list of 10,000 items using FlatList, and scrolling lags.
// Give an example with optimized code to render such a flat list.
// */

// import React from 'react';
// import {
//   FlatList,
//   Text,
//   View,
//   StyleSheet,
//   SafeAreaView,
// } from 'react-native';

// const DATA = Array.from({ length: 10000 }, (_, i) => ({
//   id: `${i}`,
//   title: `Item ${i + 1}`,
// }));

// const ITEM_HEIGHT = 60;

// const Item = React.memo(({ title }: { title: string }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// ));

// const OptimizedFlatList = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({ item }) => <Item title={item.title} />}
//         keyExtractor={(item) => item.id}
//         initialNumToRender={20}
//         maxToRenderPerBatch={20}
//         windowSize={10}
//         removeClippedSubviews={true}
//         getItemLayout={(_, index) => ({
//           length: ITEM_HEIGHT,
//           offset: ITEM_HEIGHT * index,
//           index,
//         })}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     height: ITEM_HEIGHT,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   title: {
//     fontSize: 16,
//   },
// });

// export default OptimizedFlatList;

// /* ----------------------------- QUESTION 5 -----------------------------

// Fix the following crash:
// useEffect(() => {
//   const fetchData = async () => {
//     const res = await fetch(apiUrl);
//     const data = await res.json();
//     setData(data);
//   };
//   fetchData();
// }, []);

// Crash log: “Can't perform a React state update on an unmounted component.”
// */

// useEffect(() => {
//   let isMounted = true;

//   const fetchData = async () => {
//     try {
//       const res = await fetch(apiUrl);
//       const data = await res.json();
//       if (isMounted) {
//         setData(data);
//       }
//     } catch (error) {
//       if (isMounted) {
//         console.error('Fetch error:', error);
//       }
//     }
//   };

//   fetchData();

//   return () => {
//     isMounted = false;
//   };
// }, []);

// /* ----------------------------- QUESTION 6 -----------------------------

// Problem:
// Given a string containing only digits, return the total number of ways to decode it.

// Input: "226"
// Output: 3
// Explanation: "2 2 6" -> "BBF", "22 6" -> "VF", "2 26" -> "BZ"
// */

// function numDecodings(s) {
//   const memo = {};

//   function countWays(index) {
//     if (index === s.length) return 1;
//     if (s[index] === '0') return 0;
//     if (memo[index] !== undefined) return memo[index];

//     let ways = countWays(index + 1);

//     if (
//       index + 1 < s.length &&
//       parseInt(s.substring(index, index + 2)) <= 26
//     ) {
//       ways += countWays(index + 2);
//     }

//     memo[index] = ways;
//     return ways;
//   }

//   return countWays(0);
// }
