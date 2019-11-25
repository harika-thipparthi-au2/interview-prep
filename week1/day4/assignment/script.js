var history1 = [];
      function e(){
        var exp = calculator.display.value;
        history1.push(exp);
        console.log(history1);
        calculator.display.value = eval(calculator.display.value);
      }
      function h(){
        calculator.display.value = history1;
      }
