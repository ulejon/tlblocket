# --- !Ups

CREATE TABLE add (
  id bigserial NOT NULL,
  title character varying(255) NOT NULL,
  CONSTRAINT pk PRIMARY KEY (id)
);


# --- !Downs

DROP TABLE add;