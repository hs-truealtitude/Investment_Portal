return function  () {

//Get the row (programme)
    let programmeRow = []
    programmeRow = $dataGrid('programmeData')[$getUser('activeMyProgramme')]

//Counter
    let statCounter = programmeRow.investorEngagementsCount

//Get Number of Stats
    let total = 0
    total = $getGrid('applications').filter(row => row.programme == $getUser('activeMyProgramme') && row.name == "Investor->CompanyUser").length 

//Apply new rows to stat counter
    
    if(total == 0){
        return 0
    }
    else{
        statCounter = statCounter + total
        return statCounter

    }

}