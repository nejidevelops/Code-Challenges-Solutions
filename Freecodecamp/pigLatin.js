function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
  
    if(vowels.includes(str[0])){
      return str + 'way';
    }
  
    let vowelPosition = 0;
    while(vowelPosition < str.length && !vowels.includes(str[vowelPosition])){
      vowelPosition++;
    }
  
    return str.slice(vowelPosition) + str.slice(0, vowelPosition) + 'ay';
  }
  
  translatePigLatin("consonant");