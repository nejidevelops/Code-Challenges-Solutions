function pairElement(str) {
    const basePairs = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C'
    };
  
    const pairedElements = [];
    for (let i = 0; i < str.length; i++) {
      const currentBase = str[i];
      const pair = [currentBase, basePairs[currentBase]];
      pairedElements.push(pair);
    }
  
    return pairedElements;
  }
  
  
  pairElement("GCG");