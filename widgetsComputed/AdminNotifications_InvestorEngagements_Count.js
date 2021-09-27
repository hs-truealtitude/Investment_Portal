let total = 0

investorConnection = $getGrid('applications').filter(row => row.name == 'Investor->CompanyUser' && row.$applicationStatus$display == 'Approved' && row.$investor != null  && row.adminViewed != true).length

total = investorConnection

return total