import { Builder, By, Key } from 'selenium-webdriver';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function clearInput(input){
    const value = await input.getAttribute('value');
    for(const _ of value){
        await input.sendKeys(Key.BACK_SPACE);
    }
}

async function main() {
    const driver = await new Builder().forBrowser('chrome').build();
    const tests = [];
    try {
        // Maximizamos la ventana
        driver.manage().window().maximize();

        // Pantalla tamaño 800x600
        //driver.manage().window().setRect({ width: 800, height: 600 });

        driver.get('http://localhost:3000/');

        // Esperamos 1 segundo
        await sleep(1000);

        // Buscamos el input de usuario
        const inputEmail = await driver.findElement(By.name('email'));
        if(!inputEmail){
            tests.push({
                test: 'Input Email existe',
                result: false
            });
        }else{
            tests.push({
                test: 'Input Email existe',
                result: true
            });

            //Verificar que esté visible y habilitado
            const isVisible = await inputEmail.isDisplayed();
            const isEnabled = await inputEmail.isEnabled();
            tests.push({
                test: 'Input Email esté visible y habilitado',
                result: isVisible && isEnabled
            });
        }

        // Buscamos el input de contraseña
        const inputPassword = await driver.findElement(By.name('password'));
        if(!inputPassword){
            tests.push({
                test: 'Input Password existe',
                result: false
            });
        }else{
            tests.push({
                test: 'Input Password existe',
                result: true
            });
            //Verificar que esté visible y habilitado
            const isVisible = await inputPassword.isDisplayed();
            const isEnabled = await inputPassword.isEnabled();
            tests.push({
                test: 'Input Password esté visible y habilitado',
                result: isVisible && isEnabled
            });
        }

        // Buscamos unico boton Iniciar sesión
        const buttonLogin = await driver.findElement(By.xpath("//button"));
        if(!buttonLogin){
            tests.push({
                test: 'Button Login existe',
                result: false
            });
        }else{
            tests.push({
                test: 'Button Login existe',
                result: true
            });
            //Verificar que esté visible y habilitado
            const isVisible = await buttonLogin.isDisplayed();
            const isEnabled = await buttonLogin.isEnabled();
            tests.push({
                test: 'Button Login esté visible y deshabilitado',
                result: isVisible && !isEnabled
            });
        }

        // Login incorrecto
        await inputEmail.sendKeys('test@test.com');
        await inputPassword.sendKeys('123456');
        await buttonLogin.click();

        // Esperamos 1 segundo
        await sleep(1000);

        // Verificar que el error esté visible
        const error = await driver.findElement(By.xpath("//div[contains(text(), 'Credenciales inválidas')]"));
        if(!error){
            tests.push({
                test: 'Error esté visible',
                result: false
            });
        }else{
            tests.push({
                test: 'Error esté visible',
                result: true
            });

            //Verificar que el inputPassword se haya limpiado
            const valuePassword = await inputPassword.getAttribute('value');
            tests.push({
                test: 'Input Password se haya limpiado',
                result: valuePassword === ''
            });

            //Verificar que el inputEmail no se haya limpiado
            const valueEmail = await inputEmail.getAttribute('value');
            tests.push({
                test: 'Input Email no se haya limpiado',
                result: valueEmail === 'test@test.com'
            });
        }

        // Login correcto
        await clearInput(inputEmail);
        await clearInput(inputPassword);

        // Esperamos 1 segundo
        await sleep(1000);
        await inputEmail.sendKeys('joaquin.mateos@jdev.com.ar');
        await inputPassword.sendKeys('123123');
        await buttonLogin.click();


        // Esperamos 1 segundo
        await sleep(5000);




    } catch (error) {
        //Vemos el error
        console.error(error);
    } finally {
        // Cerramos el navegador
        await driver.quit();
        console.log(tests);
    }
}

main();
