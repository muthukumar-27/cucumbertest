$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test1.feature");
formatter.feature({
  "line": 1,
  "name": "this is to test the cucmber",
  "description": "",
  "id": "this-is-to-test-the-cucmber",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": ": cucumber testing",
  "description": "",
  "id": "this-is-to-test-the-cucmber;:-cucumber-testing",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "step one \"\u003cc1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "step two",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "step three \"\u003cc2\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "this-is-to-test-the-cucmber;:-cucumber-testing;",
  "rows": [
    {
      "cells": [
        "c1",
        "c2"
      ],
      "line": 9,
      "id": "this-is-to-test-the-cucmber;:-cucumber-testing;;1"
    },
    {
      "cells": [
        "a",
        "b"
      ],
      "line": 10,
      "id": "this-is-to-test-the-cucmber;:-cucumber-testing;;2"
    },
    {
      "cells": [
        "c",
        "d"
      ],
      "line": 11,
      "id": "this-is-to-test-the-cucmber;:-cucumber-testing;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 166700,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "testing",
  "keyword": "Given "
});
formatter.match({
  "location": "teststeps.testing()"
});
formatter.result({
  "duration": 90822100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": ": cucumber testing",
  "description": "",
  "id": "this-is-to-test-the-cucmber;:-cucumber-testing;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "step one \"a\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "step two",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "step three \"b\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 10
    }
  ],
  "location": "teststeps.step_one(String)"
});
formatter.result({
  "duration": 1802500,
  "status": "passed"
});
formatter.match({
  "location": "teststeps.step_two()"
});
formatter.result({
  "duration": 51100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "b",
      "offset": 12
    }
  ],
  "location": "teststeps.step_three(String)"
});
formatter.result({
  "duration": 72300,
  "status": "passed"
});
formatter.after({
  "duration": 35600,
  "status": "passed"
});
formatter.after({
  "duration": 32400,
  "status": "passed"
});
formatter.before({
  "duration": 41400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "testing",
  "keyword": "Given "
});
formatter.match({
  "location": "teststeps.testing()"
});
formatter.result({
  "duration": 53400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": ": cucumber testing",
  "description": "",
  "id": "this-is-to-test-the-cucmber;:-cucumber-testing;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "step one \"c\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "step two",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "step three \"d\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "c",
      "offset": 10
    }
  ],
  "location": "teststeps.step_one(String)"
});
formatter.result({
  "duration": 127800,
  "status": "passed"
});
formatter.match({
  "location": "teststeps.step_two()"
});
formatter.result({
  "duration": 76700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "d",
      "offset": 12
    }
  ],
  "location": "teststeps.step_three(String)"
});
formatter.result({
  "duration": 77100,
  "status": "passed"
});
formatter.after({
  "duration": 52500,
  "status": "passed"
});
formatter.after({
  "duration": 33500,
  "status": "passed"
});
});