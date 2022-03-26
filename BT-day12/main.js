var userUrl1 = "https://reqres.in/api/users?page=1"
var userUrl2 = "https://reqres.in/api/users?page=2"

// demo call API với Fetch
fetch(userUrl1)
  .then(function(response) {
    return response.json();
  })

  // show html 
  .then(function(users1) {
    let html = '';
    let $userHtml = document.getElementById('users-list')
    for (let i = 0 ; i < users1.data.length; i++) {
      html += `<tr class="user-item">
        <td>${users1.data[i].id}</td>
        <td>${users1.data[i].first_name}</td>
        <td>${users1.data[i].last_name}</td>
        <td>${users1.data[i].email}</td>
      </tr>`;
    }
    $userHtml.innerHTML = html;
  });

// demo call API với Axios
axios.get(userUrl2)
  .then(function(response2) {
    return response2.data
  })
  
  // show html 
  .then(function(users2) {
    let html2 = '';
    let $userHtml2 = document.getElementById('users2-list')
    for (let i = 0 ; i < users2.data.length; i++) {
      html2 += `<li class="user-item col-4">
        <img src="${users2.data[i].avatar}">
        <div>
          <p>ID: ${users2.data[i].id}</p>
          <p>Fullname: ${users2.data[i].first_name} ${users2.data[i].last_name}</p>
          <p>Email: ${users2.data[i].email}</p>
        </div>
      </li>`;
      // console.log(i)
    }
    $userHtml2.innerHTML = html2;
  }) 
