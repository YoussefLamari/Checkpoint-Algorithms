var sentence = "This is a sample sentence. ";
var length = 0;
var wordCount = 0;
var vowelCount = 0;

for (var i = 0; i < sentence.length; i++) {
    // Count the length of the sentence
    length++;

    // Count the number of words in the sentence
    if (sentence[i] === " ") {
        wordCount++;
    }

    // Count the number of vowels in the sentence
    if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u" || sentence[i] === "A" || sentence[i] === "E" || sentence[i] === "I" || sentence[i] === "O" || sentence[i] === "U") {
        vowelCount++;
    }
}

// Since the last character is a period, we need to subtract one from the length and word count
length--;
wordCount--;

console.log("The length of the sentence is: " + length);
console.log("The number of words in the sentence is: " + (wordCount + 1));
console.log("The number of vowels in the sentence is: " + vowelCount);
