return function  () {

//Get the row (Cohort)
    let cohortRow = []
    cohortRow = $dataGrid('cohortData')[$getUser('activeMyCohort')]

//Counter
    let statCounter = cohortRow.successfulInvestorEngagementsCount

//Get Number of Stats
    let total = 0
    total = $getGrid('applications').filter(row => row.investor == $getUser('selectedInvestor') && row.cohort == $getUser('activeMyCohort') && row.name == "Investor->CompanyUser" && row.isComplete == true).length 

//Apply new rows to stat counter
    if(total == 0){
        return 0
    }
    else{
        statCounter = statCounter + total
        return statCounter

    }

return statCounter
}