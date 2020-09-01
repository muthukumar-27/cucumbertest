package hooks;

import cucumber.api.java.*;

public class testhooks {

	
	@Before
	public void b()
	{
		System.out.println("b1");
	}
	@After
	public void a()
	{
		System.out.println("a1sasdef1");
	}
	@Before("@hello")
	public void b1()
	{
		System.out.println("b2");
	}
	@After(order=2)
	public void a1()
	{
		System.out.println("a3");
	}
}
