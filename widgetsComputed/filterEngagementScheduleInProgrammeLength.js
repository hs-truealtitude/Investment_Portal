return function  (programmeRow) {

let total = 0

if($getUser('accountType') == "CompanyUser"){
    total = $getGrid('applications').filter(row => row.programme == programmeRow && row.isComplete == true && row.investor == null && row.mentor != null && row.companyWithinProgramme != null  && row.companyUser == $getUser('profileID')).length 
}    

if($getUser('accountType') == "Mentor"){
    total = $getGrid('applications').filter(row => row.programme == programmeRow && row.isComplete == true && row.investor == null && row.mentor == $getUser('profileID') && row.companyWithinProgramme != null  && row.companyUser != null).length 
}

return total
}