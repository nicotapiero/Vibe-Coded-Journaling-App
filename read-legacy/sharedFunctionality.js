
/**
* Takes in a date string of the form "YYYY-MM-DD"
*/
function getDayOfYear(dateString) {
  // console.log(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))//, Date.UTC(date.getFullYear(), 0, 0)))
  // return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
  let [year, month, day] = dateString.split("-");
  month -= 1;
  day -= 1;

  const timestamp1 = Date.UTC(year, month, day);
  const timestamp2 = Date.UTC(year, 0, 0);
  const differenceInMilliseconds = timestamp1 - timestamp2;
  const differenceInDays = differenceInMilliseconds / 1000 / 60 / 60 / 24;
  return differenceInDays + 1;
}

function getWordCount(text) {
  let splits = text.split(/\s/g).filter(word => word != "");
  return splits.length;
}