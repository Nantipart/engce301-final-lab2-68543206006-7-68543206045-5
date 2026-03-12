CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT,
  completed BOOLEAN DEFAULT false
);

CREATE TABLE logs (
  id SERIAL PRIMARY KEY,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username,password)
VALUES ('admin','1234');