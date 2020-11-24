SELECT cohorts.name AS cohort_name, count(students.name) AS student_count 
FROM students JOIN cohorts
ON students.cohort_id = cohorts.id 
GROUP BY cohort_name
HAVING count(students.name) >= 18 
ORDER BY student_count;
