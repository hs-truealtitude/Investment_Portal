return function (){

    let accountType = $getUser('accountType')

    if (accountType == 'Mentor')
    {
        $setCurrentSubTab('-MfY2bmp0bNsXfULP4nX','-MJq8S1suwASZ84EkCd5')
    }

    if (accountType == 'Investor')
    {
        $setCurrentSubTab('-MfY2XJrlxkv3Z_iyJ5U','-MJq8S1suwASZ84EkCd5')
    }

    if (accountType == 'CompanyUser' )
    {
        $setCurrentSubTab('-MfY0EbaZX6XWjZu1p6r','-MJq8S1suwASZ84EkCd5')
    } 
    if (accountType == 'ProgrammePartner' )
    {
        $setCurrentSubTab('-MfY2Rx8FCJBAzBmbLv3','-MJq8S1suwASZ84EkCd5')
    } 

}