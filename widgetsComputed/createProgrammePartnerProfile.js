return async function  () {

        let newRow = await $dgAddRow('programmePartnerProfiles', {_created: true})
        $setUser('profileID', newRow)
        $setUser('accountType', 'PP')
        $setCurrentSubTab('-MRV2TjUI2-dO-5P50gQ','-MJq8S1suwASZ84EkCd5')
        

}