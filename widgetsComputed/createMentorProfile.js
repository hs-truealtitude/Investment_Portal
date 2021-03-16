return async function  () {

        let newRow = await $dgAddRow('mentors', {_created: true})
        $setUser('profileID', newRow)
        $setUser('accountType', 'Mentor')

        $setCurrentSubTab('-MVGPMeqvw0Ux3xl4eNE','-MVGOMA1-ifNurWKHxUf')
        

}