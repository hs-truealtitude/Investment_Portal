return async function  () {

        let newRow = await $dgAddRow('companyUserProfiles', {_created: true})
        $setUser('profileID', newRow)
        $setUser('accountType', 'CompanyUser')

        $setCurrentSubTab('-MVGPQly6PCb183y6WaH','-MVGOMA1-ifNurWKHxUf')
        

}