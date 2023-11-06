


window.alert = function (message, timeout = null) {

    function closeAlert() {
    container.remove();
}

    let container = document.querySelector('.containerAlert');
    container.innerHTML =
        '<div class="alert show">' +
        '<span class="fas fa-exclamation-circle"></span>' +
        '<span class="msg">Aviso: Digite o Peso do Animal</span>' +
        '<span class="close-btn" onclick="closeAlert()">' +
        '<span class="fas fa-times"></span>' +
        '</span>' +
        '</div>';

    alert.innerHTML = message;

    
    // document.body.appendChild(alert);
    
    if(timeout != null) {
        setTimeout(()=>{
            container.remove();

            // alert('close');
        }, Number(timeout));
    }

   

    // closeAlert();
    

    // if(timeout != null) {
    //     setTimeout(()=>{
    //         // alert.remove();
    //         console.log("Delay");
    //     }, 1000);
    // }

    // setTimeout(() => {
    //     console.log("Delay for 1 second.");
    //     Notification.close();
    //     //   alert.remove();
    // }, 3000);
}



/* 
  setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
 */