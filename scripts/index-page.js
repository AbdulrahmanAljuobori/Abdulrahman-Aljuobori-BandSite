console.log("hello world");


 




const commentsArray = [
    {
        name: "Victor Pinto",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains",
        
        
    },
    {
        name: "Christina Cabrera" ,
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        
    },
    {
        name: "Isaac Tadesse",
        comment: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
        
    }
];

console.log(commentsArray);

const listEl = document.querySelector("#comments-list");

for (let i = 0; i < commentsArray.length; i++) {

    const itemEl = document.createElement('li');
    itemEl.classList.add("comments__list");
    listEl.appendChild(itemEl);
    const nameEl = document.createElement("p");
    nameEl.innerText = commentsArray[i].name;
    itemEl.appendChild(nameEl);
    const commentEl = document.createElement("p");
    commentEl.classList.add(
        "comments__detail",
        "comments__detail--special"
    );

    commentEl.innerText = commentsArray[i].comment;
    itemEl.appendChild(commentEl);
}

function displayComments() {
    listEl.textContent = "";
    for (let i = 0; i < commentsArray.length; i++) {
        console.log(commentsArray[i]);

        const itemEl = document.createElement('li');
        itemEl.classList.add('comments__item');
        listEl.appendChild(itemEl);

        const nameEl = document.createElement("p");
        nameEl.classList.add("comments__detail");
        nameEl.innerText = commentsArray[i].name;
        itemEl.appendChild(nameEl);

        const commentEl = document.createElement("p");
        nameEl.classList.add(
            "comments__detail",
            "comments__detail--special"
        );
        commentEl.innerText = commentsArray[i].comment;
        itemEl.appendChild(commentEl);


    }
}

displayComments();


const formEl = document.querySelector("#comments-form");

formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(event.target.commentName.value);
    console.log(event.target.comment.value);

    const newComment = {
        name: commentName,
        comment: comment,
    };


    commentsArray.unshift(newComment);

    displayComments();

    formEl.reset();

});