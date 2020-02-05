# CV
-------------

# Oleksandr Myrnyi

-------------

## Contacts
* E-mail: friedlich3@gmail.com
* Phone: +38-099-306-87-71
* Telegram: @friedoo

-------------

## Summary

My main goal is to develope my web-developer skills in JavaScript and to find a job in this area.

-------------

## Skills

* Programming languages: C ++, JavaScript
* Mathematical and statistical programs: Matlab, Simulink, Mathcad, MS Excel
* Automation systems: Simatic Step 5/7
* Computer-aided design systems: Compass
* Development environments: STM32CubeMX, µVision IDE, CoIDE

-------------

## Code examples

My javascript code examples are refactored examples from learning sources 
(http://learn.javascript.ru, Codeacademy etc.). For example:

```javascript
function animate({timing, draw, duration}) {
    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      let progress = timing(timeFraction);
  
      draw(progress);// отрисовать её
  
     if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }
  
  function replace2Number(px)
  {
    return Number(px.replace(/px/, ''))
  }
 
  function quad(timeFraction) {
    return Math.pow(timeFraction, 2)
  }
  function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }
  function makeEaseInOut(timing) {
    return function(timeFraction) {
      if (timeFraction < .5)
        return timing(2 * timeFraction) / 2;
      else
        return (2 - timing(2 * (1 - timeFraction))) / 2;
    }
  }
  function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }
  function drawHorizontal(progress) {
    ball.style.left = initPos.left + toLeft * progress + "px";
    if ((replace2Number(ball.style.left) + ball.width) >= field.clientWidth && (replace2Number(ball.style.left) + ball.width) > 0)
        {ball.style.left = field.clientWidth + 20 - (toLeft * progress) + "px";
          //console.log(ball.style.left);
  }
      if (replace2Number(ball.style.left) < 0)  
      { 
        ball.style.left = - field.clientWidth - 20 + toLeft * progress + "px";
      }
      
  }
  
```
-------------

## Expirience
I have no work expirience in web or software development.

-------------

## Education

* Bachelor – Donetsk National Technical University (2013–2017)
* Specialty – Program control systems and mechatronics
* Master – Donetsk National Technical University (2017-2019)
* Specialty – Microprocessor control systems of renewables

-------------

## English level

B2 (Cambridge Assessment First Certificate in English (FCE) 14 DECEMBER
2019 Kyiv).
