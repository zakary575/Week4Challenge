const blogForm = document.querySelector("#blog-form");
const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");

let blogPost = [];

const initForm = function(){
    
    storedBlogPost = JSON.parse(localStorage.getItem('blog'))
    if (storedBlogPost === null)
        return
    blogPost = storedBlogPost}


const goToBlog = function () {
  window.location.href = "blog.html";
};

const storeBlog = function () {
  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  blogPost.push({
    username,
    title,
    content,
  });
  localStorage.setItem("blog", JSON.stringify(blogPost));
};

blogForm.addEventListener("submit", function (event) {
  event.preventDefault();
  storeBlog();
  goToBlog();
});

initForm()
