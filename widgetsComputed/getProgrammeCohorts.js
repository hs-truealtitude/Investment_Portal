return function  () {

    let cohortsInProgramme = []
    //Get the row (Cohort)
    cohortsInProgramme = $getGrid('cohortData').filter(row => (row.programmes || '').includes($getUser('selectedProgramme')))

return cohortsInProgramme
}



