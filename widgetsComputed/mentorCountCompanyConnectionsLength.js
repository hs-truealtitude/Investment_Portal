return function  () {

    let total = 0
    total = $getGrid('applications').filter(row => (row.name == "Mentor->CompanyUser(inCohort)" || row.name == "Mentor->CompanyUser(Programme)" || row.name == "Mentor->CompanyUser") && (row.$cohort != null || row.$programme != null) && row.isComplete == true).length


return total
}