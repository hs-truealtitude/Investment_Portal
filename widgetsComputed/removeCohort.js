return async function  (cohort) {

var r = confirm("Are you sure you want to delete this cohort?");

if (r==true){
    $dgRemoveRow('cohortData', cohort)
}

}