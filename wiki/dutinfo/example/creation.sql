-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2016-11-20 10:33:03.893

-- tables
-- Table: epreuve_student
CREATE TABLE epreuve_student (
    id serial PRIMARY KEY,
    note integer  NULL,
    exam_id integer  NOT NULL,
    student_id integer  NOT NULL
);

-- Table: exam
CREATE TABLE exam (
    id serial PRIMARY KEY,
    description varchar(20)  NULL,
    date date  NOT NULL,
    coef integer  NOT NULL,
    year integer  NOT NULL,
    subject_id integer  NOT NULL,
    teacher_id integer  NOT NULL
);

-- Table: module
CREATE TABLE module (
    id serial PRIMARY KEY,
    name varchar(15)  NOT NULL,
    coef integer  NULL
);

-- Table: student
CREATE TABLE student (
    id serial PRIMARY KEY,
    last_name varchar(20)  NOT NULL,
    first_name varchar(20)  NOT NULL,
    address varchar(40)  NOT NULL,
    city varchar(10) NOT NULL,
    postcode integer  NOT NULL,
    phone varchar(14) NOT NULL,
    birth_date date  NOT NULL,
    year integer  NOT NULL,
    commentary varchar(40)  NULL,
    sex char(1)  NOT NULL,
    entry_date date  NOT NULL,
    CONSTRAINT student_year_ck CHECK (( year in ( 1 , 2 ) )) NOT DEFERRABLE INITIALLY IMMEDIATE,
    CONSTRAINT student_sex_ck CHECK (( sex in ( 'M' , 'F' ) )) NOT DEFERRABLE INITIALLY IMMEDIATE
);

-- Table: subject
CREATE TABLE subject (
    id serial  PRIMARY KEY,
    name varchar(15)  NOT NULL,
    coef integer  NOT NULL,
    module_id integer  NOT NULL
);

-- Table: subject_teacher
CREATE TABLE subject_teacher (
    id serial PRIMARY KEY,
    year integer  NOT NULL,
    teacher_id integer  NOT NULL,
    subject_id integer  NOT NULL
    -- CONSTRAINT subject_teacher_pkey PRIMARY KEY (id,year)
);

-- Table: teacher
CREATE TABLE teacher (
    id serial PRIMARY KEY,
    first_name varchar(20)  NOT NULL,
    last_name varchar(20) NOT NULL,
    function varchar(25)  NOT NULL,
    address varchar(40)  NOT NULL,
    city varchar(10)  NOT NULL,
    postcode integer  NOT NULL,
    phone varchar(14)  NOT NULL,
    birth_date date  NOT NULL,
    start_working date  NOT NULL,
    CONSTRAINT teacher_function_ck CHECK (( function in ( 'AGREGE' , 'CERTIFIE' , 'MAITRE DE CONFERENCES' , 'VACATAIRE' ) )) NOT DEFERRABLE INITIALLY IMMEDIATE
);

-- foreign keys
-- Reference: exam_subject (table: exam)
ALTER TABLE exam ADD CONSTRAINT exam_subject
    FOREIGN KEY (subject_id)
    REFERENCES subject (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: exam_teacher (table: exam)
ALTER TABLE exam ADD CONSTRAINT exam_teacher
    FOREIGN KEY (teacher_id)
    REFERENCES teacher (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: student_epreuve_exam (table: epreuve_student)
ALTER TABLE epreuve_student ADD CONSTRAINT student_epreuve_exam
    FOREIGN KEY (exam_id)
    REFERENCES exam (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: student_epreuve_student (table: epreuve_student)
ALTER TABLE epreuve_student ADD CONSTRAINT student_epreuve_student
    FOREIGN KEY (student_id)
    REFERENCES student (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: subject_module (table: subject)
ALTER TABLE subject ADD CONSTRAINT subject_module
    FOREIGN KEY (module_id)
    REFERENCES module (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: subject_teacher_subject (table: subject_teacher)
ALTER TABLE subject_teacher ADD CONSTRAINT subject_teacher_subject
    FOREIGN KEY (subject_id)
    REFERENCES subject (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: subject_teacher_teacher (table: subject_teacher)
ALTER TABLE subject_teacher ADD CONSTRAINT subject_teacher_teacher
    FOREIGN KEY (teacher_id)
    REFERENCES teacher (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.
