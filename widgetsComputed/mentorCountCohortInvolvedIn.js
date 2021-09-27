return function  () {
let count = 0

count = $getGrid('cohortData').filter(row => row.mentors == $getUser('profileID')).length 

return count
}