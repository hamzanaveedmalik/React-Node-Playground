BEGIN;

DROP TABLE IF EXISTS engineers CASCADE;
DROP TABLE IF EXISTS shifts CASCADE;

CREATE TABLE engineers (
  id                    SERIAL,
name                    VARCHAR     PRIMARY KEY     UNIQUE,
  shifts_worked         INTEGER
);

CREATE TABLE shifts (
  id                 SERIAL,
  shift_today        VARCHAR[],
  shift_yesterday    VARCHAR[]
);

INSERT INTO shifts
  (shift_today, shift_yesterday)
VALUES
('{"name1", "name2"}',
'{"name3", "name4"}');


INSERT INTO engineers
  (name, shifts_worked)
VALUES
  ('Hamza', 0),
  ('Naveed', 0),
  ('Gustavo', 0),
  ('Morales', 0),
  ('Ali', 0),
  ('Alex', 0),
  ('Dev', 0),
  ('Alexa', 0),
  ('Siri', 0),
  ('Viv', 0);

COMMIT;
