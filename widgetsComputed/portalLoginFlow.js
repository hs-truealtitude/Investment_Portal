return async function  () {
    
    let accountType = $getUser('accountType')

    //IF THERE ISN'T A PROFILE REDIRECT TO SELECT PROFILE
    if (!$getUser('profileID')){
        this.redirectToSelectProfile()
    }
    else{
        //INVESTOR
        if(accountType == 'Investor'){
           
            let activeInvestorProfile = $getDashboardModel('investorProfiles')[$getUser('profileID')]
            let isApprovedI = activeInvestorProfile.isApproved
            
            if(isApprovedI == true){
                $setCurrentSubTab('-MLb4VOxEfZKqJNookL4','-MJq8S1suwASZ84EkCd5')

                return null
                console.log(accountType, 'account approved')
            } 
            else{
                return null
                //redirectToApproval()
              }
        }
        
        //MENTOR
        if(accountType == 'Mentor'){
            
            let activeMentorProfile = $getDashboardModel('mentors')[$getUser('profileID')]
            let isApprovedM = activeMentorProfile.isApproved

            if(isApprovedM == true){
                $setCurrentSubTab('-MR0b-cKrUEPkudH1B0x','-MJq8S1suwASZ84EkCd5')

                return null
            } 
            else{
                return null
                //redirectToApproval()
            }

        }

        //CompanyUser
        if(accountType == 'CompanyUser'){

            let activeCompanyUserProfile = $getDashboardModel('companyUserProfiles')[$getUser('profileID')]
            let isApprovedS = activeCompanyUserProfile.isApproved

            if(isApprovedS == true){
                $setCurrentSubTab('-MfY0EbaZX6XWjZu1p6r','-MJq8S1suwASZ84EkCd5')

                return null
            } 
            else{
                return null
                //redirectToApproval()
            }

        }

        //PROGRAMME PARTNER
        if(accountType == 'ProgrammePartner'){
      
            let activePPProfile = $getDashboardModel('programmePartnerProfiles')[$getUser('profileID')]
            let isApprovedP = activePPProfile.isApproved 

            if(isApprovedP == true){
                $setCurrentSubTab('-MPe0oZfJimFYsv9gy53','-MJq8S1suwASZ84EkCd5')
                return null
            } 
            else{
                return null
                //redirectToApproval()
            }
        }
    }

}