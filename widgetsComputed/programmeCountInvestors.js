return function  () {

    //Get cohort rows (within programme)
    let cohortsInProgramme = []
    cohortsInProgramme = $getGrid('cohortData').filter(row => (row.programmes || '').includes($getUser('selectedProgramme')))

    let total = 0
    for (i = 0; i < cohortsInProgramme.length; i++){
        total = total + Object.keys(cohortsInProgramme[i].$investors || {}).length
    }

return total
}