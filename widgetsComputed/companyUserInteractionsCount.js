return function  () {
let count = 0

count = $getGrid('applications').filter(row => row.name == "CompanyUser->Mentor").length 

return count
}