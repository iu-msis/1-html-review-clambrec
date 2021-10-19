CREATE DATABASE IF NOT EXISTS database2;
USE database2;

DROP TABLE IF EXISTS book;
CREATE TABLE book (
	bookid int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(48) UNIQUE NOT NULL,
    author varchar(48),
    year_published int,
    publisher varchar(48),
    pages int,
    price varchar(24)
);

INSERT INTO book (title, author, year_published, publisher, pages, price) VALUES
('Harry Potter and the Sorcerer Stone','JK Rowling', 1998, 'Scholastic Corporation', 320, '$13.99'),
('Harry Potter and the Chamber of Secrets', 'JK Rowling', 1999, 'Scholastic Corporation', 251, '$11.94'),
('Harry Potter and the Prisoner of Azkaban', 'JK Rowling', 2000, 'Scholastic Corporation', 317, '$8.98'),
('Harry Potter and the Goblet of Fire', 'JK Rowling', 2001, 'Scholastic Corporation', 636, '$10.00'),
('Harry Potter and the Order of the Phoenix', 'JK Rowling', 2003, 'Scholastic Corporation', 766, '$6.88'),
('Harry Potter and the Half-Blood Prince', 'JK Rowling', 2005, 'Scholastic Corporation', 607, '$6.98');


SELECT * FROM book;
