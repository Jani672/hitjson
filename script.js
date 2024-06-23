// JSON data embedded directly in the script as a variable
const personData = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        age: 32,
        address: {
            street: "123 Main Street",
            city: "Anytown",
            country: "USA"
        },
        hobby: "Photography",
        genre: "Action"
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        age: 28,
        address: {
            street: "456 Elm Avenue",
            city: "Smalltown",
            country: "Canada"
        },
        hobby: "Reading",
        genre: "Drama"
    },
    {
        name: "David Brown",
        email: "david.brown@example.com",
        age: 35,
        address: {
            street: "789 Oak Drive",
            city: "Villageton",
            country: "UK"
        },
        hobby: "Cooking",
        genre: "Comedy"
    },
    {
        name: "Emily White",
        email: "emily.white@example.com",
        age: 30,
        address: {
            street: "101 Pine Road",
            city: "Suburbia",
            country: "Australia"
        },
        hobby: "Painting",
        genre: "Romance"
    },
    {
        name: "Michael Green",
        email: "michael.green@example.com",
        age: 42,
        address: {
            street: "222 Cedar Lane",
            city: "Metroville",
            country: "USA"
        },
        hobby: "Gardening",
        genre: "Thriller"
    }
];

// Function to display the person's details
function displayPerson() {
    const nameInput = document.getElementById('nameInput').value.trim().toLowerCase();
    const cardContainer = document.getElementById('cardContainer');
    const resultDiv = document.getElementById('result');
    
    // Clear previous results
    cardContainer.innerHTML = '';
    resultDiv.style.display = 'none';

    // Find matching persons
    const filteredPersons = personData.filter(person => person.name.toLowerCase().includes(nameInput));

    if (filteredPersons.length > 0) {
        filteredPersons.forEach(person => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h2>${person.name}</h2>
                <p><strong>Email:</strong> ${person.email}</p>
                <p><strong>Age:</strong> ${person.age}</p>
                <p><strong>Address:</strong> ${person.address.street}, ${person.address.city}, ${person.address.country}</p>
                <p><strong>Hobby:</strong> ${person.hobby}</p>
                <p><strong>Genre:</strong> ${person.genre}</p>
            `;
            cardContainer.appendChild(card);
        });
    } else {
        resultDiv.className = 'alert alert-danger';
        resultDiv.innerHTML = 'No person found with that name.';
        resultDiv.style.display = 'block';
    }
}
