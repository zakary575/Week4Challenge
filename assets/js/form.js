const blogForm = document.querySelector("#blog-form");
const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");

let blogPost = [];
// pushes the stored data into blogPost
const initForm = function () {
  storedBlogPost = JSON.parse(localStorage.getItem("blog"));
  if (storedBlogPost === null) return;
  blogPost = storedBlogPost;
};
// sends you to the blog page
const goToBlog = function () {
  window.location.href = "blog.html";
};
// function that checkd if you input values
const valueCheck = function () {
  if (
    usernameInput.value === "" ||
    titleInput.value === "" ||
    contentInput.value === ""
  ) {
    window.alert("Please fill all fields!!!");
    return true;
  }
};
// function to store the inputed values
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
// event listener for submiting the form
blogForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (valueCheck()) {
    return;
  }
  storeBlog();
  goToBlog();
});

initForm();
