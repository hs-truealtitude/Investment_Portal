return function  () {

//Get the row (Cohort)
    let cohortRow = []
    cohortRow = $dataGrid('cohortData')[$getUser('activeMyCohort')]

//Counter
    let statCounter = cohortRow.mentorEngagementsCount

//Get Number of Stats
    let total = 0
    total = $getGrid('applications').filter(row => row.cohort == $getUser('activeMyCohort') && row.name == "Mentor->CompanyUser(inCohort)").length 

//Apply new rows to stat counter
    statCounter = statCounter + total

return statCounter
}