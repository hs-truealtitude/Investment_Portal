//Parameters - data of the profile that did the referral
return function(){
  try {
    //Referred by data
    let profileRowKey = $getUser("referralRowKey");
    let profileAccType = $getUser("referralAccountType");

    //New profile data
    let newUserAccountType = $getUser("accountType");
    let newUserProfileRowKey = $getUser("profileID");

    //----------------------------------//

    //Assign referred by profile to new profile
    if (newUserAccountType) {
      //New user is: Investor
      if (newUserAccountType == "Investor") {
        if (profileAccType == "ProgrammePartner") {
          let profileRow = $dataGrid("programmePartnerProfiles")[profileRowKey];
          $setDataGridVal(
            "investorProfiles",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }

        if (profileAccType == "Mentor") {
          let profileRow = $dataGrid("mentors")[profileRowKey];
          $setDataGridVal(
            "investorProfiles",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }

        if (profileAccType == "Investor") {
          let profileRow = $dataGrid("investorProfiles")[profileRowKey];
          $setDataGridVal(
            "investorProfiles",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }

        if (profileAccType == "CompanyUser") {
          let profileRow = $dataGrid("companyUserProfiles")[profileRowKey];
          $setDataGridVal(
            "investorProfiles",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }
      }

      //New user is: Mentor
      if (newUserAccountType == "Mentor") {
        if (profileAccType == "ProgrammePartner") {
          //Get referred by row
          let profileRow = $dataGrid("programmePartnerProfiles")[profileRowKey];
          $setDataGridVal(
            "mentors",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }

        if (profileAccType == "Mentor") {
          let profileRow = $dataGrid("mentors")[profileRowKey];
          $setDataGridVal(
            "mentors",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }

        if (profileAccType == "Investor") {
          let profileRow = $dataGrid("investorProfiles")[profileRowKey];
          $setDataGridVal(
            "mentors",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }

        if (profileAccType == "CompanyUser") {
          let profileRow = $dataGrid("companyUserProfiles")[profileRowKey];
          $setDataGridVal(
            "mentors",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }
      }

      //New user is: ProgrammePartner
      if (newUserAccountType == "ProgrammePartner") {
        //Add referred by value to new user profile
        if (profileAccType == "ProgrammePartner") {
          let profileRow = $dataGrid("programmePartnerProfiles")[profileRowKey];
          $setDataGridVal(
            "programmePartnerProfiles",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }

        if (profileAccType == "Mentor") {
          let profileRow = $dataGrid("mentors")[profileRowKey];
          $setDataGridVal(
            "programmePartnerProfiles",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }

        if (profileAccType == "Investor") {
          let profileRow = $dataGrid("investorProfiles")[profileRowKey];
          $setDataGridVal(
            "programmePartnerProfiles",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }

        if (profileAccType == "CompanyUser") {
          let profileRow = $dataGrid("companyUserProfiles")[profileRowKey];
          $setDataGridVal(
            "programmePartnerProfiles",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }
      }

      //New user is: CompanyUser
      if (newUserAccountType == "CompanyUser") {
        //Add referred by value to new user profile
        if (profileAccType == "ProgrammePartner") {
          let profileRow = $dataGrid("programmePartnerProfiles")[profileRowKey];
          $setDataGridVal(
            "companyUserProfiles",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }

        if (profileAccType == "Mentor") {
          let profileRow = $dataGrid("mentors")[profileRowKey];
          $setDataGridVal(
            "companyUserProfiles",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }

        if (profileAccType == "Investor") {
          let profileRow = $dataGrid("investorProfiles")[profileRowKey];
          $setDataGridVal(
            "companyUserProfiles",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }

        if (profileAccType == "CompanyUser") {
          let profileRow = $dataGrid("companyUserProfiles")[profileRowKey];
          $setDataGridVal(
            "companyUserProfiles",
            newUserProfileRowKey + ".referredBy",
            profileRow.name +
              " " +
              profileRow.secondName +
              " " +
              "(" +
              profileAccType +
              ")"
          );
        }
      }
    }

    //-------------------------------------------------------------------------------//

    //Assign new referral to referred by user:
    if (profileAccType) {
      //Referred by: CompanyUser
      if (profileAccType == "CompanyUser") {
        //Add add referral to referred by user
        if (newUserAccountType == "ProgrammePartner") {
          const newLookUpValue = (
              $dataGrid("companyUserProfiles")[profileRowKey]
                  .referralProgrammePartner || ""
              ).includes(newUserProfileRowKey)
                ? $dataGrid("companyUserProfiles")[profileRowKey]
                    .referralProgrammePartner
                : ($dataGrid("companyUserProfiles")[profileRowKey]
                    .referralProgrammePartner || "") + "," + newUserProfileRowKey
          $setDataGridVal(
            "companyUserProfiles",
            profileRowKey + ".referralProgrammePartner",
            newUserProfileRowKey
          )
        }

        if (newUserAccountType == "Mentor") {
          const newLookUpValue = (
              $dataGrid("companyUserProfiles")[profileRowKey]
                  .referralMentor || ""
              ).includes(newUserProfileRowKey)
                ? $dataGrid("companyUserProfiles")[profileRowKey]
                    .referralMentor
                : ($dataGrid("companyUserProfiles")[profileRowKey]
                    .referralMentor || "") + "," + newUserProfileRowKey
          $setDataGridVal(
            "companyUserProfiles",
            profileRowKey + ".referralMentor",
            newUserProfileRowKey
          )
        }

        if (newUserAccountType == "Investor") {
          const newLookUpValue = (
              $dataGrid("companyUserProfiles")[profileRowKey]
                  .referralInvestor || ""
              ).includes(newUserProfileRowKey)
                ? $dataGrid("companyUserProfiles")[profileRowKey]
                    .referralInvestor
                : ($dataGrid("companyUserProfiles")[profileRowKey]
                    .referralInvestor || "") + "," + newUserProfileRowKey
          $setDataGridVal(
            "companyUserProfiles",
            profileRowKey + ".referralInvestor",
            newUserProfileRowKey
          )
        }

        if (newUserAccountType == "CompanyUser") {
//
        }
      }

      //Referred by: Mentor
      if (profileAccType == "Mentor") {
        //Add add referral to referred by user
        if (newUserAccountType == "ProgrammePartner") {
          const newLookUpValue = (
              $dataGrid("mentors")[profileRowKey]
                  .referralProgrammePartner || ""
              ).includes(newUserProfileRowKey)
                ? $dataGrid("mentors")[profileRowKey]
                    .referralProgrammePartner
                : ($dataGrid("mentors")[profileRowKey]
                    .referralProgrammePartner || "") + "," + newUserProfileRowKey

          $setDataGridVal(
            "mentors",
            profileRowKey + ".referralProgrammePartner",
            newUserProfileRowKey
          )
        }

        if (newUserAccountType == "Mentor") {
//
        }

        if (newUserAccountType == "Investor") {
          const newLookUpValue = (
              $dataGrid("mentors")[profileRowKey]
                  .referralInvestor || ""
              ).includes(newUserProfileRowKey)
                ? $dataGrid("mentors")[profileRowKey]
                    .referralInvestor
                : ($dataGrid("mentors")[profileRowKey]
                    .referralInvestor || "") + "," + newUserProfileRowKey

          $setDataGridVal(
            "mentors",
            profileRowKey + ".referralInvestor",
            newUserProfileRowKey
          )
        }

        if (newUserAccountType == "CompanyUser") {
          const newLookUpValue = (
              $dataGrid("mentors")[profileRowKey]
                  .referralCompanyUser || ""
              ).includes(newUserProfileRowKey)
                ? $dataGrid("mentors")[profileRowKey]
                    .referralCompanyUser
                : ($dataGrid("mentors")[profileRowKey]
                    .referralCompanyUser || "") + "," + newUserProfileRowKey

          $setDataGridVal(
            "mentors",
            profileRowKey + ".referralCompanyUser",
            newUserProfileRowKey
          )
        }
      }

      //Referred by: ProgrammePartner
      if (profileAccType == "ProgrammePartner") {
        let newUserProfileRow = $dataGrid("programmePartnerProfiles")[newUserProfileRowKey];
        if (newUserAccountType == "ProgrammePartner") {
          $setDataGridVal(
            "programmePartnerProfiles",
            profileRowKey + ".referralProgrammePartner",
            newUserProfileRow.name +
              " " +
              newUserProfileRow.secondName +
              " " +
              "(" +
              newUserAccountType +
              ")"
          );
        }

        if (newUserAccountType == "Mentor") {
          const newLookUpValue = (
              $dataGrid("programmePartnerProfiles")[profileRowKey]
                  .referralMentor || ""
              ).includes(newUserProfileRowKey)
                ? $dataGrid("programmePartnerProfiles")[profileRowKey]
                    .referralMentor
                : ($dataGrid("programmePartnerProfiles")[profileRowKey]
                    .referralMentor || "") + "," + newUserProfileRowKey

          $setDataGridVal(
            "programmePartnerProfiles",
            profileRowKey + ".referralMentor",
            newUserProfileRowKey
          )
        }

        if (newUserAccountType == "Investor") {
          const newLookUpValue = (
              $dataGrid("programmePartnerProfiles")[profileRowKey]
                  .referralInvestor || ""
              ).includes(newUserProfileRowKey)
                ? $dataGrid("programmePartnerProfiles")[profileRowKey]
                    .referralInvestor
                : ($dataGrid("programmePartnerProfiles")[profileRowKey]
                    .referralInvestor || "") + "," + newUserProfileRowKey

          $setDataGridVal(
            "programmePartnerProfiles",
            profileRowKey + ".referralInvestor",
            newLookUpValue
          )
        }

        if (newUserAccountType == "CompanyUser") {
          const newLookUpValue = (
              $dataGrid("programmePartnerProfiles")[profileRowKey]
                  .referralCompanyUser || ""
              ).includes(newUserProfileRowKey)
                ? $dataGrid("programmePartnerProfiles")[profileRowKey]
                    .referralCompanyUser
                : ($dataGrid("programmePartnerProfiles")[profileRowKey]
                    .referralCompanyUser || "") + "," + newUserProfileRowKey

          $setDataGridVal(
            "programmePartnerProfiles",
            profileRowKey + ".referralCompanyUser",
            newUserProfileRowKey
          )
        }
      }

      //Referred by: Investor
      if (profileAccType == "Investor") {
        //Add add referral to referred by user
        if (newUserAccountType == "ProgrammePartner") {
          const newLookUpValue = (
              $dataGrid("investorProfiles")[profileRowKey]
                  .referralProgrammePartner || ""
              ).includes(newUserProfileRowKey)
                ? $dataGrid("investorProfiles")[profileRowKey]
                    .referralProgrammePartner
                : ($dataGrid("investorProfiles")[profileRowKey]
                    .referralProgrammePartner || "") + "," + newUserProfileRowKey

          $setDataGridVal(
            "investorProfiles",
            profileRowKey + ".referralProgrammePartner",
            newLookUpValue
          )
        }

        if (newUserAccountType == "Mentor") {
          const newLookUpValue = (
              $dataGrid("investorProfiles")[profileRowKey]
                  .referralMentor || ""
              ).includes(newUserProfileRowKey)
                ? $dataGrid("investorProfiles")[profileRowKey]
                    .referralMentor
                : ($dataGrid("investorProfiles")[profileRowKey]
                    .referralMentor || "") + "," + newUserProfileRowKey

          $setDataGridVal(
            "investorProfiles",
            profileRowKey + ".referralMentor",
            newLookUpValue
          )
        }

        if (newUserAccountType == "Investor") {

//

        }

        if (newUserAccountType == "CompanyUser") {
          const newLookUpValue = (
              $dataGrid("investorProfiles")[profileRowKey]
                  .referralCompanyUser || ""
              ).includes(newUserProfileRowKey)
                ? $dataGrid("investorProfiles")[profileRowKey]
                    .referralCompanyUser
                : ($dataGrid("investorProfiles")[profileRowKey]
                    .referralCompanyUser || "") + "," + newUserProfileRowKey

          $setDataGridVal(
            "investorProfiles",
            profileRowKey + ".referralCompanyUser",
            newLookUpValue
          )
        }
      }

      return null;
    }
  } catch (err) {
    console.error("assign refferer error!!!", err);
  }
}