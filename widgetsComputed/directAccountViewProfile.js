return function (){

    let accountType = $getUser('accountType')

    if (accountType == 'Mentor')
    {
        $setCurrentSubTab('-MTBSU70t54vJ304W7zH','-MJq8S1suwASZ84EkCd5')
    }

    if (accountType == 'Investor')
    {
        $setCurrentSubTab('-MTBSXRo7VKGCRMOGIan','-MJq8S1suwASZ84EkCd5')
    }

    if (accountType == 'SME' )
    {
        $setCurrentSubTab('-MTBSZYoq9-9f1tu4YCX','-MJq8S1suwASZ84EkCd5')
    } 
    if (accountType == 'PP' )
    {
        $setCurrentSubTab('-MTBSaaRHir6-J4UBJuR','-MJq8S1suwASZ84EkCd5')
    } 

}