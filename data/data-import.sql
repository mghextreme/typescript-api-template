CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "name" character varying(255) NOT NULL,
    "birthdate" date,
    "country" character varying(100) NOT NULL
) WITH (oids = false);

INSERT INTO "users" ("id", "name", "birthdate", "country") VALUES
(1,	'Stephen',	'1983-05-06',	'USA'),
(2,	'Felipe',	'1998-12-16',	'Brazil'),
(3,	'Pasha',	'1986-01-07',	'Poland'),
(4,	'Richard',	'1992-06-25',	'France'),
(5,	'Lynda',	'1981-06-14',	'Canada'),
(6,	'Kelly',	'1995-10-04',	'United Kingdom');
