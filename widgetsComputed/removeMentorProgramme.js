return async function  (Amentor, programmeRowKey) {

var r = confirm("Are you sure you want to remove this Mentor from your list?");
if (r==true){
        //Remove user from cohort table
        $dgRemoveLookUpItem({
        gridId: 'programmeData',
        rowKey: programmeRowKey,
        cellKey: 'mentors',
        target: Amentor
        })
    
} else {
   
}
    return null;
}
