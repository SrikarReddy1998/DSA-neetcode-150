// Group Anagrams

// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

// Example 2:
// Input: strs = ["x"]

// Output: [["x"]]

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (let str of strs) {
            // Sort the string alphabetically
            const key = str.split("").sort().join("");

            // Group by sorted key
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key)!.push(str);
        }

        // Return all grouped arrays
        return Array.from(map.values());
    }
}
