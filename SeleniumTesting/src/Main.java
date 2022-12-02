import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class Main {
    public static String firstThread = "/html/body/div/div/div/nav/ul/li[1]/a";
    public static String secondThread = "/html/body/div/div/div/nav/ul/li[2]/a";
    public static String addPost = "/html/body/div/div/div/nav/ul/li[3]/a";
    public static String submitButton = "/html/body/div/div/div/form/button";

    public static WebDriver driver;
    public static void main(String[] args) {

        System.setProperty("webdriver.chrome.driver","C:\\Users\\PC\\Desktop\\foxdriver\\geckodriver.exe");
//        WebDriver driver;
        driver = new FirefoxDriver();
        driver.get("http://localhost:5173/");
//        driver.get("https://www.google.com/");
//        driver.manage().window().maximize();



//        testThread();
//        createAPost();
//            TestPost("Test " + Math.random(),2,"This is the content ");
        TestPost("Test " + Math.random(),2,"This is the content bitch ");
//        driver.findElement(By.xpath("/html/body/div/div/form/input[1]"))
//                .sendKeys("bobdylan@gmail.com");
//        driver.findElement(By.xpath("/html/body/div/div/form/input[2]"))
//                .sendKeys("1234");
//        driver.findElement(By.xpath("/html/body/div/div/form/button"))
//                .click();


        List<WebElement> elements = driver.findElements(By.xpath("//*"));
        int elementsCount = elements.size();
        System.out.println(elementsCount);

    }

    public static void testThread(){
        // Wait for element to appear then proceed
        WebElement element = driver.findElement(By.xpath("/html/body/div/div/div/nav/ul/li[1]/a"));
        new WebDriverWait(driver, Duration.ofSeconds(5)).until(ExpectedConditions.visibilityOf((element)));

        element.click();
        String path = "/html/body/div/div/div/div/div[1]";

        WebElement findDivOfFirstPost = driver.findElement(By.xpath(path));
        if(findDivOfFirstPost != null){
            System.out.println("Found the div");
        }
        else{
            System.out.println("Didnt found");
        }

    }

    public static void createAPost(){
        driver.findElement(By.xpath(firstThread)).click();
        driver.findElement(By.xpath(addPost)).click();
        driver.findElement(By.xpath("/html/body/div/div/div/form/div/input")).sendKeys("PostName");
        driver.findElement(By.xpath("/html/body/div/div/div/form/div/select")).click();
        driver.findElement(By.xpath("/html/body/div/div/div/form/div/select/option[2]")).click();
        WebElement waitforthis = driver.findElement(By.xpath("/html/body/div/div/div/form/textarea"));
        driver.findElement(By.xpath("/html/body/div/div/div/form/textarea")).sendKeys("Post content goes here");
        new WebDriverWait(driver, Duration.ofSeconds(5)).until(ExpectedConditions.visibilityOf((waitforthis)));
        driver.findElement(By.xpath(submitButton)).click();


    }

    public static void TestPost(String postName, Integer option, String postContent){
        driver.findElement(By.xpath(firstThread)).click();
        driver.findElement(By.xpath(addPost)).click();
        driver.findElement(By.xpath("/html/body/div/div/div/form/div/input")).sendKeys(postName);
        driver.findElement(By.xpath("/html/body/div/div/div/form/div/select")).click();
        driver.findElement(By.xpath("/html/body/div/div/div/form/div/select/option["+option+"]")).click();
        WebElement waitforthis = driver.findElement(By.xpath("/html/body/div/div/div/form/textarea"));
        driver.findElement(By.xpath("/html/body/div/div/div/form/textarea")).sendKeys(postContent);
        WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(5));
//        new WebDriverWait(driver, Duration.ofSeconds(5)).until(ExpectedConditions.visibilityOf((waitforthis)));
        driver.findElement(By.xpath(submitButton)).click();
    }
}