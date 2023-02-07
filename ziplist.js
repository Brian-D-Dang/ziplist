const charList = ['a', 'b', 'c'];
const numList = [1, 2, 3];

function zipList(charAr, numar) {
  const combinedList = [];
  for (let i = 0; i < charList.length; i++) {
    combinedList.push(charAr[i]);
    combinedList.push(numar[i]);
  }
  return combinedList;
}

function zipListTheSimpleWay(charAr, numar) {
  return _.flatten(_.zip(charAr, numar));
}

console.log(zipList(charList, numList));
console.log(zipListTheSimpleWay(charList, numList));
