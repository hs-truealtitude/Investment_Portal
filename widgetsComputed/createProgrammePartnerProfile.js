return async function  () {

        let newRow = await $dgAddRow('programmePartnerProfiles', {_created: true})
        $setUser('profileID', newRow)
        $setUser('accountType', 'PP')
        $setCurrentSubTab('-MVGPTbxCAO6gmtwzQIf','-MVGOMA1-ifNurWKHxUf')
        

}