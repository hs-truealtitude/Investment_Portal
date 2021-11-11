return async function  () {
    
    let accountType = $getUser('accountType')

    if(accountType == "Mentor"){
        //Call mentor approval email worflow
        this.$wfCall('-MljoMYuoZcatITpKHyV')
    }

    if(accountType == "ProgrammePartner"){
        //Call pp approval email worflow
        this.$wfCall('-Mlo5B4AymUxnVnF2YBv')
    }
    
    if(accountType == "Investor"){
        //Call investor approval email worflow
        this.$wfCall('-Mlo58fY9-NK17rfKG44')
    }

    if(accountType == "CompanyUser"){
        //Call companyuser approval email worflow
        this.$wfCall('-Mlo57EwY5hz-8OWjFZT')
    }
    else{
        return null
    }

}