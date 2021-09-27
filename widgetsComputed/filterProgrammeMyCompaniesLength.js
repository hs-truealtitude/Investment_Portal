return function  (programmeRow) {

let companyTotal = 0

    companyTotal = $getGrid('applications').filter(row => row.programme == programmeRow && row.isComplete == true && row.company != null && row.companyUser == $getUser('profileID')).length 

return companyTotal

}