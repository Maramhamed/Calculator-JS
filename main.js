(function() {
    let screen = document.querySelector('.showresult');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btnclear');
    let equal = document.querySelector('.btnequal');
  
    // To show the result of the button on the screen
    buttons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        let value = e.target.value;
        screen.value += value;
      });
    });
  
    // To clear the screen
    clear.addEventListener('click', function() {
      screen.value = '';
    });
  
    // To calculate the result
    equal.addEventListener('click', function() {
      try {
        screen.value = eval(screen.value);
      } catch (error) {
        screen.value = 'Error';
      }
    });
  })();