return async function  () {

    let accountType = $getDashboardModel('profiles')[$getUser('profileID')].$accountType$display

    if(accountType == 'Investor'){
        $setCurrentSubTab('-MLb4VOxEfZKqJNookL4','-MJq8S1suwASZ84EkCd5')
      
        return null
    }
    if(accountType == 'Company'){
        $setCurrentSubTab('-MKUrGgnB0UOnhJlhCjv','-MJq8S1suwASZ84EkCd5')
        return null
    } 
    if(accountType == 'Mentor'){
        $setCurrentSubTab('-MR0b-cKrUEPkudH1B0x','-MJq8S1suwASZ84EkCd5')
        return null
    } 
    if(accountType == 'Programme Partner'){
        $setCurrentSubTab('-MPe0oZfJimFYsv9gy53','-MJq8S1suwASZ84EkCd5')
        return null
    } 
    else {
        $setCurrentSubTab('-MLb62gnl6ZWaqJxrwXS','-MJq8S1suwASZ84EkCd5')
        return null

    }
     



}


