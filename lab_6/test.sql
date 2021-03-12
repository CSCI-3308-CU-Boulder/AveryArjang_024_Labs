CREATE TABLE Universities(University_Name SERIAL PRIMARY KEY, item_name VARCHAR(40) NOT NULL, qty INTEGER NOT NULL, price FLOAT NOT NULL, slogan VARCHAR(200));

CREATE TABLE IF NOT EXISTS competing_uni (university_name VARCHAR(200), date_established DATE, address TEXT, student_pop int, acceptance_rate DEC(65,2), PRIMARY KEY(university_name));

CREATE TABLE Universities(University_Name VARCHAR((200)), Date_Established (Date), Address (Text), Student_Population (Int), Acceptance Rate (Decimal));


INSERT INTO university(university_name,date_established , ddress ,student_pop , acceptance_rate) VALUES ('CU Boulder' , '18760401' , '100 28th st, Boulder, CO 80303' , 35000 , "80%");
