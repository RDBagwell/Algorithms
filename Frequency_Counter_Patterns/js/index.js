const array1 = [1,2,3];
const array2 = [4,9,1];

const text1 = 'awesome';
const text2 = 'someawe';

function same(array1, array2) {
    let frequntContainer_1 = {};
    let frequntContainer_2 = {};
    if(array1.length !== array2.length){
        return false
    }
    array1.forEach(val => {
        frequntContainer_1[val] = (frequntContainer_1[val] || 0) + 1; 
    });
    array2.forEach(val => {
        frequntContainer_2[val] = (frequntContainer_2[val] || 0) + 1; 
    });

    for (let key in frequntContainer_1) {
        if(!(key ** 2 in frequntContainer_2)){
            return false;
        }
        if(frequntContainer_2[key ** 2] !== frequntContainer_1[key]){
            return false;
        }
    }
    return true
}

function isAnagram(text1, text2) {
    let textContainer_1 = {}
    let textContainer_2 = {}
    const textarray_1 = text1.split('');
    const textarray_2 = text2.split('');
    if(text1.length !== text2.length){
        return false;
    }

    textarray_1.forEach(val=>{
        textContainer_1[val] = (textContainer_1[val] || 0) + 1;
    });

    textarray_2.forEach(val=>{
        textContainer_2[val] = (textContainer_2[val] || 0) + 1;
    });

    for (const key in textContainer_1) {
        if(textContainer_1[key] !== textContainer_2[key]){
            return false
        }
    }

   return true;
}

console.log(isAnagram(text1, text2));