let countNotifSent = 0
let countNotifResponse = 0

let countTotal = 0

countNotifSent = $getGrid('applications').filter(row => row.owner == fbUser.uid && row.isComplete != true && row.$applicationStatus$display == "Pending").length  
countNotifResponse = $getGrid('applications').filter(row => row.owner == fbUser.uid && row.responseOpened != true && row.$applicationStatus$display == "Approved").length  

countSessionSent = $getGrid('sessions').filter(row => row.owner == fbUser.uid && row.isBooked != true && row.$status$display == "Pending").length
countSessionResponse = $getGrid('sessions').filter(row => row.owner == fbUser.uid && row.isBooked == true && row.notifComplete != true && row.$status$display == "Accept").length

countInvestorNotifs = $getGrid('investorAcceptedcompanyProfiles').filter(row => row.owner == fbUser.uid && row.responseOpened != true && row.$status$display != "Approved").length 
countInvestorResponseNotifs = $getGrid('investorAcceptedcompanyProfiles').filter(row => row.owner == fbUser.uid && row.responseOpened != true && row.$status$display == "Approved").length  

countSessionHappenNotifRowsMentor = $getGrid('sessions').filter(row => row.owner == fbUser.uid && row.isBooked == true && row.mentor == $getUser('profileID') && row.direction == "Mentor->CompanyUser" && row.sessionHappen != true && row.rejected != true && row.sessionHappenNotifMentor == true).length
countSessionHappenNotifRowsCompanyUser = $getGrid('sessions').filter(row => row.owner == fbUser.uid && row.isBooked == true && row.companyUser == $getUser('profileID') && row.direction == "CompanyUser->Mentor" && row.sessionHappen != true && row.rejected != true && row.sessionHappenNotifCompanyUser == true).length  

countSessionFeedbackCompanyUser = $getGrid('sessions').filter(row => row.companyUser == $getUser('profileID') && row.isBooked == true && row.sessionHappen == true && row.direction == "Mentor->CompanyUser" && row.mentorUserReviewGiven != true).length  
countSessionFeedbackMentor = $getGrid('sessions').filter(row => row.mentor == $getUser('profileID') && row.isBooked == true && row.sessionHappen == true && row.direction == "CompanyUser->Mentor" && row.companyUserReviewGiven != true).length

countTotal = countNotifSent + countNotifResponse + countSessionSent + countSessionResponse + countInvestorNotifs + countInvestorResponseNotifs + countSessionHappenNotifRowsMentor + countSessionHappenNotifRowsCompanyUser + countSessionFeedbackMentor + countSessionFeedbackCompanyUser

return countTotal