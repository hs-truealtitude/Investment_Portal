return async function  () {
    
    let accountType = $getUser('accountType')

    //IF THERE ISN'T A PROFILE REDIRECT TO SELECT PROFILE
    if (!$getUser('profileID')){

    }
    
    else{
        //INVESTOR
        if(accountType == 'Investor'){
           
            let activeInvestorProfile = $getDashboardModel('investorProfiles')[$getUser('profileID')]
            let isApprovedI = activeInvestorProfile.isApproved
            
            if(isApprovedI == true){
                console.log(accountType, 'account approved')
                $setCurrentSubTab('-MLb4VOxEfZKqJNookL4','-MJq8S1suwASZ84EkCd5')
                return null
                console.log(accountType, 'account approved')
            } 
            else{
		//GO TO APPROVAL PAGE
                $setCurrentTab('-MVGOMA1-ifNurWKHxUf')
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
                $setCurrentTab('-MJq8S1suwASZ84EkCd5')

            }

        }

        //SME
        if(accountType == 'SME'){

            let activeSMEProfile = $getDashboardModel('sMEProfiles')[$getUser('profileID')]
            let isApprovedS = activeSMEProfile.isApproved

            if(isApprovedS == true){
                $setCurrentSubTab('-MKUrGgnB0UOnhJlhCjv','-MJq8S1suwASZ84EkCd5')
                return null
            } 
            else{
                $setCurrentTab('-MJq8S1suwASZ84EkCd5')

            }

        }

        //PROGRAMME PARTNER
        if(accountType == 'PP'){
      
            let activePPProfile = $getDashboardModel('programmePartnerProfiles')[$getUser('profileID')]
            let isApprovedP = activePPProfile.isApproved 

            if(isApprovedP == true){
                $setCurrentSubTab('-MPe0oZfJimFYsv9gy53','-MJq8S1suwASZ84EkCd5')
                return null
            } 
            else{
                $setCurrentTab('-MJq8S1suwASZ84EkCd5')

            }
        }
    }

}