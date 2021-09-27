return async function  (programme) {

var r = confirm("Are you sure you want to delete this programme?");

if (r==true){
    $dgRemoveRow('programmeData', programme)
}

}