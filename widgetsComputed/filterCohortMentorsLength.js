return function  (cohortRow) {

let mentorsTotal = 0

    mentorsTotal = $getGrid('applications').filter(row => row.cohort == cohortRow && row.isComplete == true && row.mentor != null).length

return mentorsTotal

}