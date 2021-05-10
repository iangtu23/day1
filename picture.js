var gis = require("g-i-s");

gis("dog", logResults);

function logResults(error, results) {
  if (error) {
    console.log(error);
  } else {
    //console.log(JSON.stringify(results, null, "  "));
    console.log(results[0].url);
  }
}
