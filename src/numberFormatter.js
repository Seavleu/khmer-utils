const KHMER_DIGITS = {
  "0": "០",
  "1": "១",
  "2": "២",
  "3": "៣",
  "4": "៤",
  "5": "៥",
  "6": "៦",
  "7": "៧",
  "8": "៨",
  "9": "៩",
};

/**
 * Converts Arabic numerals in a string or number to Khmer digits.
 *
 * @param {number|string} value - The number or string to convert.
 * @returns {string} A string with Arabic numerals replaced by Khmer digits.
 */
function formatNumber(value) {
  // Ensure the input is a string
  if (typeof value !== 'string') {
    value = value.toString();
  }
  // Replace each digit using regex
  return value.replace(/\d/g, digit => KHMER_DIGITS[digit]);
}

/**
 * Formats a number as a Khmer currency string.
 *
 * @param {number} amount - The numeric amount to format.
 * @param {object} [options] - Optional formatting options.
 * @param {string} [options.locale='en-US'] - Locale used for number formatting.
 * @param {number} [options.minimumFractionDigits=0] - Minimum fraction digits.
 * @param {number} [options.maximumFractionDigits=2] - Maximum fraction digits.
 * @param {string} [options.currencySymbol=' រៀល'] - Currency symbol to append.
 * @returns {string} A formatted currency string with Khmer digits.
 * @throws {TypeError} If amount is not a number.
 */
function formatCurrency(amount, options = {}) {
  const {
    locale = 'en-US',
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
    currencySymbol = ' រៀល'
  } = options;

  if (typeof amount !== 'number') {
    throw new TypeError('Amount must be a number.');
  }

  // Format the number using locale settings and convert it to Khmer digits.
  const formattedNumber = formatNumber(amount.toLocaleString(locale, {
    minimumFractionDigits,
    maximumFractionDigits,
  }));

  return `${formattedNumber}${currencySymbol}`;
}

module.exports = { formatNumber, formatCurrency };
