return function  (cohortRow) {

let companyTotal = 0

    companyTotal = $getGrid('applications').filter(row => row.cohort == cohortRow && row.isComplete == true && row.company != null && row.companyUser == $getUser('profileID')).length 

return companyTotal

}