return async function  (company) {

var r = confirm("Are you sure you want to remove this company from your list?");
if (r==true){
    $dgRemoveRow('investorAcceptedcompanyProfiles', company)
} else {
   
}
    return null;
}
