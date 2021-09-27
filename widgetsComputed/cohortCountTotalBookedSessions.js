return function  () {

//Get the row (Cohort)
    let cohortRow = []
    cohortRow = $dataGrid('cohortData')[$getUser('activeMyCohort')]

//Counter
    let statCounter = cohortRow.sessionCount

//Get Number of Stats
    let total = 0
    total = $getGrid('sessions').filter(row => row.cohort == $getUser('activeMyCohort') && (row.direction == "Mentor->CompanyUser" || row.direction == "CompanyUser->Mentor") && row.isBooked == true).length 

//Apply new rows to stat counter
    statCounter = statCounter + total

return statCounter
}