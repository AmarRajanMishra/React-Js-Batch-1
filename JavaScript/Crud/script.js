// function checkData(){
//     var data = readFormData()
//     console.log(data)

// }
var selectedRow = null;

function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    insertData(formData)
    

}

function readFormData(){
    var formData = {};
    formData['name'] = document.getElementById('name').value
    formData['email'] = document.getElementById('email').value
    formData['number'] = document.getElementById('number').value
    formData['message'] = document.getElementById('message').value
    return formData;
}

function insertData(data){
    var table = document.getElementById('dataStorage').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.name;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.email;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> 
            <button onClick="onDelete(this)">Delete</button>`;
    

}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('email').value = selectedRow.cells[1].innerHTML;
    document.getElementById('number').value = selectedRow.cells[2].innerHTML;
    document.getElementById('message').value = selectedRow.cells[3].innerHTML;

}
