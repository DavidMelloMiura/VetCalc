
window.alert = function(message, timeout=null) {
    const alert = document.createElement('div');
    const alertButton = document.createElement('button');
    alert.classList.add('alert');
    alertButton.innerText = 'OK';
    alert.setAttribute('alert', `
        position: fixed;
        // top: 0%px;
        // left: 50%;
        // padding: 20px;
        // border-radius: 10px;
    `);

    alert.innerText = message;
    document.body.appendChild(alert);
}