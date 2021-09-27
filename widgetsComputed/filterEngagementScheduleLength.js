return function  (cohortRow) {

let total = 0

total = $getGrid('applications').filter(row => row.cohort == cohortRow && row.isComplete == true && row.investor == null && row.mentor != null && row.company != null  && row.companyUser == $getUser('profileID')).length 

return total
}