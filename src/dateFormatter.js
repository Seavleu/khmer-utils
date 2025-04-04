const { formatNumber } = require('./numberFormatter');

/**
 * Formats a JavaScript Date object into a Khmer date string with Khmer digits.
 *
 * @param {Date} date - The Date object to format.
 * @param {Object} [options] - Optional configuration for date formatting.
 * @param {string} [options.format='DD/MM/YYYY'] - Date format template (currently supports only 'DD/MM/YYYY').
 * @param {string} [options.delimiter='/'] - Delimiter to separate day, month, and year.
 * @returns {string} The formatted date string in Khmer digits.
 * @throws {TypeError} If the provided input is not a Date object.
 */
function formatDate(date, options = {}) {
  const { format = 'DD/MM/YYYY', delimiter = '/' } = options;

  if (!(date instanceof Date)) {
    throw new TypeError('Expected a Date object.');
  }

  // Get day, month, and year values from the date
  const dayNumber = date.getDate();
  const monthNumber = date.getMonth() + 1;
  const yearNumber = date.getFullYear();

  // Convert the numeric values to Khmer digits
  const day = formatNumber(dayNumber);
  const month = formatNumber(monthNumber);
  const year = formatNumber(yearNumber);

  // Format the date string based on the given template.
  // Currently, only 'DD/MM/YYYY' is supported.
  if (format === 'DD/MM/YYYY') {
    return `${day}${delimiter}${month}${delimiter}${year}`;
  } else {
    // In future, add support for other formats.
    return `${day}${delimiter}${month}${delimiter}${year}`;
  }
}

module.exports = { formatDate };
