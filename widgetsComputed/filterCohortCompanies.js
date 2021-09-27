return function  (cohortRow) {

let rows = []

rows = $getGrid('applications').filter(row => row.cohort == cohortRow && row.isComplete == true && row.company != null  && row.companyUser != $getUser('profileID')) 

return rows
}