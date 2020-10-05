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
    let result ='';
    for (let i=0; i<expr.length; i++){
        if(expr[i] === ' '){
          result += '**********';
        } else {
          for(let key in MORSE_TABLE){
            if(expr[i] === MORSE_TABLE[key]){
              let ones ='';
              
              for (let j=0; j<key.length; j++){
                if(key[j] === '-'){
                  ones+='11';
                }else{
                  ones+= '10';
                }
              }
              while(ones.length < 10){
                ones = '0' + ones;
              }
              result+=ones;
            }
          }
        }
      }
    
    return result;
}

module.exports = {
    decode
}