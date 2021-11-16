return function  () {

    let cohortRow = $getDashboardModel('cohortData')[$getUser('activeMyCohort')]

    let cohortRowKey = $getUser('activeMyCohort')

    let totalCompanies = 0
    totalCompanies = Object.keys(cohortRow.$companies || {}).length

    let totalInvestors = 0
    totalInvestors = Object.keys(cohortRow.$investors || {}).length

    let totalMentors = 0
    totalMentors = Object.keys(cohortRow.$mentors || {}).length

    const cohortArray = [cohortRowKey, totalCompanies, totalInvestors, totalMentors]

 const objArray = [{rowKey:cohortRowKey, totalInvestors, totalCompanies, totalMentors}]

return objArray
}

