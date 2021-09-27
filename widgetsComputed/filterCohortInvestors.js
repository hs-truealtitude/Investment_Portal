return function  (cohortRow) {

let rows = []

rows = $getGrid('applications').filter(row => row.cohort == cohortRow && row.isComplete == true && row.investor != null) 

return rows
}