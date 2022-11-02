"use strict";

const io = require("socket.io-client");
const airlineSocket = io.connect("http://localhost:8080/jordanian_airlines");
const originalSocket = io.connect("http://localhost:8080");

originalSocket.on("new-flight", (details) => {
  setTimeout(() => {
    console.log(`Pilot: flight with ID '${details.flightID}' took-off`);
    airlineSocket.emit("took-off", details);
  }, 2000);
  setTimeout(() => {
    console.log(`Pilot: flight with ID '${details.flightID}' arrived`);
    originalSocket.emit("arrived", details);
  }, 5000);
});
