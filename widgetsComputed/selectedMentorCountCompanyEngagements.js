return function  () {

    let total = 0
    total = $getGrid('applications').filter(row => row.mentor == $getUser('selectedMentor') && row.name == "Mentor->CompanyUser(Programme)" && row.programme == $getUser("activeMyProgramme")).length 


return total
}