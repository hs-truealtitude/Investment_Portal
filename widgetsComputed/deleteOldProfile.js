return async function  () {
    
    let accountType = $getUser('accountType')
    let profileID = $getUser('profileID')
     
        //Mentor
        if(accountType == 'Mentor'){
            $dgRemoveRow('mentors', profileID)
        }
        //CompanyUser
        if(accountType == 'CompanyUser'){
            $dgRemoveRow('companyUserProfiles', profileID)
        }
        //Programme Partner
        if(accountType == 'ProgrammePartner'){
            $dgRemoveRow('programmePartnerProfiles', profileID)
        }
        //Investor
        if(accountType == 'Investor'){
            $dgRemoveRow('investorProfiles', profileID)
        }

}
