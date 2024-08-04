// Function to check if three lines form a haiku
function isHaiku(lines) {
    const syllableCount = lines.map(countSyllables);
    return syllableCount[0] === 5 && syllableCount[1] === 7 && syllableCount[2] === 5;
}

// Simple syllable counting function (naive approach)
function countSyllables(line) {
    line = line.toLowerCase();
    if(line.length <= 0) return 0;
    const matches = line.match(/[aeiouıöü]{1,2}/g);
    return matches ? matches.length : 0;
}

// Extract text from the web page
const bodyText = document.body.innerText;
console.log(bodyText)

// Split text into blocks by the specified delimiters
const textBlocks = bodyText.split(/[\n\.\?\!\,]+/).map(block => block.trim()).filter(block => block.length > 0);
console.log(textBlocks)

// Try to find a haiku
for (let i = 0; i < textBlocks.length - 2; i++) {
    const potentialHaiku = textBlocks.slice(i, i + 3);
    if (isHaiku(potentialHaiku)) {
        const haiku = potentialHaiku.join('\n');
        // Send the haiku to the background script
        console.log("Haiku found:", haiku);
        chrome.runtime.sendMessage({ haiku: haiku });
        break;
    }
}
