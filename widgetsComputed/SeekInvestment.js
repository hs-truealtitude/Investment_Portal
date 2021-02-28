return async function  () {

    let accountType = $getDashboardModel('profiles')[$getUser('profileID')].$accountType$display

    if(accountType == 'Investor'){
        $setCurrentSubTab('-MLRjxdODIqfr_-zCjnK','-MJq8S1suwASZ84EkCd5')
      
        return null
    }
    if(accountType == 'Company'){
        $setCurrentSubTab('-MKUrNyISWSgVoI3Jffn','-MJq8S1suwASZ84EkCd5')
        return null
    } 
    else {
        $setCurrentSubTab('-MLb62gnl6ZWaqJxrwXS','-MJq8S1suwASZ84EkCd5')
        return null

    }
     



}


