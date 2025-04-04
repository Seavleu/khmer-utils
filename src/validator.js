/**
 * Validates a Khmer landline phone number in international format.
 * Format: +855-<area code (2 or 3 digits)>-<local number (6 or 7 digits)>
 * Example: +855-23-123456 or +855-237-1234567
 */
function validateLandline(phone) {
  const landlineRegex = /^\+855-?(\d{2,3})-?(\d{6,7})$/;
  return landlineRegex.test(phone);
}

/**
 * Validates a Khmer mobile phone number in international format.
 * Format: +855-<mobile prefix (2 digits)>-<local number (7 digits)>
 * Domestic mobile numbers typically have 9 digits (including a leading 0),
 * but when dialed internationally, the leading 0 is dropped.
 * Example: Domestic: 012345678, International: +855-12-3456789
 */
function validateMobile(phone) {
  const mobileRegex = /^\+855-?(\d{2})-?(\d{7})$/;
  return mobileRegex.test(phone);
}

/**
 * Validates a Khmer National Identity Card number.
 * It must be exactly 10 digits.
 */
function validateNationalID(id) {
  const idRegex = /^\d{10}$/;
  return idRegex.test(id);
}

module.exports = { validateLandline, validateMobile, validateNationalID };
