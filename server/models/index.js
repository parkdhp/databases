var db = require('../db').dbConnection;

module.exports = {
  messages: {
    get: function (callback) {
      // db.query(`select m.text, u.userName, r.roomName from users u inner join messages m on (m.id_Users = u.id) inner join rooms r on (m.id_rooms = r.id);`, (err, data) => {
      db.query(`select text from messages;`, (err, data) => {
        console.log('data (from models messages.get): ', data);
        if (err) {callback(err)}
        else {
          callback(null, data)
        }
      })
    }, // a function which produces all the messages
    post: function (message, callback) {
      var {username, text, roomname} = message

      //inserting the text onto Message table
      db.query(`select id from users where userName =?;`, [`${username}`], (err, userId) => {
        if (err) {callback(err)}
        else {
          db.query(`select id from rooms where roomName =?;`, [`${roomname}`], (err, roomId) => {
            if (err) {callback(err)}
            else {
              var fullMessage = {
                text: text,
                id_Rooms: roomId.id,
                id_Users: userId.id
              };
              db.query(`insert into messages set ?;`, fullMessage, (err, data) => {
                if (err) {callback(err)}
                else {
                  callback(null, data)
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
    get: function (callback) {
      db.query(`select userName from users;`, (err, data) => {
        if (err) {callback(err)}
        else {
          callback(null, data)
        }
      })
    },
    post: function (userName, callback) {
      db.query(`insert into users set ?;`, {userName: userName}, (err, data) => {
        if (err) {callback(err)}
        else {
          callback(null, data)
        }
      })
    }
  },

  rooms: {
    // Ditto as above.
    get: function (callback) {
      db.query(`select roomName from rooms;`, (err, data) => {
        if (err) {callback(err)}
        else {
          callback(null, data)
        }
      })
    },
    post: function (roomName, callback) {
      db.query(`insert into rooms set ?;`, {roomName: roomName} ,(err, data, fields) => {
        if (err) {callback(err)}
        else {
          callback(null, data)
        }
      })
    }
  },
};

