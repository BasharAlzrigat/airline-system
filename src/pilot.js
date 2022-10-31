"use strict";

require("../system");
require("./manager");

const events = require("./events");

events.on("new-flight", (details) => {
  setTimeout(() => {
    console.log(`Pilot: flight with ID '${details.flightID}' took-off`);
    events.emit("took-off", details);
  }, 2000);
  setTimeout(() => {
    console.log(`Pilot: flight with ID '${details.flightID}' arrived`);
    events.emit("arrived", details);
  }, 5000);
});
