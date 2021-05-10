const { Client, Server } = require("node-osc");
const gis = require("g-i-s");

const client = new Client("127.0.0.1", 4000);
var server = new Server(3333, "0.0.0.0");

server.on("listening", () => {
  console.log("OSC Server is listening.");
});

server.on("message", (msg) => {
  console.log(`Message: ${msg}`);
  gis("dog", logResults);
  //server.close();
});

// client.send("/hello", "world", (err) => {
//   if (err) console.error(err);
//   client.close();
// });

function logResults(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(results, null, "  "));
    client.send("/test", results[0].url, (err) => {
      if (err) console.error(err);
      client.close();
    });
  }
}
