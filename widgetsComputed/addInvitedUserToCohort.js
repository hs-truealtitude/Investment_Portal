return function(){

    let cohortRowKey = $getUser('currentCohort')
    let cohortOwner = $getUser('currentCohortOwner')
    let cohortOwnerProfile = $getUser('currentCohortOwnerProfile')

    let isInvite = $getUser('isCohortInvite')
    let newProfile = $getUser('profileID')
    let accountType = $getUser('accountType')

    if (isInvite == true){

        if(accountType == "Investor"){

          const newLookUpValue = ($dataGrid("cohortData")[cohortRowKey].investors || ""
              ).includes(newProfile)
                ? $dataGrid("cohortData")[cohortRowKey]
                    .investors
                : ($dataGrid("cohortData")[cohortRowKey]
                    .investors || "") + "," + newProfile
          $setDataGridVal("cohortData", cohortRowKey + ".investors", newLookUpValue)

            //Invite to cohort user data removed
            $setUser('currentCohort', null)
            $setUser('currentCohortOwner', null)
            $setUser('currentCohortOwnerProfile', null)

        }

        if(accountType == "Mentor"){

          const newLookUpValue = ($dataGrid("cohortData")[cohortRowKey].mentors || ""
              ).includes(newProfile)
                ? $dataGrid("cohortData")[cohortRowKey]
                    .mentors
                : ($dataGrid("cohortData")[cohortRowKey]
                    .mentors || "") + "," + newProfile
          $setDataGridVal("cohortData", cohortRowKey + ".mentors", newLookUpValue)

            //Invite to cohort user data removed
            $setUser('currentCohort', null)
            $setUser('currentCohortOwner', null)
            $setUser('currentCohortOwnerProfile', null)

        }

        if(accountType == "CompanyUser"){

          const newLookUpValue = ($dataGrid("cohortData")[cohortRowKey].companyUsers || ""
              ).includes(newProfile)
                ? $dataGrid("cohortData")[cohortRowKey]
                    .companyUsers
                : ($dataGrid("cohortData")[cohortRowKey]
                    .companyUsers || "") + "," + newProfile
          $setDataGridVal("cohortData", cohortRowKey + ".companyUsers", newLookUpValue)

            //Invite to cohort user data removed
            $setUser('currentCohort', null)
            $setUser('currentCohortOwner', null)
            $setUser('currentCohortOwnerProfile', null)

        }

        if(accountType == "ProgrammePartner"){
        
            //Invite to cohort user data removed
            $setUser('currentCohort', null)
            $setUser('currentCohortOwner', null)
            $setUser('currentCohortOwnerProfile', null)
        
        }

    }

    if (isInvite == false){
        
        console.log('User has not been invited to a cohort.')

        return null

    }

    return null
}