let name = document.getElementById('name');
let table = document.getElementById('table');
let submit = document.getElementById('submit');

submit.addEventListener('click', myFunc);

function myFunc() {
    let name = document.getElementById('name');
    let value = name.value || 'Nothing ...';
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.colSpan = 2;
    td.align = 'center';
    td.textContent = value;
    tr.appendChild(td);
    table.appendChild(tr);
    name.value = '';
}