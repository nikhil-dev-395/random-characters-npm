const crypto = require("crypto");

/* here i want to show exact numbers hexadecimal or character */

function main(length) {
  const randomText =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let random = crypto.randomBytes(length).toString("hex");
  return random;
}

