"use strict";

const io = require("socket.io")(8080);

io.on("connection", (socket) => {
  socket.on("new-flight", (details) => {
    io.emit("new-flight", details);
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

  socket.on("arrived", (details) => {
    io.emit("arrived", details);
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
});

const airline_io = io.of("/jordanian_airlines");

airline_io.on("connection", (socket) => {
  socket.on("took-off", (details) => {
    console.log(`Flight {
              event: 'took-off',
              time: ${new Date().toUTCString()},
              Details: {
                  airLine: '${details.airline}',
                  flightID: '${details.flightID}',
                  pilot: '${details.pilot}',
                  destination: '${details.destination}',
              }
          }`);
  });
});