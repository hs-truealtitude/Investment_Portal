return function  () {

    let programmeRow = []
    //Get the row (programme)
    programmeRow = $dataGrid('programmeData')[$getUser('activeMyProgramme')]

    let total = 0
    //GET $COMPANIES Multi-lookup count/length 
    total = Object.keys(programmeRow.$companyUsers || {}).length

    totalCompanies = Object.keys(programmeRow.$companies || {}).length

//If there are no companies in the programme there mustn't be any company users present
    if(totalCompanies == 0){
        return 0
    }
    if (total > 0){
        return total
    }

}
