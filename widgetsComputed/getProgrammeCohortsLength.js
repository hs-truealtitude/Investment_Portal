return function  () {

    let cohortsInProgramme = 0
    //Get the row (Cohort)
    cohortsInProgramme = $getGrid('cohortData').filter(row => (row.programmes || '').includes($getUser('selectedProgramme'))).length

return cohortsInProgramme
}


/*return function  () {

    let cohortsInProgramme = 0
    //Get the row (Cohort)
    cohortsInProgramme = $getGrid('cohortData').filter(row => row.programmes == $getUser('selectedProgramme')).length

return cohortsInProgramme
}*/