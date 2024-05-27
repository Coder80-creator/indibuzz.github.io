// Demo user accounts
var users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" }
];

// Populate user list
var userList = document.getElementById('user-list');
users.forEach(function(user) {
    var li = document.createElement('li');
    li.textContent = user.name;
    li.setAttribute('data-id', user.id);
    li.onclick = function() {
        selectUser(user.id);
    };
    userList.appendChild(li);
});

// Function to select a user
function selectUser(userId) {
    // Remove active class from other users
    var userItems = document.querySelectorAll('#user-list li');
    userItems.forEach(function(item) {
        item.classList.remove('active');
    });
    // Add active class to selected user
    var selectedUser = document.querySelector('#user-list li[data-id="' + userId + '"]');
    selectedUser.classList.add('active');
}

// Function to send a message
function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value.trim();
    
    if (message !== '') {
        var chatMessages = document.getElementById('chat-messages');
        var messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
        messageInput.value = ''; // Clear input field
    }
}
