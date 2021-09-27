return function  (cohortRow) {

let total = 0

if($getUser('accountType') == "CompanyUser"){
    total = $getGrid('applications').filter(row => row.cohort == cohortRow && row.isComplete == true && row.investor == null && row.mentor != null && row.cohortCompany != null  && row.companyUser == $getUser('profileID')).length 
}    

if($getUser('accountType') == "Mentor"){
    total = $getGrid('applications').filter(row => row.cohort == cohortRow && row.isComplete == true && row.investor == null && row.mentor == $getUser('profileID') && row.cohortCompany != null  && row.companyUser != null).length 
}

return total
}