DROP TABLE IF EXISTS post;

CREATE TABLE post (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (200) NOT NULL,
    content VARCHAR (1500) NOT NULL,
    PRIMARY KEY (post_id)
);