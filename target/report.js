$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/ShritPurchasesteps.feature");
formatter.feature({
  "name": "shirt validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "shirt purchase",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart webs",
  "keyword": "Given "
});
formatter.match({
  "location": "ShirtPurchasesteps.user_launches_flipkart_webs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login by entering valid crendentials in webs",
  "keyword": "And "
});
formatter.match({
  "location": "ShirtPurchasesteps.user_login_by_entering_valid_crendentials_in_webs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search Television",
  "keyword": "When "
});
formatter.match({
  "location": "ShirtPurchasesteps.user_search_Television()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the Television namee",
  "keyword": "And "
});
formatter.match({
  "location": "ShirtPurchasesteps.user_click_on_the_Television_namee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the Television namee",
  "keyword": "Then "
});
formatter.match({
  "location": "ShirtPurchasesteps.user_validate_the_Television_namee()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/mobilepurchase.feature");
formatter.feature({
  "name": "mobile validate",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "mobile purchase map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@scenario"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart applications",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberTask2.user_launches_flipkart_applications()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login by entering valid crendentials",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTask2.user_login_by_entering_valid_crendentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search mobile one dim map",
  "rows": [
    {
      "cells": [
        "1",
        "realme"
      ]
    },
    {
      "cells": [
        "2",
        "REDMI"
      ]
    },
    {
      "cells": [
        "3",
        "iphone"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CucumberTask2.user_search_mobile_one_dim_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the mobile name",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberTask2.user_click_on_the_mobile_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the mobile names",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberTask2.user_validate_the_mobile_names()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/mobilevalidoutlinesteps.feature");
formatter.feature({
  "name": "mobile validationoutline",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "mobile valid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario"
    }
  ]
});
formatter.step({
  "name": "user search mobile \"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on the mobile names",
  "keyword": "And "
});
formatter.step({
  "name": "user validate the mobile name",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "phone",
        "RAM"
      ]
    },
    {
      "cells": [
        "realme",
        "32"
      ]
    },
    {
      "cells": [
        "REDMI",
        "32"
      ]
    },
    {
      "cells": [
        "iPhone",
        "32"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login by entering valid crendentiall",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_login_by_entering_valid_crendentiall()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "mobile valid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario"
    }
  ]
});
formatter.step({
  "name": "user search mobile \"realme\"",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_search_mobile_outline(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the mobile names",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_click_on_the_mobile_names()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the mobile name",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_validate_the_mobile_name()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login by entering valid crendentiall",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_login_by_entering_valid_crendentiall()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "mobile valid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario"
    }
  ]
});
formatter.step({
  "name": "user search mobile \"REDMI\"",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_search_mobile_outline(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the mobile names",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_click_on_the_mobile_names()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the mobile name",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_validate_the_mobile_name()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login by entering valid crendentiall",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_login_by_entering_valid_crendentiall()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "mobile valid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario"
    }
  ]
});
formatter.step({
  "name": "user search mobile \"iPhone\"",
  "keyword": "When "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_search_mobile_outline(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the mobile names",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_click_on_the_mobile_names()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the mobile name",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberOutlinesteps.user_validate_the_mobile_name()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});