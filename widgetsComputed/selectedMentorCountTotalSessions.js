return function  () {
let count = 0

count = $getGrid('sessions').filter(row => row.mentor == $getUser('selectedMentor') && row.programme == $getUser("activeMyProgramme") && row.isBooked == true).length 

return count
}