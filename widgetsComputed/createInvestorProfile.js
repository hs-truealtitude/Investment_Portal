return async function  () {

        let newRow = await $dgAddRow('investorProfiles', {_created: true})
        $setUser('profileID', newRow)
        $setUser('accountType', 'Investor')

        $setCurrentSubTab('-MRV2X9yI6E-qNKy27K4','-MJq8S1suwASZ84EkCd5')
        

}