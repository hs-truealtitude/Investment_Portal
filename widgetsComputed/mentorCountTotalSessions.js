return function  () {
let count = 0

count = $getGrid('sessions').filter(row => row.mentor == $getUser('profileID') && row.isBooked == true).length 

return count
}