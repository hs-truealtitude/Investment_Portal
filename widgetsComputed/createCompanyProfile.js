return async function  () {

        let newRow = await $dgAddRow('sMEProfiles', {_created: true})
        $setUser('profileID', newRow)
        $setUser('accountType', 'SME')

        $setCurrentSubTab('-MRV2OSGxgO6bkleuF3c','-MJq8S1suwASZ84EkCd5')
        

}