const socket = io('http://localhost:8000');

const form = document.getElementById('send-form');
const messageinput = document.getElementById('messageinp');
const messagecontainer = document.querySelector(".container");

const append = (message, position) => {
    const messageelement = document.createElement('div');
    messageelement.innerText = message;
    messageelement.classList.add('message');
    messageelement.classList.add('position');
    messagecontainer.append(messageelement);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageinput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageinput = ''
})

const nam = prompt("Enter your UserID to join");
const email = prompt("Enter your Email Id");
socket.emit('new-user-joined', nam)

socket.on('user-joined', data => {
    append(`${nam} joined the chat`, 'right');
})
socket.on('receive', data => {
    append(`${data.nam}:${data.message}`, 'left');
})
socket.on('left', nam => {
    append(`${nam} left the chat`, 'left');
})