const crypto = require("crypto");

/* numbers , base64 and hex all these types will show , */

function main(length = 2, type = "hex") {
  if (type === "hex") {
    const randomText =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let random = crypto.randomBytes(length);
    let response = "";
    for (let i = 0; i < length; i++) {
      let index = random[i] % randomText.length;
      response += randomText[index];
    }

    return response;
  } else if (type === "base64") {
    let random = crypto.randomBytes(length).toString("base64");
    return random;
  } else if (type === "number") {
    const randomNumber = "1234567890";
    let random = crypto.randomBytes(length);
    let response = "";
    for (let i = 0; i < length; i++) {
      let index = random[i] % randomNumber.length;
      response += randomNumber[index];
    }

    return response;
  } else {
    return "nothing !";
  }
}

// console.log(main(4, "hex"));
module.exports = main;
