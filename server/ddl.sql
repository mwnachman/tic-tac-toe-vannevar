CREATE DATABASE tictactoe;
USE tictactoe;

CREATE TABLE User (
  id        INT AUTO_INCREMENT,
  name      VARCHAR(45),
  email     VARCHAR(64) NOT NULL,
  password  VARCHAR(64) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Game (
  id            INT AUTO_INCREMENT,
  time_played   DATETIME NOT NULL,
  game_state    JSON,
  result        ENUM('won', 'draw'),
  o_player      INT,
  x_player      INT,
  winner        INT,
  PRIMARY KEY (id),
  FOREIGN KEY (o_player) REFERENCES User (id),
  FOREIGN KEY (x_player) REFERENCES User (id),
  FOREIGN KEY (winner) REFERENCES User (id)
);
