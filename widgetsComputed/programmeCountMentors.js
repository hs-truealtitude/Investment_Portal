

return function  () {

    let programmeRow = []
    //Get the row (programme)
    programmeRow = $dataGrid('programmeData')[$getUser('activeMyProgramme')]

    let total = 0
    //GET $mentors Multi-lookup count/length 
    total = Object.keys(programmeRow.$mentors || {}).length

return total
}