return function  (cohortRow) {

let rows = []

//rows = $getGrid('applications').filter(row => row.cohort == cohortRow && row.isComplete == true && row.mentor != null) 

rows = $getGrid('cohortData').filter(row => row.rowKey == cohortRow) 

return rows
}

//H3 v-if="filterCohortMentorsLength(row.rowKey) == 0"

//v-for="mentor in filterCohortMentors(row.rowKey)"