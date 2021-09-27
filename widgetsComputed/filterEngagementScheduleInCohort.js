return function  (cohortRow) {

let rows = []

if($getUser('accountType') == "CompanyUser"){
    rows = $getGrid('applications').filter(row => row.cohort == cohortRow && row.isComplete == true && row.investor == null && row.mentor != null && row.cohortCompany != null  && row.companyUser == $getUser('profileID')) 
}

if($getUser('accountType') == "Mentor"){
    rows = $getGrid('applications').filter(row => row.cohort == cohortRow && row.isComplete == true && row.investor == null && row.mentor == $getUser('profileID') && row.cohortCompany != null  && row.companyUser != null) 
}

return rows
}