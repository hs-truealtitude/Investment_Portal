return async function  (company) {

var r = confirm("Are you sure you want to remove this company from your invested in portfolio/list?");
if (r==true){
    $dgSetRow('investorAcceptedcompanyProfiles', company, { investorInvested: false })
} else {
   
}
    return null;
}
