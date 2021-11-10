return function  () {

    let rows = []
    rows = $getGrid('applications').filter(row => (row.name == "Mentor->CompanyUser(inCohort)" || row.name == "Mentor->CompanyUser(Programme)" || row.name == "Mentor->CompanyUser") && (row.$cohort != null || row.$programme != null) && row.isComplete == true && row.mentor == $getUser('profileID'))


return rows
}