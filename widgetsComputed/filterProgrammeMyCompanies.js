return function  (programmeRow) {

let rows = []

rows = $getGrid('applications').filter(row => row.programme == programmeRow && row.isComplete == true && row.company != null  && row.companyUser == $getUser('profileID')) 

return rows
}