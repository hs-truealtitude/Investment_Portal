return function  (cohort) {

    let rows = []

    rows = $getGrid('cohortData').filter(row => row.rowKey == cohort) 
    console.log(rows)

return rows
}