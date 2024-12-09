function isPalindrome(text){
    for(let i=0; i<text.length/2; i++){
        if(text[i] === text[text.length-i-1]){
            continue;
        }
        else{
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("madam"));