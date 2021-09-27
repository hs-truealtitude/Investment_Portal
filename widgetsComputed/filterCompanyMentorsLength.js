return function  (company) {

let total = 0

    total = $getGrid('applications').filter(row => row.company == company && row.isComplete == true && (row.name == "CompanyUser->Mentor" || row.name == "Mentor->CompanyUser")).length 

return total

}