const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id as id, students.name as stud_name, cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
LIMIT 5;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.stud_name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
  })
});
