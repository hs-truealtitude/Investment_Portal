return function  () {
    let rows = []
    let totalHours = 0
    let i = 0

    rows = $getGrid('sessions').filter(row => row.mentor == $getUser('selectedMentor') && row.isBooked == true && row.cohort == $getUser("activeMyCohort"))

    for(i = 0; i < rows.length; i++){
        totalHours = totalHours + rows[i].sessionLength
    }

return totalHours
}