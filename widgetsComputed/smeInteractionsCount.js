return function  () {
let count = 0

count = $getGrid('applications').filter(row => row.name == "SME->Mentor").length 

return count
}