DROP TABLE IF EXISTS USERS CASCADE;
CREATE TABLE USERS (
  id serial,
  created timestamp DEFAULT now(),
  name text,
  info json,
  PRIMARY KEY (id)
);

INSERT INTO USERS ("name") VALUES ('Jack');
INSERT INTO USERS ("name") VALUES ('David');
INSERT INTO USERS ("name") VALUES ('Ronen');
INSERT INTO USERS ("name") VALUES ('Eyal');


