const ipcRenderer = require('electron').ipcRenderer

var child = document.createElement('div');
child.innerHTML = '<div id="close_btn" class="close" style="z-index: 1;position: absolute;right: 10px;font-weight: 300;padding:20px;background-color:aliceblue;cursor: pointer;">x</div>';
child = child.firstChild;
document.body.appendChild(child);
let close_btn = document.getElementById('close_btn');

close_btn.addEventListener('click', (event) => {
  ipcRenderer.send('wall', localStorage.getItem('wall'));
  ipcRenderer.send('signIn', localStorage.getItem('signIn'));
  ipcRenderer.send('close');
})