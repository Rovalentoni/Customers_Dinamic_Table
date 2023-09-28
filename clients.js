let clients = [
    { name: "Rodrigo", dob: "1998-05-30", skill: "Computer Engineering" },
    { name: "Gabriel", dob: "1988-09-19", skill: "Being Feminine" },
    { name: "Beatriz", dob: "1998-12-28", skill: "My Love" }
];

function updateTable() {
    let tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    
    clients.forEach((client, index) => {
        let row = `<tr>
                    <td>${client.name}</td>
                    <td>${client.dob}</td>
                    <td>${client.skill}</td>
                    <td>
                        <button onclick="editClient(${index})">Edit</button>
                        <button onclick="deleteClient(${index})">Delete</button>
                    </td>
                   </tr>`;
        tableBody.innerHTML += row;
    });
}

function addClient() {
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let skill = document.getElementById('skill').value;
    clients.push({ name, dob, skill });
    updateTable();
}

function editClient(index) {
    document.getElementById('add-form').classList.add('hidden');
    document.getElementById('edit-form').classList.remove('hidden');

    document.getElementById('edit-name').value = clients[index].name;
    document.getElementById('edit-dob').value = clients[index].dob;
    document.getElementById('edit-skill').value = clients[index].skill;
    document.getElementById('edit-index').value = index;
}

function updateClient() {
    let index = document.getElementById('edit-index').value;
    clients[index].name = document.getElementById('edit-name').value;
    clients[index].dob = document.getElementById('edit-dob').value;
    clients[index].skill = document.getElementById('edit-skill').value;
    
    updateTable();
    cancelEdit();
}

function deleteClient(index) {
    clients.splice(index, 1);
    updateTable();
}

function cancelEdit() {
    document.getElementById('add-form').classList.remove('hidden');
    document.getElementById('edit-form').classList.add('hidden');
}

updateTable();
