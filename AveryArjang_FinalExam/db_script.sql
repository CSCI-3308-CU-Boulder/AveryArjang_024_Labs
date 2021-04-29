DROP TABLE IF IT EXISTS create_reviews CASCADE:
CREATE IF DOES NOT EXIST brewery_reviewTable(
  brewery_name VARCHAR(30)
  brewery_review VARCHAR(250)
  review_date VARCHAR(200)

review_date Date Not NULL
);

INSERT INTO brewery_reviewTable(brewery_name, brewery_review, review_date);
VALUE('name', 'some things toreview', '20200831');
