const sentence = 'The quick brown fox jumps over the lazy dog. It barked.';

const encrypted = cipher(sentence, 13)

function cipher(text, n) {
    const chars = text.split('')
    const shiftarry = [];
    const fixedArr = [];
    chars.forEach(char=>{
        let ASCII =  char.charCodeAt();
        if(ASCII >= 65 && ASCII <= 90){
            let uppStr = ASCII + n;
            if(uppStr > 90){
                uppStr = (uppStr-90) + 64;
            }
            shiftarry.push(uppStr);  
        } else if(ASCII >= 97 && ASCII<= 122){
            let loStr = ASCII + n;
            if(loStr > 122){
                loStr = (loStr-122) + 96;
            }
            shiftarry.push(loStr); 
        } else {
            shiftarry.push(ASCII); 
        }
        
    });
    shiftarry.forEach(e=>{
        fixedArr.push(String.fromCharCode(e))
    })
    return fixedArr.join('')
}

console.log(encrypted)