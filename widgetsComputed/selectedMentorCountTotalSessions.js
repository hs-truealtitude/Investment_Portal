return function  () {
let count = 0

count = $getGrid('sessions').filter(row => row.mentor == $getUser('selectedMentor') && row.cohort == $getUser("activeMyCohort") && row.isBooked == true).length 

return count
}