describe('Manchoos log in', function () {

    it('Lanch Manchoos Url', function () {
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

    it('rm-profile',function()
    {
     browser.findElement(by.xpath("//*[text()='Restaurant Profile']")).click()
        browser.sleep(2000)
      browser.findElement(by.xpath("//*[text()='Gallery']")).click()
        browser.sleep(2000)
      let image="C:\\Users\\91990\\Desktop\\documents\\download.jpg";
        browser.findElement(By.xpath("(//span[text()='Add Image']/following::input[@type='file'])")).sendKeys(image)
        browser.findElement(by.xpath("//*[text()='Save Changes']")).click()
        browser.sleep(3000)
         browser.findElement(By.xpath("(//a[text()='Remove'])[2]")).click()
         browser.sleep(1000)
         browser.findElement(by.xpath("//*[text()=' Ok ']")).click()
         browser.sleep(2000)
        browser.findElement(By.xpath("//*[text()='hotel']")).click()
        browser.sleep(1000)
        browser.findElement(By.css('input[placeholder="Title"]')).clear()
        browser.sleep(1000)
        browser.findElement(By.css('input[placeholder="Title"]')).sendKeys('hotel')
        browser.sleep(1000)
        browser.findElement(by.xpath("//*[text()=' Save ']")).click()
         browser.sleep(2000)

         console.log("********Ambiance completed********")
         browser.sleep(2000)


         console.log("food stared")
         browser.sleep(2000)
         browser.findElement(by.xpath('(//li[@class="nav-item min-deff-width mr-5 ng-star-inserted"])[2]')).click()
         browser.sleep(1000)
         let image1="C:\\Users\\91990\\Desktop\\documents\\download.jpg";
         browser.findElement(By.xpath("(//span[text()='Add Image']/following::input[@type='file'])")).sendKeys(image1)
        browser.findElement(by.xpath("//*[text()='Save Changes']")).click()
     browser.sleep(1000)
       browser.findElement(By.xpath("(//a[text()='Remove'])[3]")).click()
         browser.sleep(1000)
         browser.findElement(by.xpath("//*[text()=' Ok ']")).click()
         browser.sleep(2000)
       browser.findElement(By.xpath("//*[text()='food6500']")).click()
        browser.sleep(1000)
        browser.findElement(By.css('input[placeholder="Title"]')).clear()
        browser.sleep(1000)
        browser.findElement(By.css('input[placeholder="Title"]')).sendKeys('hotel')
        browser.sleep(1000)
        browser.findElement(by.xpath("//*[text()=' Save ']")).click()
        
       // ************finding the text(Ambiance) using the get text********
        
        let list = element(by.xpath('//a[@class="nav-link hv-curserpont fntfmly_open_sans fs-14 fs-xxl-16 fw-600 active"]'));
        list.getText().then(function (text) {
            console.log("Ambiancetext:-",text);
            var str = text;
           var res = str.substring(6, 7);
           console.log("count:-",res)
           

        });
        
      

    }); 
});
