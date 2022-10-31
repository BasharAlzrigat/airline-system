"use strict";

require("./src/manager");
require("./src/pilot");
const events = require("./src/events");

events.on("new-flight", (details) => {
  console.log(`Flight {
        event: 'new-flight',
        time: ${new Date().toISOString()},
        Details: {
            airLine: '${details.airline}',
            flightID: '${details.flightID}',
            pilot: '${details.pilot}',
            destination: '${details.destination}',
        }
    }`);
});

events.on("took-off", (details) => {
  console.log(`Flight {
        event: 'took-off',
        time: ${new Date().toISOString()},
        Details: {
            airLine: '${details.airline}',
            flightID: '${details.flightID}',
            pilot: '${details.pilot}',
            destination: '${details.destination}',
        }
    }`);
});

events.on("arrived", (details) => {
  console.log(`Flight {
        event: 'arrived',
        time: ${new Date().toISOString()},
        Details: {
            airLine: '${details.airline}',
            flightID: '${details.flightID}',
            pilot: '${details.pilot}',
            destination: '${details.destination}',
        }
    }`);
});
