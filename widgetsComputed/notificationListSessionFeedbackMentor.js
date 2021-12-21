let rows = []

rows = $getGrid('sessions').filter(row => row.mentor == $getUser('profileID') && row.isBooked == true && row.sessionHappen == true && row.direction == "CompanyUser->Mentor" && row.companyUserReviewGiven != true)  

return rows