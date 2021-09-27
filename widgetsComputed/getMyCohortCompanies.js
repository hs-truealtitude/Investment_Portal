let currentCohort = $getUser('activeMyCohort')
let myOwnerRowKey = $getUser('profileID')

let cohortCompanies = []

cohortCompanies = $getGrid('cohortData').filter(row => row.rowKey == activeMyCohort && row.mentorOwner == myOwnerRowKey)

return cohortCompanies

