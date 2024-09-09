var Express = require("express");
var newrelic = require("newrelic");
var App = Express();
var server = require("http").createServer(App);

const oldConsole = (old) => {
  return {
    log: old.log,
    error: old.error,
    warn: old.warn,
  };
};

const oldConsoleObj = oldConsole(console);

console.log = (a) => {
  oldConsoleObj.log(a);
  newrelic.recordLogEvent({
    message: a,
    level: "INFO",
  });
};

console.error = (a) => {
  oldConsoleObj.log(a);
  newrelic.recordLogEvent({
    message: a,
    level: "ERROR",
  });
};

console.warn = (a) => {
  oldConsoleObj.log(a);
  newrelic.recordLogEvent({
    message: a,
    level: "WARN",
  });
};

App.get("/api/test", (req, res) => {
  console.log(req.query);
  console.warn(req.query);
  console.error(req.query);

  // newrelic.recordLogEvent({
  //   message: "sadsa",
  //   level: "INFO",
  // });

  //   newrelic.recordLogEvent({
  //     message: JSON.stringify(req.query),
  //     level: "INFO",
  //   });
  return res.send(`Hello World!`);
});

server.listen(5000, () => {
  console.log("Up and Running");
});
