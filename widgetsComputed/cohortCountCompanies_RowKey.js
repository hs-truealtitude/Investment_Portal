return function  (cohortRowKey) {

    let cohortRow = []
    //Get the row (Cohort)
    cohortRow = $dataGrid('cohortData')[cohortRowKey]

    let total = 0
    //GET $COMPANIES Multi-lookup count/length 
    total = Object.keys(cohortRow.$companies || {}).length

return total
}