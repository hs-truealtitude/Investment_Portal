return function  () {
let count = 0

count = $getGrid('cohortData').filter(row => row.mentorOwner == $getUser('profileID')).length 

return count
}