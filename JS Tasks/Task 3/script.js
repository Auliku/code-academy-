/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = 'https://api.github.com/users';

      let response = fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => console.log(data));

  const createTableSkeleton = () => {
    const id = document.createElement('th');
    id.innerText = 'ID';
  
    const image = document.createElement('th');
    image.innerText = 'Image';
  
    const firstName = document.createElement('th');
    firstName.innerText = 'First name'
  
    const tr = document.createElement('tr');
    tr.append(id, image, firstName);
  
    const thead = document.createElement('thead');
    thead.append(tr);
  
    const table = document.createElement('table');
    table.append(thead, document.createElement('tbody'));
    document.body.append(table);
  }
  
  function populateTable(robots) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
  
    robots.forEach(robot => {
      const id = document.createElement('td');
      id.innerText = robot.id
  
      const img = document.createElement('img');
      img.src = robot.image;
      img.setAttribute('alt', 'UserPicture');
      const image = document.createElement('td');
      image.append(img);
  
      const [name, surname] = robot.name.split(' ');
  
      const firstName = document.createElement('td');
      firstName.innerText = name;

      const tr = document.createElement('tr')
      tr.append(id, image, firstName);
      tbody.append(tr);
    });
  }
  
  console.log()