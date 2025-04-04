/**
 * Normalizes Khmer text to ensure consistent formatting.
 * This function applies Unicode normalization (NFC), replaces multiple spaces with a single space,
 * trims leading and trailing spaces, and converts text to lowercase.
 *
 * Note: Khmer script does not have case distinctions, so `toLowerCase()` is primarily for mixed-language inputs.
 *
 * @param {string} text - The input text to normalize.
 * @returns {string} The normalized text.
 * @throws {TypeError} If the input is not a string.
 */
function normalizeText(text) {
  if (typeof text !== 'string') {
    throw new TypeError('normalizeText expects a string input.');
  }

  return text
    .normalize('NFC')
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    .trim()               // Trim leading and trailing spaces
    .toLowerCase();       // Convert to lowercase for consistency
}

module.exports = { normalizeText };
