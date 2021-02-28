return function  () {
let count = 0

count = $getGrid('applications').filter(row => row.name == "Investor->SME").length 

return count
}