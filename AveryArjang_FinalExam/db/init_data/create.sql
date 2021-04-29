DROP TABLE IF EXISTS brewery_reviewTable CASCADE;
CREATE TABLE IF NOT EXISTS brewery_reviewTable(
brewery_pk SERIAL PRIMARY KEY,
brewery_name VARCHAR(30),
brewery_review VARCHAR(250),
review_date VARCHAR(100)
);

INSERT INTO brewery_reviewTable(brewery_name, brewery_review, review_date)
VALUES('name', 'some things to review', '20200831');
