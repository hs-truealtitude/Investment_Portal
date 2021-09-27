return function  () {

//Get the row (programme)
    let programmeRow = []
    programmeRow = $dataGrid('programmeData')[$getUser('activeMyProgramme')]

//Counter
    let statCounter = programmeRow.sessionCount

//Get Number of Stats
    let total = 0
    total = $getGrid('sessions').filter(row => row.programme == $getUser('activeMyProgramme') && (row.direction == "Mentor->CompanyUser" || row.direction == "CompanyUser->Mentor") && row.isBooked == true).length 

//Apply new rows to stat counter
    
    if(total == 0){
        return 0
    }
    else{
        statCounter = statCounter + total
        return statCounter

    }

}