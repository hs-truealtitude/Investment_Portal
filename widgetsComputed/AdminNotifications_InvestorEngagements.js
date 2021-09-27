let rows = []

rows = $getGrid('applications').filter(row => row.name == 'Investor->CompanyUser' && row.$applicationStatus$display == 'Approved' && row.$investor != null  && row.adminViewed != true)  

return rows