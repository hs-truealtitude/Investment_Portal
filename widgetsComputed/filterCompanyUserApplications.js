return function  (mentorProfile, CompanyUser) {

let rows = []

rows = $getGrid('applications').filter(row => row.companyUser == CompanyUser && row.mentor == mentorProfile && row.isComplete == true) 

return rows[0]
}