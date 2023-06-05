function updateWatch() {
    var now = new Date();
    // now =  date.toString();
    let days = ['Saturday' ,'Sunday', 'Mondat','tuesday', 'wednesday'
,'Thursday','Friday'];

    let months = ['january' , 'february ', 'march', 'april', 'may'
,'june', 'july', 'august','september' ,
'october',' november' , 'december'];
    var day =days[now.getDay()];
    var month = months[now.getMonth()];
    var date =now.getDate()
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();


    var time = hours + ':' + (minutes  < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    var date2 = day + '-' + month + '-' + date +'-' + year;

    
    var watchElement = document.getElementById('watch');
    watchElement.innerHTML = date2 + '<br>' + time;
  }

  setInterval(updateWatch, 1000);