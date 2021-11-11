return function  () {

//Get the row (Cohort)
    let cohortRow = []
    cohortRow = $dataGrid('cohortData')[$getUser('activeMyCohort')]

//Get Number of Stats
    let total = 0
    total = $getGrid('applications').filter(row => row.cohort == $getUser('activeMyCohort') && row.name == "Investor->CompanyUser").length 


return total
}