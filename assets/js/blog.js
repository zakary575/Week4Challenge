const posts = document.querySelector("#posts");

// function for the back button
const back = function () {
  window.location.href = "index.html";
};

// takes stored data and makes the post

// a for loop that goes through all the objects in local storage that creates a div with the title content and username of the author
const renderBlog = function () {
  const post = JSON.parse(localStorage.getItem("blog"));
  for (let i = 0; i < post.length; i++) {
    const blog = post[i];
    const div = document.createElement("div");
    div.setAttribute("class", "post");
    const title = document.createElement("h3");
    title.textContent = blog.title;
    title.setAttribute("class", "title");
    const content = document.createElement("div");
    content.textContent = blog.content;
    content.setAttribute("class", "content");
    const username = document.createElement("div");
    username.textContent = `Posted by ${blog.username}`;
    username.setAttribute("class", "username");
    posts.appendChild(div);
    div.appendChild(title);
    div.appendChild(content);
    div.appendChild(username);
    console.log(post);
  }
};

renderBlog();
