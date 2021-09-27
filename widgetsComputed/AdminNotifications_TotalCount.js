let countTotal = 0

    companyTotal = $getGrid('companyProfiles').filter(row => row.$access$display == "Private" && row.name != null && row.adminRejected != true).length

    investorCount = $getGrid('investorProfiles').filter(row => row.isApproved != true && row.name != null && row.secondName != null).length    
    mentorCount = $getGrid('mentors').filter(row => row.isApproved != true && row.name != null && row.secondName != null).length  
    ppCount = $getGrid('programmePartnerProfiles').filter(row => row.isApproved != true && row.name != null && row.secondName != null).length  
    companyUserCount = $getGrid('companyUserProfiles').filter(row => row.isApproved != true && row.name != null && row.secondName != null).length    

    applicationMentorToCompanyUser = $getGrid('applications').filter(row => row.isComplete == true && row.$applicationStatus$display == "Approved" && row.name == 'Mentor->CompanyUser' && row.adminViewed != true).length
    applicationCompanyUserToMentor = $getGrid('applications').filter(row => row.isComplete == true && row.$applicationStatus$display == "Approved" && row.name == 'CompanyUser->Mentor' && row.adminViewed != true).length   
    sessionMentorToCompanyUser = $getGrid('sessions').filter(row => row.isBooked == true && row.$status$display == "Accepted" && row.direction == "Mentor->CompanyUser" && row.adminViewed != true).length  
    sessionCompanyUsertoMentor = $getGrid('sessions').filter(row => row.isBooked == true && row.$status$display == "Accepted" && row.direction == "CompanyUser->Mentor" && row.adminViewed != true).length  

    investorConnection = $getGrid('applications').filter(row => row.name == 'Investor->CompanyUser' && row.$applicationStatus$display == 'Approved' && row.$investor != null  && row.adminViewed != true).length



countTotal = investorCount + mentorCount + ppCount + companyUserCount + applicationMentorToCompanyUser + applicationCompanyUserToMentor + sessionMentorToCompanyUser + sessionCompanyUsertoMentor + investorConnection

return countTotal