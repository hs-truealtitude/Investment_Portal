return function(previousSessionRowKey){

    //Setting variables needed to prepare calendar page using $setUser
    let previousSession = $dataGrid('sessions')[previousSessionRowKey]

    $setUser("filterCompanyUser", previousSession.$companyUser.rowKey);
    $setUser("activeCompanyOwnerName", previousSession.$companyUser.name);
    $setUser("filterCompany", previousSession.$company.rowKey);
    $setUser("activeCompanyName", previousSession.$company.name);

    $setUser("filterMentor", previousSession.$mentor.rowKey); 
    $setUser("filterMentorName", previousSession.$mentor.name);    
    $setUser("filterMentorSecondName", previousSession.$mentor.secondName); 
    $setUser("mentorTimeAvailableNotes", previousSession.$mentor.timeAvailableNotes );
    $setUser("mentorDaysAvailable", previousSession.$mentor.daysAvailable );   

    $setUser("activeCohortRowKey", previousSession.$cohort.rowKey);

    if($getUser('accountType') == 'CompanyUser'){
        $setUser("sessionDirection", "CompanyUser->Mentor");     
    }

    if($getUser('accountType') == 'Mentor'){
        $setUser("sessionDirection", "Mentor->CompanyUser");     
    }

    //Redirect to calendar page
    $setCurrentSubTab('-Mr2P3MDaXHf-as2ePNP','-MJq8S1suwASZ84EkCd5')

    return null
}