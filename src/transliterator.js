/**
 * Khmer to Latin transliteration mapping.
 * Note: Some Khmer characters may require context-sensitive handling;
 * this simple mapping covers basic character-to-character conversion.
 * 
 */
const KHMER_TO_LATIN = {
    "ក": "k",
    "ខ": "kh",
    "គ": "g",
    "ឃ": "gh",
    "ង": "ng",
    "ច": "ch",
    "ឆ": "chh",
    "ជ": "j",
    "ឈ": "jh",
    "ញ": "ny",
    "ដ": "d",
    "ឋ": "th",
    "ឌ": "dh",
    "ឍ": "thh",
    "ណ": "n",
    "ត": "t",
    "ថ": "th",
    "ទ": "d",
    "ធ": "dh",
    "ន": "n",
    "ប": "b",
    "ផ": "ph",
    "ព": "p",
    "ភ": "f",
    "ម": "m",
    "យ": "y",
    "រ": "r",
    "ល": "l",
    "វ": "v",
    "ស": "s",
    "ហ": "h",
    "អ": "a",
    "ឣ": "aa",
    "ឤ": "ae",
    "ឥ": "i",
    "ឦ": "ii",
    "ឧ": "u",
    "ឨ": "uu",
    "ឩ": "o",
    "ឪ": "oo", 
    "ឫ": "e",
    "ឬ": "ee",
    "ឭ": "ai",
    "ឮ": "au",
    "ឯ": "ae",
    "ឰ": "a",
    "ឱ": "ao",
    "ឲ": "a",
    "ឳ": "aa",
    "឴": "o",
    "឵": "oo",
    "ា": "e",
    "ិ": "i",
    "ី": "ii",
    "ឹ": "u",
    "ឺ": "uu",
    "ុ": "o",
    "ូ": "oo",
    "ួ": "u",
    "េ": "e",
    "ែ": "ae",
    "ៃ": "ai",
    "ោ": "o",
    "ៅ": "au",
    "ុំ": "om",
    "ះ": "h",
    "ៈ": ":",
    "៉": "'",
    "៊": "`",
    "់": "'",
    "៏": "a"
  };
  
  /**
   * Transliterates Khmer text to a basic Latin script representation.
   *
   * This function iterates through each character in the input text and maps it
   * to its corresponding Latin representation using the KHMER_TO_LATIN mapping.
   * Characters not found in the mapping are returned as-is.
   *
   * @param {string} text - The Khmer text to transliterate.
   * @returns {string} The transliterated text.
   * @throws {TypeError} If the input is not a string.
   */
  function khmerToLatin(text) {
    if (typeof text !== 'string') {
      throw new TypeError('Input must be a string');
    }
    return text
      .split('')
      .map(char => KHMER_TO_LATIN[char] || char)
      .join('');
  }
  
  module.exports = { khmerToLatin };
  