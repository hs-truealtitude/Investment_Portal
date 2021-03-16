return async function  () {

        let newRow = await $dgAddRow('sMEProfiles', {_created: true})
        $setUser('profileID', newRow)
        $setUser('accountType', 'SME')

        $setCurrentSubTab('-MVGPQly6PCb183y6WaH','-MVGOMA1-ifNurWKHxUf')
        

}