const init = () => {
    const value = window.location.search.slice(7);

    let object;
    try {
        object = JSON.parse(decryptMessage(value));
    } catch {
        location.href = location.origin;
    }

    document.getElementById('thema').innerHTML = (object.role === 0 || object.role === 1) ? object.thema : '？';

    if (object.role === 0) {
        document.getElementById('insider').style.display = 'block';
        return;
    }

    if (object.role === 1) {
        document.getElementById('master').style.display = 'block';
        return;
    }

    document.getElementById('commons').style.display = 'block';
}

const decryptMessage = (encryptedMessage) => CryptoJS.AES.decrypt(encryptedMessage, 'secretkey').toString(CryptoJS.enc.Utf8);

window.onload = init;