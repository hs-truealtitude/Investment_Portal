return function  () {

    let total = 0
    total = $getGrid('applications').filter(row => row.investor == $getUser('selectedInvestor') && row.cohort == $getUser("activeMyCohort") && row.name == "Investor->CompanyUser" && row.isComplete == true).length 


return total
}