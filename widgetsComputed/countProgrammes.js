return function  (rowKey) {

    let cohortRow = []
    //Get the row (Cohort)
    cohortRow = $dataGrid('cohortData')[rowKey]


    let programmeCount = 0
    //Count programmes
    programmeCount = Object.keys(cohortRow.$programmes || {}).length

    return programmeCount
}