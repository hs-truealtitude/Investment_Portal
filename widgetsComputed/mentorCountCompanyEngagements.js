return function  () {

    let total = 0
    total = $getGrid('applications').filter(row => (row.name == "Mentor->CompanyUser(inCohort)" || row.name == "Mentor->CompanyUser(Programme)" || row.name == "Mentor->CompanyUser")).length 


return total
}