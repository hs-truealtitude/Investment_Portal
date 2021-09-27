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

    if (accountType == 'CompanyUser' )
    {
        $setCurrentSubTab("-MfY0EbaZX6XWjZu1p6r","-MJq8S1suwASZ84EkCd5")   
    }

    if (accountType == 'ProgrammePartner' )
    {
        $setCurrentSubTab("-MPe0oZfJimFYsv9gy53","-MJq8S1suwASZ84EkCd5")   
    }


    return null
}