(async () => {
  let accountType = $getUser("accountType");
  let profileRowKey = $getUser("profileID");

  //IF THERE ISN'T A PROFILE REDIRECT TO SELECT PROFILE
  if (profileRowKey == null) {
    $setUser('accountType', "NONE")
    $setCurrentTab('-MVGOMA1-ifNurWKHxUf')
  } 

  //INVESTOR
  if (accountType == "Investor") {
    let activeInvestorProfile = $dataGrid("investorProfiles")[$getUser("profileID")];

    if (!activeInvestorProfile.isApproved) {
      $setCurrentTab('-MVGOMA1-ifNurWKHxUf')
    }
  }

  //MENTOR
  if (accountType == "Mentor") {
    let activeMentorProfile = $dataGrid("mentors")[$getUser("profileID")];

    if (!activeMentorProfile.isApproved) {
      $setCurrentTab('-MVGOMA1-ifNurWKHxUf')
    }
  }

  //CompanyUser
  if (accountType == "CompanyUser") {
    let activeCompanyUserProfile = $dataGrid("companyUserProfiles")[$getUser("profileID")];

    if (!activeCompanyUserProfile.isApproved) {
      $setCurrentTab('-MVGOMA1-ifNurWKHxUf')
    }
  }

  //PROGRAMME PARTNER
  if (accountType == "ProgrammePartner") {
    let activePPProfile = $dataGrid("programmePartnerProfiles")[$getUser("profileID")];

    if (!activePPProfile.isApproved) {
      $setCurrentTab('-MVGOMA1-ifNurWKHxUf')
    }
  }

})();
