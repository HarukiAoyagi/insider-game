const init = () => {
    loadMembers();

    document.getElementById('done').onclick = () => {
        saveMembers();
        gotoSharePage();
    }
}
 
const getItem = () => localStorage.getItem('strage');

const setItem = (value) => localStorage.setItem('strage', value);

const getValue = () => document.getElementById('members').value;

const setValue = (value) => document.getElementById('members').value = value;

const loadMembers = () => setValue(getItem());

const saveMembers = () => setItem(getValue());

const gotoSharePage = () => location.href = '/share.html';

window.onload = init;