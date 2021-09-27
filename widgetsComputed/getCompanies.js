//Define portfolio companies row
const portfolioType = _.find($getGrid("companyTypes"), {
  name: "Portfolio Company",
});
const rowKey = portfolioType ? portfolioType.rowKey : null;
//Grab all companies with type = Portfolio Company
const allCompanies = alasql(
  `SELECT * FROM ? WHERE lower(\`companyType\`) LIKE lower("%${rowKey}%")`,
  [$getGrid("companyProfiles")]
);
const companiesResult = []
for (let company of allCompanies) {
  const company = _.find($getGrid("companyProfiles"), { companyType: rowKey });
  companiesResult.push(company)
  console.log(allCompanies)
}
return allCompanies

