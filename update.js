function editRow(id){
    document.getElementById(`nm-${id}`).removeAttribute('readonly');
    document.getElementById(`num-${id}`).removeAttribute('readonly');
    // document.getElementById(`city-${id}`).removeAttribute('readonly');
    // document.getElementById(`salary-${id}`).removeAttribute('readonly');
   
    document.getElementById(`edit-${id}`).style.display="none";
    document.getElementById(`save-${id}`).style.display="inline";
}




function myrecordRemove(id) {
  let url = `http://localhost:3000/products/${id}`;

  fetch(url, {
    method: "DELETE",
  });
  alert("record deleted");
// 
//   then((data) => {
//     console.log(data);
//     return data.json();
//   })
//   .then((y) => {
//     console.log(y);
//     alert("Record deleted successfully");
//   });
}

async function dataShow() {
  let mytable = `
     <table>
       <tr>
       <th>Employee no</th>
       <th>Name</th>
       
       <th>Actions</th>
       </tr>
    `;

  let url = "http://localhost:3000/products";

  let myobj = await fetch(url);
  console.log(myobj);

  let mydata = await myobj.json();
  console.log(mydata);

  mydata.map((key) => {
    // eno-c291 , nm-8ae6, city-8ae6,salary-8ae6 ,  myrecremove(8ae6)

    mytable += `
     <tr>
     <td><input type="text" value="${key.name}" id="name-${key.id}" readonly></td>
     <td><input type="text" value="${key.number}" id="nm-${key.id}" readonly></td>
     
     <td>

     <a href="#" onclick="myrecordRemove('${key.id}')" class="button button-delete">Delete</a>
     <a href="#" onclick="editRow('${key.id}')" id="edit-${key.id}" class="button button-edit">Edit</a>
     <a href="#" onclick="saveRow('${key.id}')" id="save-${key.id}" class="button button-save" style="display:inline">Save</a>
     </td>
     </tr>
    `;
  });

  mytable += `</table>`;
  document.getElementById("demo").innerHTML = mytable;
}
dataShow();