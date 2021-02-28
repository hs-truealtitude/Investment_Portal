let count = 0

count = $getGrid('applications').filter(row => row.owner == fbUser.uid && row.isComplete != true && row.$applicationStatus$display == "Pending").length  


return count