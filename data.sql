CREATE TABLE quiz_responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    responsiveness INT,
    demandingness INT,
    parenting_style VARCHAR(255)
);

select * from quiz_responses;
delete from quiz_responses;