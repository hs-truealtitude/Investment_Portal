return function  () {
let count = 0

count = $getGrid('applications').filter(row => row.name == "Investor->CompanyUser").length 

return count
}