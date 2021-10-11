return function  () {

    //Get cohort rows (within programme)
    let cohortsInProgramme = []
    cohortsInProgramme = $getGrid('cohortData').filter(row => (row.programmes || '').includes($getUser('selectedProgramme')))

//Get Number of Stats
    let total = 0
    for (i = 0; i < cohortsInProgramme.length; i++){
        total = total + $getGrid('sessions').filter(row => row.cohort == cohortsInProgramme[i].rowKey && (row.direction == "Mentor->CompanyUser" || row.direction == "CompanyUser->Mentor") && row.isBooked == true).length 
    }
//Apply new rows to stat counter
    
    if(total == 0){
        return 0
    }
    else{
        return total
    }
}