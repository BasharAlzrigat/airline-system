"use strict";

const io = require( 'socket.io-client' );
const socket = io.connect( 'http://localhost:8080' );
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");

setInterval(() => {
  const details = {
    airline: "Royal Jordanian Airlines",
    flightID: uuidv4(),
    pilot: faker.name.fullName(),
    destination: `${faker.address.country()}, ${faker.address.city()}`,
  };
  console.log(
    `Manager: new flight with ID '${details.flightID}' have been scheduled`
  );
  socket.emit( 'new-flight', details );
}, 8000);

socket.on("arrived", (details) => {
  console.log(
    `Manager: we’re greatly thankful for the amazing flight, ${details.pilot}`
  );
});
