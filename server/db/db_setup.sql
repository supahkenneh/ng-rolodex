DROP DATABASE IF EXISTS ng_rolodex;
DROP USER IF EXISTS admin;

CREATE USER admin WITH ENCRYPTED PASSWORD 'password';
CREATE DATABASE ng_rolodex WITH OWNER admin;