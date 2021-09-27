return async function  () {
    
    let accountType = $getUser('accountType')
     
        //MENTOR
        if(accountType == 'Mentor'){
            $setCurrentSubTab('-MPe1UmfUG2Oh10CnZjs','-MJq8S1suwASZ84EkCd5')
            $setUser('activeProgrammeRowKey', null)

        }

        //CompanyUser
        if(accountType == 'CompanyUser'){
            $setCurrentSubTab('-MQNav_HFaMuZMGgOjr3','-MJq8S1suwASZ84EkCd5')
            $setUser('activeProgrammeRowKey', null)

        }

        //Programme Partner
        if(accountType == 'ProgrammePartner'){
            $setCurrentSubTab('-MfY4NybO1sdtmy-6T9D','-MJq8S1suwASZ84EkCd5')

        }

        //Investor
        if(accountType == 'Investor'){
            $setCurrentSubTab('-MVR769td35nAd71y7X2','-MJq8S1suwASZ84EkCd5')

        }

}

