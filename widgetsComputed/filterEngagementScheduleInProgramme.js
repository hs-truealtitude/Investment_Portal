return function  (programmeRow) {

let rows = []

if($getUser('accountType') == "CompanyUser"){
    rows = $getGrid('applications').filter(row => row.programme == programmeRow && row.isComplete == true && row.investor == null && row.mentor != null && row.companyWithinProgramme != null  && row.companyUser == $getUser('profileID')) 
}

if($getUser('accountType') == "Mentor"){
    rows = $getGrid('applications').filter(row => row.programme == programmeRow && row.isComplete == true && row.investor == null && row.mentor == $getUser('profileID') && row.companyWithinProgramme != null  && row.companyUser != null) 
}

return rows
}