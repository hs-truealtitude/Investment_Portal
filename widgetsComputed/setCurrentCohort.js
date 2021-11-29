return function(cohort, owner, ownerProf) {

    $setUser('currentCohort', cohort)
    $setUser('currentCohortOwner', owner)
    $setUser('currentCohortOwnerProfile', ownerProf)

    return null
}