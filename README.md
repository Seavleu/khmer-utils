# Khmer Number & Currency Formatter 🛠🇰🇭

A lightweight utility library to help developers format numbers, currencies, and dates using **Khmer Unicode**, along with utilities for transliteration, normalization, and Khmer-specific input validation.

## 📦 Installation

Install via [npm](https://www.npmjs.com/):

```bash
npm install khmer-utils
```

## 📚 Features

- ✅ Convert Arabic numbers to Khmer numerals
- ✅ Format currency into Khmer Riel (`៛`) or `រៀល`
- ✅ Format `Date` objects using Khmer digits
- ✅ Normalize Khmer text (trim, reduce spaces, normalize Unicode)
- ✅ Transliterate Khmer script to Latin phonetics
- ✅ Validate Khmer phone numbers & national IDs

## 🛠 Usage

### 1. Importing

```js
const {
  formatNumber,
  formatCurrency,
  formatDate,
  normalizeText,
  khmerToLatin,
  validateMobile,
  validateLandline,
  validateNationalID,
} = require("khmer-utils");
```

## 🔢 formatNumber

Convert Arabic numbers to Khmer numerals.

```js
formatNumber(12345); // "១២៣៤៥"
formatNumber("123,456.78"); // "១២៣,៤៥៦.៧៨"
```

## 💵 formatCurrency

Format numbers as Khmer Riel currency.

```js
formatCurrency(12345);
// Output: "១២,៣៤៥៛"

formatCurrency(12345.678, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  currencySymbol: " រៀល",
});
// Output: "១២,៣៤៥.៦៨ រៀល"
```

## 📅 formatDate

Format JavaScript `Date` objects into `DD/MM/YYYY` using Khmer digits.

```js
formatDate(new Date(2023, 2, 15));
// Output: "១៥/៣/២០២៣"

formatDate(new Date(2025, 0, 1), { delimiter: "-" });
// Output: "១-១-២០២៥"
```

## 🧹 normalizeText

Normalize Khmer or mixed-language text by:

- Removing extra spaces
- Lowercasing
- Unicode NFC normalization

```js
normalizeText("   សួស្តី   ពិភពលោក   ");
// Output: "សួស្តី ពិភពលោក"
```

## 🔤 khmerToLatin

Transliterate basic Khmer script to Latin characters.

```js
khmerToLatin("កខគឃង");
// Output: "kkhggng"
```

## ✅ Validators

### validateMobile

```js
validateMobile("+855-12-3456789"); // true
validateMobile("+855-123-456789"); // false
```

### validateLandline

```js
validateLandline("+855-23-123456"); // true
validateLandline("+855-23-12345"); // false
```

### validateNationalID

```js
validateNationalID("1234567890"); // true
validateNationalID("123456789"); // false
```

## 🔒 License

MIT License

## 📝 Others
Feel free to reach out if you want to <a href="https://github.com/Seavleu/khmer-utils">contribute</a> or report <a href="https://github.com/Seavleu/khmer-utils/issues">issues</a>!

1. Fork this repo
2. Create a new branch: `git checkout -b my-change`
3. Make your changes
4. Submit a pull request

## 🌐 Support & Community

If you find this useful for Khmer development or localization, please ⭐️ the repo and share it!

Created with ❤️ by Jenny Heang
