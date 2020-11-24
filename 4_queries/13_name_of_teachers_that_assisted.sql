SELECT distinct teachers.name, cohorts.name as cohort 
FROM teachers
JOIN assistance_requests
on teachers.id = teacher_id
JOIN students
on students.id = student_id
JOIN cohorts
on cohorts.id = cohort_id
WHERE cohorts.name='JUL02'
ORDER by teachers.name;
