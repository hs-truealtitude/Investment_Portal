return function  (cohortRow) {

let investorTotal = 0

    investorTotal = $getGrid('applications').filter(row => row.cohort == cohortRow && row.isComplete == true && row.investor != null).length

return investorTotal

}