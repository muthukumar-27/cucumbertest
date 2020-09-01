package stepdef;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;

public class teststeps {

	@Given("^testing$")
	public void testing() throws Throwable {
		System.out.println("background");
	}
	@Given("^step one \"([^\"]*)\"$")
	public void step_one(String arg1) throws Throwable {
		 System.out.println(arg1);
	}

	@Then("^step three \"([^\"]*)\"$")
	public void step_three(String arg1) throws Throwable {
		 System.out.println(arg1);
	}

	@Given("^step two$")
	public void step_two() throws Throwable {
	    System.out.println("two");
	}



}
