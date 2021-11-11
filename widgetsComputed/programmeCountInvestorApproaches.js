return function  () {

    //Get cohort rows (within programme)
    let cohortsInProgramme = []
    cohortsInProgramme = $getGrid('cohortData').filter(row => (row.programmes || '').includes($getUser('selectedProgramme')))


//Get Number of Stats
    let total = 0
    for (i = 0; i < cohortsInProgramme.length; i++){
        total = total + $getGrid('applications').filter(row => row.cohort == cohortsInProgramme[i].rowKey && row.name == "Investor->CompanyUser").length 
    }
//Apply new rows to stat counter
    
    if(total == 0){
        return 0
    }
    else{
        return total
    }

}