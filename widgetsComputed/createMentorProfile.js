return async function  () {

        let newRow = await $dgAddRow('mentors', {_created: true})
        $setUser('profileID', newRow)
        $setUser('accountType', 'Mentor')

        $setCurrentSubTab('-MRV2JD9mh_LoG_xIuKA','-MJq8S1suwASZ84EkCd5')
        

}