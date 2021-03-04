describe('Manchoos log in', function () 
{

    it('Lanch Manchoos Url', function ()
     {
        browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://rm---qa.web.app/login');
        browser.sleep(2000)
       
        browser.sleep(2000)
    });

    it('login Manchoos website ',function()
    {
        browser.findElement(By.css('input[placeholder="USER NAME"]')).sendKeys('anu@123');
        browser.findElement(By.css('input[placeholder="PASSWORD"]')).sendKeys('Anupama@123');
        browser.sleep(2000)
    browser.findElement(By.xpath('//*[@id="btnlogin"]/span')).click();
    browser.sleep(2000)

    });
    it('administrative-detailsflow ',function()
    {

        browser.findElement(by.xpath("//*[text()='Restaurant Profile']")).click()
        browser.sleep(2000)
        browser.findElement(by.xpath("//*[text()='Covid-19-Policy']")).click()
        browser.sleep(2000)
        browser.findElement(by.xpath("(//*[text()='Select Policy'])[1]")).click()
        browser.sleep(2000)
        browser.findElement(by.xpath("(//*[text()='Select Policy'])[1]")).click()
        browser.sleep(2000)
        browser.findElement(by.xpath("(//*[text()='Select Policy'])[1]")).click()
        browser.sleep(2000)
        browser.findElement(by.xpath("(//*[text()='Select Policy'])[1]")).click()
        browser.sleep(2000)
        
        browser.findElement(by.xpath("//*[text()=' Save ']")).click();
        browser.sleep(1000)
        browser.findElement(by.xpath("(//*[text()='Selected'])")).click()
        browser.sleep(2000)
        browser.findElement(by.xpath("(//*[text()='Selected'])")).click()
        browser.sleep(2000)
        browser.findElement(by.xpath("(//*[text()='Selected'])")).click()
        browser.sleep(2000)
        browser.findElement(by.xpath("(//*[text()='Selected'])")).click()
        browser.sleep(2000)
        browser.findElement(by.xpath("//*[text()=' Save ']")).click();
        browser.sleep(5000)
        
    });
});