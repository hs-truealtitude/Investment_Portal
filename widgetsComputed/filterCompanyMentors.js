return function  (company) {

let rows = []

rows = $getGrid('applications').filter(row => row.company == company && row.isComplete == true && (row.name == "CompanyUser->Mentor" || row.name == "Mentor->CompanyUser" || row.name == "CompanyUser->Mentor(inCohort)" || row.name == "Mentor->CompanyUser(inCohort)" || row.name == "CompanyUser->Mentor(Programme)" || row.name == "Mentor->CompanyUser(Programme)")) 

return rows
}