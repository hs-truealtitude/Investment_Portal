let total = 0

applicationMentorToCompanyUser = $getGrid('applications').filter(row => row.isComplete == true && row.$applicationStatus$display == "Approved" && row.name == 'Mentor->CompanyUser' && row.adminViewed != true).length
applicationCompanyUserToMentor = $getGrid('applications').filter(row => row.isComplete == true && row.$applicationStatus$display == "Approved" && row.name == 'CompanyUser->Mentor' && row.adminViewed != true).length   
sessionMentorToCompanyUser = $getGrid('sessions').filter(row => row.isBooked == true && row.$status$display == "Accepted" && row.direction == "Mentor->CompanyUser" && row.adminViewed != true).length  
sessionCompanyUsertoMentor = $getGrid('sessions').filter(row => row.isBooked == true && row.$status$display == "Accepted" && row.direction == "CompanyUser->Mentor" && row.adminViewed != true).length  

total = applicationMentorToCompanyUser + applicationCompanyUserToMentor + sessionMentorToCompanyUser + sessionCompanyUsertoMentor

return total