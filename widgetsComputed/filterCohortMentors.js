return function  (cohortRow) {

let rows = []

rows = $getGrid('applications').filter(row => row.cohort == cohortRow && row.isComplete == true && row.mentor != null) 

return rows
}
