return function(cohort, owner, ownerProf, ownerType) {

    $setUser('currentCohort', cohort)
    $setUser('currentCohortOwner', owner)
    $setUser('currentCohortOwnerProfile', ownerProf)
    $setUser('currentCohortOwnerType', ownerType)

    return null
}