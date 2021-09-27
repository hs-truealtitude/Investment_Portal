(async () => {
  let accountType = $getUser("accountType");

  //IF THERE ISN'T A PROFILE REDIRECT TO SELECT PROFILE
  if (!$getUser("profileID")) {
    $setUser('accountType', "NONE")
    $setCurrentSubTab("-MVGSFAeqMzmj9TyxT6b", "-MVGOMA1-ifNurWKHxUf");
  } else {
    //INVESTOR
    if (accountType == "Investor") {
      let activeInvestorProfile = []
        $dataGrid("investorProfiles")[$getUser("profileID")];
      let isApprovedI = activeInvestorProfile.isApproved;

      if (isApprovedI == true) {
        $setCurrentSubTab("-MLb4VOxEfZKqJNookL4", "-MJq8S1suwASZ84EkCd5");
        return null;
      } else {
        $setCurrentTab('-MVGOMA1-ifNurWKHxUf')
      }
    }

    //MENTOR
    if (accountType == "Mentor") {
      let activeMentorProfile = []
        $dataGrid("mentors")[$getUser("profileID")];
      let isApprovedM = activeMentorProfile.isApproved;

      if (isApprovedM == true) {
        $setCurrentSubTab("-MR0b-cKrUEPkudH1B0x", "-MJq8S1suwASZ84EkCd5");
        return null;
      } else {
        $setCurrentTab('-MVGOMA1-ifNurWKHxUf')
      }
    }

    //CompanyUser
    if (accountType == "CompanyUser") {
      let activeCompanyUserProfile = []
        $dataGrid("companyUserProfiles")[$getUser("profileID")];
      let isApprovedS = activeCompanyUserProfile.isApproved;

      if (isApprovedS == true) {
        $setCurrentSubTab("-MKUrGgnB0UOnhJlhCjv", "-MJq8S1suwASZ84EkCd5");
        return null;
      } else {
        $setCurrentTab('-MVGOMA1-ifNurWKHxUf')
      }
    }

    //PROGRAMME PARTNER
    if (accountType == "ProgrammePartner") {
      let activePPProfile = []
       $dataGrid("programmePartnerProfiles")[$getUser("profileID")];
      let isApprovedP = activePPProfile.isApproved;

      if (isApprovedP == true) {
        $setCurrentSubTab("-MPe0oZfJimFYsv9gy53", "-MJq8S1suwASZ84EkCd5");
        return null;
      } else {
        $setCurrentTab('-MVGOMA1-ifNurWKHxUf')
      }
    }




  }

  //ADMIN ONLY TEMPORARY FIX
  if (accountType == "AdminOnly") {
        $setCurrentTab("-MKUwx1XmgWmAYvLK_wz");
        console.log("adminonly")
  }
  
})();
