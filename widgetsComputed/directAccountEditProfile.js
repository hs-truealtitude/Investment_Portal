return function (){

    let accountType = $getUser('accountType')

    if (accountType == 'Mentor')
    {
        $setCurrentSubTab('-MTB_p0KnCBD83k4lTzc','-MJq8S1suwASZ84EkCd5')
    }

    if (accountType == 'Investor')
    {
        $setCurrentSubTab('-MTBa1kCcT0179jjmiPn','-MJq8S1suwASZ84EkCd5')
    }

    if (accountType == 'SME' )
    {
        $setCurrentSubTab('-MTBaL8BTycvh1K_uOK4','-MJq8S1suwASZ84EkCd5')
    } 
    if (accountType == 'PP' )
    {
        $setCurrentSubTab('-MTBaTKGIcwibyRfP6Un','-MJq8S1suwASZ84EkCd5')
    } 

}