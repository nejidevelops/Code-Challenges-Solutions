function destroyer(arr) {
    const args = Array.prototype.slice.call(arguments);  
    args.splice(0, 1);
    return arr.filter(function(element) {
      return !args.includes(element);
    });
  }
  
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);