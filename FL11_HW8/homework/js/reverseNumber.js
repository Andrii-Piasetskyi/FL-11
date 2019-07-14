function reverseargber(arg) {
    return (
      parseFloat(
        arg
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(arg)
    )                 
  }