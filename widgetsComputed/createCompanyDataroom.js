return async function(companyRowKey, companyName){

        //Add Company Group
        let newGroup = await $dgAddRow('groups', {name: companyName})

        //Group admin group and new company group
        const groups = ['-McJIcqzO6NQgxEStbY6', newGroup].join(',')

        //Create Company Dataroom
        let newDataroom = await $dgAddRow('companyDatarooms', {name: companyName, group: groups})
        //Create Minutes Room
        let newMinutesRoom = await $dgAddRow('minutesTable', {name: companyName, group: groups})

        //Join Company and Dataroom
        $setDataGridVal('companyProfiles', companyRowKey + '.dataroom' , newDataroom)
        $setDataGridVal('companyProfiles', companyRowKey + '.hasSubmitted' , true)

        //Join Company and Minutes
        $setDataGridVal('companyProfiles', companyRowKey + '.minutesRoom' , newMinutesRoom)

        //Assign group to current user
        const userRecord = _.find($getGrid('users'), { user: fbUser.uid })
        const rowKey = userRecord ? userRecord.rowKey : null

        //Get current groups assigned to user record
        const { group } = userRecord
        
        //Join current groups assigned to user and assign the newest one
        const currentUserGroup = [group, newGroup].join(',')
        $setDataGridVal('users', rowKey + '.group' , currentUserGroup)
}