var path = require("path");
// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/Contact.html"));
  });

  app.get("/newUser", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/newuser.html"));
  });

  app.get("/schedule", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/schedule.html"));
  });

   app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/signIn.html"));
  });


};