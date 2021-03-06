"use strict";

var sphero = require("../");
var orb = sphero("/dev/rfcomm0");

orb.connect(function() {
  orb.streamAccelerometer();

  orb.on("accelerometer", function(data) {
    console.log("::STREAMING ACCELEROMETER::");
    console.log("  data:", data);
  });

  orb.roll(180, 0);
});
