//console.log("hello world");

// api key
//{"api_key":"0239a924-b7ea-4b73-a268-7169fecee2fd"}, bandsite api key
//https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=%3C0239a924-b7ea-4b73-a268-7169fecee2fd%3E url for bandsite api

import BandSiteAPI from "./band-site-api.js";

const bandSiteAPI = new BandSiteAPI("0239a924-b7ea-4b73-a268-7169fecee2fd");

const getComments = async () => {
  //await = async function
  const result = await axios.get(
    "https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=%3C0239a924-b7ea-4b73-a268-7169fecee2fd%3E"
  );
  console.log(result.data);
  return result.data;
};

const postComments = async (comment) => {
  const result = await axios.post(
    "https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=%3C0239a924-b7ea-4b73-a268-7169fecee2fd%3E",
    comment
  );
  console.log(result.data);
  return result.data;
};

//for sprint 3, we are not no longer going to use this array, comments should be coming from the bandsite api using axios

// const commentsArray = [
//   {
//     name: "Victor Pinto",
//     comment:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains",
//   },
//   {
//     name: "Christina Cabrera",
//     comment:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Isaac Tadesse",
//     comment:
//       "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
//   },
// ];

//console.log(commentsArray);

const listEl = document.querySelector("#comments-list");

// for (let i = 0; i < commentsArray.length; i++) {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("comments__list");
//   listEl.appendChild(itemEl);
//   const nameEl = document.createElement("p");
//   nameEl.innerText = commentsArray[i].name;
//   itemEl.appendChild(nameEl);
//   const commentEl = document.createElement("p");
//   commentEl.classList.add("comments__detail", "comments__detail--special");

//   commentEl.innerText = commentsArray[i].comment;
//   itemEl.appendChild(commentEl);
// }
//this data should be coming from the bandsite api using axios.git
async function displayComments() {
  const comments = await bandSiteAPI.getComments();
  listEl.textContent = "";

  const commentsArray = await getComments();
  console.log("comments", commentsArray);

  for (let i = 0; i < commentsArray.length; i++) {
    //console.log(commentsArray[i]);
    const itemEl = document.createElement("li");
    itemEl.classList.add("comments__item");
    listEl.appendChild(itemEl);

    const nameEl = document.createElement("p");
    nameEl.classList.add("comments__detail");
    nameEl.innerText = commentsArray[i].name;
    itemEl.appendChild(nameEl);

    const commentEl = document.createElement("p");
    nameEl.classList.add("comments__detail", "comments__detail--special");
    commentEl.innerText = commentsArray[i].comment;
    dateDetailEl.innerText = date.tolocaleDateString();
    itemEl.appendChild(commentEl);
  }
}

displayComments();

const formEl = document.querySelector("#commentform");
//console.log(formEl);
formEl.addEventListener("submit", async function (event) {
  event.preventDefault();

  console.log(event.target.commentName.value);
  console.log(event.target.comment.value);
  const commentName = event.target.commentName.value;
  const comment = event.target.comment.value;
  const newComment = {
    name: commentName,
    comment: comment,
    date: new Date(),
  };

  //this should be posting to the bandsite API
  //   commentsArray.unshift(newComment);
  await bandSiteAPI.postComments(newComment);
  await postComments(newComment);

  displayComments();

  formEl.reset();
});
