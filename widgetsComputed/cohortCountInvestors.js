return function  () {

    let cohortRow = []
    //Get the row (Cohort)
    cohortRow = $dataGrid('cohortData')[$getUser('activeMyCohort')]

    let total = 0
    //GET $COMPANIES Multi-lookup count/length 
    total = Object.keys(cohortRow.$investors || {}).length

return total
}