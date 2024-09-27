async function dataShow() {
    let mytable = `
      <table border="1px" width="400px" align="center" padding="200px">
      <tr bgcolor="yellow">
       <th>ID</th>
       <th>Product Name</th>
       <th>Product Number</th>
       
      </tr>
      `;
  
    let url = "http://localhost:3000/products";
    let myobj = await fetch(url);
    console.log(myobj);
  
    let mydata = await myobj.json();
    console.log(mydata);
  
    mydata.map((key) => {
      mytable += `
           <tr>
             <td>${key.id}</td>
             <td>${key.name}</td>
             <td>${key.number}</td>
           
           </tr>
        `;
    });
  
    mytable += `</table>`;
    document.getElementById("demo").innerHTML = mytable;
  }
  
  dataShow();