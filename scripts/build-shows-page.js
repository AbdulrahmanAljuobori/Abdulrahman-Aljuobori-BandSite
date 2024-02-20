// const showDetails = [
//     {
//         date : "Mon Sept 09 2024",
//         venue : "Ronald Lane",
//         location : "San Francisco, CA",
//         button : "BUY TICKETS"

//     },
//     {
//         date : "Tue Sept 17 2024",
//         venue : "Pier 3 East",
//         location : "San Francisco, CA",
//         button : "BUY TICKETS"
//     },
//     {
//         date : "Sat Oct 12 2024",
//         venue : "View Lounge",
//         location : "San Francisco, CA",
//         button : "BUY TICKETS"
//     },
//     {
//         date : "Fri Nov 29 2024",
//         venue : "Hyatt Agency",
//         location : "San Francisco, CA",
//         button : "BUY TICKETS"
//     },
//     {
//         date : "Sat Nov 16 2024",
//         venue : "Moscow Center",
//         location : "San Francisco, CA",
//         button : "BUY TICKETS"
//     },
//     {
//         date : "Sat Nov 16 2024",
//         venue : "Press Club",
//         location : "San Francisco, CA",
//         button : "BUY TICKETS"
//     },

// ]

// const getShowDates = async () => {
//   const result = await axios.get(
//     "https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=%3C0239a924-b7ea-4b73-a268-7169fecee2fd%3E"
//   );
//   console.log(result.data);
//   return result.data;
// };

//api key
//{"api_key":"56943577-874d-4ce7-bbae-b78d72e36361"}
// api url : https://unit-2-project-api-25c1595833b2.herokuapp.com/showdates?api_key=%3C56943577-874d-4ce7-bbae-b78d72e36361%3E

import BandSiteAPI from "./band-site-api.js";

const showsCard = document.querySelector(".shows__container");
// console.log(showsCard);

const bandSiteAPI = new BandSiteAPI("56943577-874d-4ce7-bbae-b78d72e36361");

async function getShows() {
  // showsCard.textContent = "";

  const showDetails = await bandSiteAPI.getShows();
  console.log("shows", showDetails);
  showsCard.textContent = "";
  for (let i = 0; i < showDetails.length; i++) {
    //console.log(showDetails[i].date);
    const dateInfo = document.createElement("p");
    dateInfo.classList.add("shows__content");
    const date = new Date(shows[i].posted);
    dateInfo.innerText = showDetails[i].date;
    // console.log(dateInfo);
    showsCard.appendChild(dateInfo);

    const venueInfo = document.createElement("p");
    venueInfo.classList.add("show__container");
    venueInfo.innerText = showDetails[i].venue;
    // console.log(venueInfo);
    showsCard.appendChild(venueInfo);

    const locationInfo = document.createElement("p");
    locationInfo.classList.add("shows__content");
    locationInfo.innerText = showDetails[i].location;
    // console.log(locationInfo);
    showsCard.appendChild(locationInfo);

    const buttonInfo = document.createElement("button");
    buttonInfo.classList.add("shows__content");
    buttonInfo.setAttribute("href", "#");
    buttonInfo.innerText = showDetails[i].button;
    // console.log(buttonInfo);
    showsCard.appendChild(buttonInfo);
  }
}

getShows();

//const entries = [{
//    'date': 'Mon Sept 09 2024'
//   }, {
//    'date': 'Tue Sept 17 2024'
//    }, {
//    'date': 'Sat Oct 12 2024'
//    }, {
//    'date': 'Sat Nov 16 2024'
//    }, {
//    'date': 'Fri Nov 29 2024'
//    }, {
//    'date': 'Wed Dec 18 2024'
//    },

//}];

// const datePlaceholder = document.getElementById("shows__date");
// const newList = "";

// for (i = 0; i < entries.length; i++) {
//   newList += "<li>" + entries[i].name + "</li>";
// }

// datePlaceholder.innerHTML += newList;
