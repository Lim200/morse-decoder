const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const amountElement = 10;

    const resultArray = expr.match(new RegExp(`.{1,${amountElement}}`, 'g'));
    // console.log(resultArray);

    const morseCode = resultArray.map(sequence => {
        return sequence
          .replace(/10/g, '.') // Заменяем 0 на точку
          .replace(/11/g, '-') // Заменяем 1 на тире
          .replace(/00/g, '')  // Заменяем 1 на пусто
          .replace(/\*{10}/g, ' '); // Заменяем на пробел
      });

      let resultString = '';

for (const item of morseCode) {
    // Проверяем, есть ли такой элемент в MORSE_TABLE
    if (MORSE_TABLE.hasOwnProperty(item)) {
        // Если есть, добавляем его значение в строку
        resultString += MORSE_TABLE[item];
    } else if (item === ' ') {
        resultString += ' ';
    }
}

return resultString;
}

module.exports = {
    decode
}