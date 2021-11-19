return function(accountType, rowKey){

    if(accountType == "Mentor"){
        $setUser('selectedImageRowKey', rowKey)
        $setUser('selectedImageType', "Mentor")
    }

    if(accountType == "Investor"){
        $setUser('selectedImageRowKey', rowKey)
        $setUser('selectedImageType', "Investor")
    }

    if(accountType == "CompanyUser"){
        $setUser('selectedImageRowKey', rowKey)
        $setUser('selectedImageType', "CompanyUser")
    }

    if(accountType == "Company"){
        $setUser('selectedImageRowKey', rowKey)
        $setUser('selectedImageType', "Company")
    }

    if(accountType == "ProgrammePartner"){
        $setUser('selectedImageRowKey', rowKey)
        $setUser('selectedImageType', "ProgrammePartner")
    }

    if(accountType == "Programme"){
        $setUser('selectedImageRowKey', rowKey)
        $setUser('selectedImageType', "Programme") 
    }
    
    if(accountType == "Cohort_Mentor"){
        $setUser('selectedImageRowKey', rowKey)
        $setUser('selectedImageType', "Cohort_Mentor")      
    }
    
    if(accountType == "Cohort_PP"){
        $setUser('selectedImageRowKey', rowKey)
        $setUser('selectedImageType', "Cohort_PP")      
    }

    return null
}