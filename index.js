const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getRandomLetter() {
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  let count = 0;

  for (let char of message) {
    if (alphabet.includes(char.toLowerCase())) {
      const isUpperCase = char === char.toUpperCase();
      const baseAlphabet = isUpperCase ? alphabet.toUpperCase() : alphabet;
      const index = baseAlphabet.indexOf(char);
      const newIndex = (index + shiftValue) % baseAlphabet.length;
      const encryptedChar = baseAlphabet[newIndex];

      encryptedMessage += encryptedChar;
      count++;

      if (count % 2 === 0) {
        encryptedMessage += getRandomLetter();
      }
    } else {
      encryptedMessage += char;
    }
  }

  return encryptedMessage;
}

function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";
  let count = 0;

  for (let char of encryptedMessage) {
    if (alphabet.includes(char.toLowerCase())) {
      const isUpperCase = char === char.toUpperCase();
      const baseAlphabet = isUpperCase ? alphabet.toUpperCase() : alphabet;
      const index = baseAlphabet.indexOf(char);
      const newIndex =
        (index - shiftValue + baseAlphabet.length) % baseAlphabet.length;
      const decryptedChar = baseAlphabet[newIndex];

      decryptedMessage += decryptedChar;
      count++;

      if (count % 2 === 0) {
        continue;
      }
    } else {
      decryptedMessage += char;
    }
  }

  return decryptedMessage;
}

const message = "Hello World!";
const shiftValue = 42;

const encrypted = encrypt(message, shiftValue);
console.log("Encrypted Message:", encrypted);

const decrypted = decrypt(encrypted, shiftValue);
console.log("Decrypted Message:", decrypted);

const secretMessage =
  "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";
const decryptedSecretMessage = decrypt(secretMessage, shiftValue);
console.log("Decrypted Secret Message:", decryptedSecretMessage);
