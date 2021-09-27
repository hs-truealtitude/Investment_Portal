return function(){
    let accountType = $getUser("accountType");
    let profileRowKey = $getUser("profileID");

    if(accountType == 'Investor'){
        let investorProfile = []
        investorProfile = $dataGrid('investorProfiles')[profileRowKey]

        if(!investorProfile.submitPressed){
            $dgRemoveRow('investorProfiles', profileRowKey)
            $setUser('accountType', null)
            $setUser('profileID', null)
            console.log("Invalid Profile")
            $setCurrentSubTab('-MVGSFAeqMzmj9TyxT6b','-MVGOMA1-ifNurWKHxUf')
        }
        else{
            console.log("Valid Profile")
        }

        
    }

    if(accountType == 'Mentor'){
        let mentorProfile = []
        mentorProfile = $dataGrid('mentors')[profileRowKey]

        if(!mentorProfile.submitPressed){
            $dgRemoveRow('mentors', profileRowKey)
            $setUser('accountType', null)
            $setUser('profileID', null)
            console.log("Invalid Profile")
            $setCurrentSubTab('-MVGSFAeqMzmj9TyxT6b','-MVGOMA1-ifNurWKHxUf')
        }
        else{
            console.log("Valid Profile")
        }

    }

    if(accountType == 'CompanyUser'){
        let companyUserProfile = []
        companyUserProfile = $dataGrid('companyUserProfiles')[profileRowKey]

        if(!companyUserProfile.submitPressed){
            $dgRemoveRow('companyUserProfiles', profileRowKey)
            $setUser('accountType', null)
            $setUser('profileID', null)
            console.log("Invalid Profile")
        }
        else{
            console.log("Valid Profile")
        }
    }

    if(accountType == 'ProgrammePartner'){
        let programmePartnerProfile = []
        programmePartnerProfile = $dataGrid('programmePartnerProfiles')[profileRowKey]


        if(!programmePartnerProfile.submitPressed){
            $dgRemoveRow('programmePartnerProfiles', profileRowKey)
            $setUser('accountType', null)
            $setUser('profileID', null)
            console.log("Invalid Profile")
        }
        else{
            console.log("Validated Profile")
        }

    }

}