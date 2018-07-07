var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => res.send(data));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let text = req.body.message
      let username = req.body.username
      let roomname = req.body.roomname
      console.log('tur (on controllers):', text, username, roomname)
      let message = {
        text: text,
        username: username,
        roomname: roomname
      }
      models.messages.post(message, (err, message) => {
        if (err) {console.log(err)}
        else {
          res.send(message)
        }
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {callback(err)}
        else {
          res.send(data)
        }
      })
    },
    post: function (req, res) {
      let username = req.body.username;
      console.log('request body (from controllser users.post)', req.body)
      models.users.post(username, (err, message) => {
        if (err) {callback(err)}
        else {
          res.send('user successfully added to system')
        }
      })
    }
  },

  rooms: {
    get: function(req, res) {
      models.rooms.get((err, data) => {
        if (err) {callback(err)}
        else {
          res.send(data)
        }
      })
    },
    post: function (req, res) {
      let roomname = req.body.roomname;
      models.rooms.post(roomname, (err, message) => {
        if (err) {callback(err)}
        else {
          res.send('room successfully added to system')
        }
      })
    }
  }
};

