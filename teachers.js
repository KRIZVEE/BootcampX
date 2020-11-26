const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`

SELECT distinct teachers.name, cohorts.name as cohort 
FROM teachers
JOIN assistance_requests
on teachers.id = teacher_id
JOIN students
on students.id = student_id
JOIN cohorts
on cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2] || 'JUL02'}%'
ORDER by teachers.name;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));
