return function  () {
let count = 0

    count = $getGrid('programmeData').filter(row => row.mentors == $getUser('profileID')).length 

return count
}