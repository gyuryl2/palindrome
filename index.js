
//reverses string
function reverse(string) {
    //return string.split("").reverse().join("");
    return Array.from(string).reverse().join("");
}

//Defines a Phrase object
function Phrase(content) {
    this.content = content;

    //returns content processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.content.toLowerCase()
    }

    //returns true if phrase is palindrome, false otherwise
    this.palindrome = function palindrome() {
        return this.processedContent() === reverse(this.processedContent());
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