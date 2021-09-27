
          alasql.options.cache = false
          let res = alasql('SELECT aboutTheCompany , SUM([aboutTheCompany]::NUMBER)  AS totals FROM ?  GROUP BY aboutTheCompany ORDER BY aboutTheCompany', [$getGrid('companyProfiles')] )
          return res
      