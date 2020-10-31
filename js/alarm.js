function showMessage() {
    let now = new Date();
    let month = now.getMonth();
    let dayofMonth = now.getDate();
    let dayofWeek = now.getDay();
    if (month == 1 && dayofMonth == 1) {
      message = 'Sleep In!'
    }
    if (month == 7 && dayofMonth == 4) {
    message = 'Sleep In!'
    }
    if (month == 12 && dayofMonth == 25) {
      message = 'Sleep In!'
    }
    else if (dayofWeek == 6 || dayofWeek == 7) {
      message = 'Sleep In!';
    }
    else {
     message = 'Get Up!';
    }
    document.getElementById('output').innerHTML = myAlarm;
  }