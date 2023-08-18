function checkPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return (str !== reversed) ? reversed : true;
}

// There are other ways to check if a string is a palindrome, this is the easiest, but not fastest, as the fastest
// is O(n/2), therefore O(n).

// As the reversed string is needed for the non-palindrome word return, this way of implementing is not only
// easier, but also simpler.

// This function returns the reversed string in case it is not a palindrome and true in case it is.


// It could return the reversed string as in:
/*
function checkPalindrome(str) {
    return str.split("").reverse().join("");
}
*/
// So it would return the reversed in case it is not a palindrome and itself in case it is.