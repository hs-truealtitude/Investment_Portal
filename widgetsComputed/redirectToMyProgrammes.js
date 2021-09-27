return async function  () {
    
    let accountType = $getUser('accountType')
     
        if(accountType == 'ProgrammePartner'){
            $setCurrentSubTab('-MfY4b3y_0CfqBQLrq8n','-MJq8S1suwASZ84EkCd5')
        }
        if(accountType == 'CompanyUser'){
            $setCurrentSubTab('-MfY3pV-fvW0uCQqFuxI','-MJq8S1suwASZ84EkCd5')
            $setUser('activeCohortRowKey', null)
        }
        if(accountType == 'Mentor'){
            $setCurrentSubTab('-MfY8-yevTsCuA6PiH4x','-MJq8S1suwASZ84EkCd5')
            $setUser('activeCohortRowKey', null)
        }



}
