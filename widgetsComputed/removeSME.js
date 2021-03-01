return async function  (AsME) {

var r = confirm("Are you sure you want to remove this SME from your list?");
if (r==true){
    $dgRemoveRow('applications', AsME)

    
} else {
   
}
    return null;
}
