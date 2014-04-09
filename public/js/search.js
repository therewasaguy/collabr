
function search (form) {
    var sQuery = form.query.value;
    console.log("You typed " + sQuery);
    var elem = document.getElementById('listHead');
    elem.innerHTML='Search results for <em>' +sQuery + "...</em>";
}

function newPost(form) {
  if (!loggedIn) {
    alert("Please log in to do that");
  }
  else {
    console.log("submitted form " +form);
    var postUl = document.getElementById('posts');
    var newLi = document.createElement("LI");
    postUl.appendChild(newLi);
    d = new Date();
    newLi.innerHTML = '<div class="qlisth"><a href="#">' + form.title.value + '</a></div><div class="qlistf">Today at ' + d.getHours() +':'+ d.getMinutes() +':'+ d.getSeconds() + ' by <a href="#">' + username + '</a></div>';
  }
}

console.log('loaded search.js');
