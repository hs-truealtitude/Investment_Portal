return async function  () {

        let newRow = await $dgAddRow('programmePartnerProfiles', {_created: true})
        $setUser('profileID', newRow)
        $setUser('accountType', 'ProgrammePartner')
        $setCurrentSubTab('-MVGPTbxCAO6gmtwzQIf','-MVGOMA1-ifNurWKHxUf')
        

}