function showMessage() {
  // INPUTS
    let now = new Date();
    let month = now.getMonth();
    let dayofMonth = now.getDate();
    let dayofWeek = now.getDay();
    // PROCESSING
    // check if it is a holiday
    if (month == 0 && dayofMonth == 1) || (month == 6 && dayofMonth == 4) || (month == 12 && dayofMonth == 25) {
      message = 'Sleep In!'
    }
    // check if it is a weekday
    if (dayofWeek == 0 || dayofWeek == 1) {
      message = 'Sleep In!';
    }
    else {
     message = 'Get Up!';
    }
    //OUTPUTS
    document.getElementById('output').innerHTML = message;
  }
  showMessage(); 