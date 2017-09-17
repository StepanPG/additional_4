module.exports = function multiply(first, second) {
  var firstArr = first.split('').reverse(),
      secondArr = second.split('').reverse();

    var result = [],
        firstArrIndex,
        secondArrIndex,
        remainder = 0;

    for(firstArrIndex = 0; firstArrIndex < firstArr.length; firstArrIndex++){

        for(secondArrIndex = 0; secondArrIndex < secondArr.length || remainder > 0; secondArrIndex++){
            result[firstArrIndex + secondArrIndex] = (remainder += (result[firstArrIndex + secondArrIndex] || 0) + firstArr[firstArrIndex] * (secondArr[secondArrIndex] || 0)) % 10;
            remainder = Math.floor(remainder / 10);
        }

    }

    return result.reverse().join('');
}
