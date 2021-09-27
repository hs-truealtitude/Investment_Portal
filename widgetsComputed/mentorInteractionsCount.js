return function  () {
let count = 0

count = $getGrid('applications').filter(row => row.name == "Mentor->CompanyUser").length 

return count
}