function breakOut(array, changeValue, stopValue) {
let newarray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      newarray = changeValue;
      break;
    }}
    return array;
}
