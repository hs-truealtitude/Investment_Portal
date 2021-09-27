return function  () {

    let cohortRow = []
    //Get the row (Cohort)
    cohortRow = $dataGrid('cohortData')[$getUser('activeMyCohort')]

    let total = 0
    //GET $COMPANIES Multi-lookup count/length 
    total = Object.keys(cohortRow.$companyUsers || {}).length

    totalCompanies = Object.keys(cohortRow.$companies || {}).length

//If there are no companies in the cohort there mustn't be any company users present
    if(totalCompanies == 0){
        return 0
    }
    if (total > 0){
        return total
    }

}