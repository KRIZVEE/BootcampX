SELECT students.name AS student, avg(assignment_submissions.duration) AS avg_assignment_dur
FROM students JOIN assignment_submissions
ON students.id = student_id
WHERE students.end_date is NULL
GROUP BY student 
ORDER BY avg_assignment_dur DESC;
