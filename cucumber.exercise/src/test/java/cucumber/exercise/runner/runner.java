package cucumber.exercise.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="featurefile",glue={"stepdef","hooks"},
dryRun = false,monochrome = true,
plugin= {"html:report/w1","junit:report/w2.xml"},
tags= {"~@hello"})

public class runner {
	

}
