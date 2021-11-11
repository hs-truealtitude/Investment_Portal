return function  (programmeKey) {

    let cohortsInProgramme = []
    //Get the row (Cohort)
    cohortsInProgramme = $getGrid('cohortData').filter(row => (row.programmes || '').includes(programmeKey))

return cohortsInProgramme

}



