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
    let arr = [];
  let result='';
  for (let i=10; i<=expr.length; i+=10){
    let a = ''
    a = (expr.slice(i-10, i));
    if (a === "**********"){
      arr.push(a);
    } else {
      arr.push(Number(a).toString());
    }
  }
  console.log(arr);
  
  for(let j=0;j<arr.length; j++){
    if(arr[j] === '**********'){
      result += ' ';
    } else {
      let symbolMorce='';
      for (let y=2; y<=arr[j].length;y+=2){
        if(arr[j].slice(y-2, y) === '11'){
          symbolMorce+='-';
        } else{
          symbolMorce+='.';
        }
      }
      let s = MORSE_TABLE[symbolMorce];
      result+=s;
    }
  }
  return result;
}

module.exports = {
    decode
}