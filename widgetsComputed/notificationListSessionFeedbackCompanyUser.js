let rows = []

rows = $getGrid('sessions').filter(row => row.companyUser == $getUser('profileID') && row.isBooked == true && row.sessionHappen == true && row.direction == "Mentor->CompanyUser" && row.mentorUserReviewGiven != true)  

return rows