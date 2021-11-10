return function  () {

    let total = 0
    total = $getGrid('applications').filter(row => row.mentor == $getUser('selectedMentor') && row.name == "Mentor->CompanyUser(inCohort)" && row.cohort == $getUser("activeMyCohort")).length 


return total
}