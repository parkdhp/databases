var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // db.query('select text from messages', (err, data) => {
      //   if (err) {callback(err)}
      //   else {
      //     callback(null, data)
      //   }
      // });
      db.query(`select m.text, u.userName, r.roomName from users u inner join messages m on (m.id_Users = u.id) inner join rooms r on (m.id_rooms = r.id);`)
    }, // a function which produces all the messages
    post: function (message, callback) {
      var username, text, roomname = {message}

      //inserting the text onto Message table
      db.query(`select id from users where userName = ${username};`, (err, userId) => {
        if (err) {callback(err)}
        else {
          db.query(`select id from rooms where roomName = ${roomname};`, (err, roomId) => {
            if (err) {callback(err)}
            else {
              db.query(`insert into messeges (text, id_Rooms, id_Users) VALUES (${text}, ${roomsId}, ${userId});`, (err, data) => {
                if (err) {callback(err)}
                else {
                  callback(null, message)
                }
              })
            }
          })
        }
      })
      //inserting the text onto Message table
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

