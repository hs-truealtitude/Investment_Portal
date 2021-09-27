return async function  (Amentor, cohortRowKey) {

var r = confirm("Are you sure you want to remove this Mentor from your list?");
if (r==true){
        //Remove user from cohort table
        $dgRemoveLookUpItem({
        gridId: 'cohortData',
        rowKey: cohortRowKey,
        cellKey: 'mentors',
        target: Amentor
        })
    
} else {
   
}
    return null;
}
