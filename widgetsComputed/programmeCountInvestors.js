return function  () {

    let programmeRow = []
    //Get the row (programme)
    programmeRow = $dataGrid('programmeData')[$getUser('activeMyProgramme')]

    let total = 0
    //GET $COMPANIES Multi-lookup count/length 
    total = Object.keys(programmeRow.$investors || {}).length

return total
}