return async function  (cohort) {

let cohortCountRows = $getGrid('userCountChartTable').filter(row => (row.cohort || '').includes(cohort))

var r = confirm("Are you sure you want to delete this cohort?");

if (r==true){
    $dgRemoveRow('cohortData', cohort)

    for(let row of cohortCountRows) {
    $dgRemoveRow('userCountChartTable', row.rowKey)
    }

}

}