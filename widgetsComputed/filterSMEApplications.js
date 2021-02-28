return function  (mentorProfile, SME) {

let rows = []

rows = $getGrid('applications').filter(row => row.sME == SME && row.mentor == mentorProfile && row.isComplete == true) 

return rows[0]
}