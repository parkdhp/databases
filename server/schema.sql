CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int auto_increment,
  id_Rooms int,
  id_Users int,
  text varchar(140),
  primary key (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int auto_increment,
  userName varchar(11),
  primary key (id)
);

CREATE TABLE rooms (
  id int auto_increment,
  roomName varchar(11),
  primary key (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

