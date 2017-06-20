require("geckodriver")
var webdriver = require("selenium-webdriver"), //selenium 
By = webdriver.By, //
until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('firefox').build();

driver.get("http://ssouat.rajax.me/auth/entry")

driver.findElement(By.css("body > div.container-fluid.bg > div > div.head > div.bodyinfo > div.logbanner > div > form > div:nth-child(2) > input")).click();


driver.sleep(1 * 1000).then(function () {

var element = driver.findElement(By.css("body > div.container-fluid.bg > div > div.head > div.bodyinfo > div.logbanner > div > form > div:nth-child(2) > input"));
element.sendKeys("zhongqiu.zhang");
})

driver.findElement(By.css("body > div.container-fluid.bg > div > div.head > div.bodyinfo > div.logbanner > div > form > div.btn.btn-default.btn-user.loginbtn")).click();//ABOUT




driver.sleep(8 * 1000).then(function () { //sleep for 20'
return driver.quit();
})