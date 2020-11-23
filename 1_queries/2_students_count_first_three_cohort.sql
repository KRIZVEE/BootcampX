SELECT count(name)
FROM students
WHERE cohort_id 
IN ( SELECT DISTINCT cohort_id 
	 FROM students 
	 ORDER BY cohort_id 
	 LIMIT 3);
