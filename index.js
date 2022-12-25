module.exports= Phrase;

//reverses string
function reverse(string) {
    //return string.split("").reverse().join("");
    return Array.from(string).reverse().join("");
}

//Adds "reverse" to all strings
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

//Defines a Phrase object
function Phrase(content) {
    this.content = content;

    //returns content processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase()
    }

    //returns letters in the content (currently a stub)
    this.letters = function letters() {
        // let theLetters = [];
        // const letterRegex = /[a-z]/i;
        // Array.from(this.content).forEach(function(character) {
        //     if (character.match(letterRegex)) {
        //         theLetters.push(character);
        //     }
        // });
        // return theLetters.join(""); //stub return value
        return (this.content.match(/[a-z]/gi) || []).join("");
    }

    //returns true if phrase is palindrome, false otherwise
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
}

//Defines TranslatedPhrase object
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    //returns translation processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.translation.toLowerCase();
    }
}

TranslatedPhrase.prototype = new Phrase();