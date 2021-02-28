return function (){


    let accountType = $getUser('accountType')

    if (accountType == 'Mentor' )
    {
        $setCurrentSubTab("-MR0b-cKrUEPkudH1B0x","-MJq8S1suwASZ84EkCd5")    
    }
    if (accountType == 'Investor' )
    {
        $setCurrentSubTab("-MLb4VOxEfZKqJNookL4","-MJq8S1suwASZ84EkCd5")    
    }

    if (accountType == 'SME' )
    {
        $setCurrentSubTab("-MKUrGgnB0UOnhJlhCjv","-MJq8S1suwASZ84EkCd5")   
    }

    if (accountType == 'PP' )
    {
        $setCurrentSubTab("-MPe0oZfJimFYsv9gy53","-MJq8S1suwASZ84EkCd5")   
    }


    return null
}