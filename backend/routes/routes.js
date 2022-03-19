const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");

router.post("/signup", (request, response) => {
  const signedUpUser = new signUpTemplateCopy({
    name: request.body.name,
    email: request.body.email,
    text: request.body.text,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.route("/notes").get((request, response) => {
  Note.find().then((foundNotes) => response.json(foundNotes));
});

module.exports = router;
