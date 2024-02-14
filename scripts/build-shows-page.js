console.log("Hello world");

const entries = [{
    'date': 'Mon Sept 09 2024'
    }, {
    'date': 'Tue Sept 17 2024'
    }, {
    'date': 'Sat Oct 12 2024'
    }, {
    'date': 'Sat Nov 16 2024'
    }, {
    'date': 'Fri Nov 29 2024'
    }, {
    'date': 'Wed Dec 18 2024'
    },  

}];

const datePlaceholder = document.getElementById('shows__date');
const newList ="";

for (i = 0; i < entries.length; i++) {
    newList += '<li>' + entries[i].name + '</li>';
}

datePlaceholder.innerHTML += newList;
