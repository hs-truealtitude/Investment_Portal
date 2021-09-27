return async function  () {
    
    let accountType = $getUser('accountType')

 //MENTOR
        if(accountType == 'Mentor'){
            $setCurrentSubTab('-MPe1UmfUG2Oh10CnZjs','-MJq8S1suwASZ84EkCd5')
            return null
        } 
        
        //PROGRAMME PARTNER
        if(accountType == 'ProgrammePartner'){
            $setCurrentSubTab('-MfY4NybO1sdtmy-6T9D','-MJq8S1suwASZ84EkCd5')
            return null
        }

}