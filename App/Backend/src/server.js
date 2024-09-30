const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
// const questions = require('./quizes/quiz.js');

const app = express();
const server = http.createServer(app);


app.use(cors());

const io = socketio(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 5000;

const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
        { text: "London", correct: false },
        { text: "Madrid", correct: false },
      ],
    },
    {
      question: "What is the chemical symbol for water?",
      answers: [
        { text: "H2O", correct: true },
        { text: "CO2", correct: false },
        { text: "O2", correct: false },
        { text: "NaCl", correct: false },
      ],
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: [
        { text: "Mercury", correct: false },
        { text: "Venus", correct: false },
        { text: "Mars", correct: false },
        { text: "Jupiter", correct: true },
      ],
    },
    {
      question: "What is the chemical symbol for iron?",
      answers: [
        { text: "Fe", correct: true },
        { text: "Ag", correct: false },
        { text: "Au", correct: false },
        { text: "Cu", correct: false },
      ],
    },
    {
      question: "Which famous scientist is known for the theory of evolution?",
      answers: [
        { text: "Galileo Galilei", correct: false },
        { text: "Isaac Newton", correct: false },
        { text: "Charles Darwin", correct: true },
        { text: "Marie Curie", correct: false },
      ],
    },
    {
      question: "In which country was the game of chess invented?",
      answers: [
        { text: "China", correct: false },
        { text: "India", correct: true },
        { text: "Greece", correct: false },
        { text: "Egypt", correct: false },
      ],
    },
  
    {
      question: "Which gas is responsible for the Earth's ozone layer?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Carbon Dioxide", correct: false },
        { text: "Nitrogen", correct: false },
        { text: "Ozone", correct: true },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question: "Which gas do plants use for photosynthesis?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Nitrogen", correct: false },
        { text: "Helium", correct: false },
      ],
    },
  
    {
      question: "What is the capital of Japan?",
      answers: [
        { text: "Beijing", correct: false },
        { text: "Tokyo", correct: true },
        { text: "Seoul", correct: false },
        { text: "Bangkok", correct: false },
      ],
    },
    {
      question:
        "Which famous scientist developed the theory of general relativity?",
      answers: [
        { text: "Isaac Newton", correct: false },
        { text: "Albert Einstein", correct: true },
        { text: "Nikola Tesla", correct: false },
        { text: "Marie Curie", correct: false },
      ],
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      answers: [
        { text: "China", correct: false },
        { text: "Japan", correct: true },
        { text: "India", correct: false },
        { text: "Egypt", correct: false },
      ],
    },
  
    {
      question: "What is the chemical symbol for gold?",
      answers: [
        { text: "Ag", correct: false },
        { text: "Au", correct: true },
        { text: "Fe", correct: false },
        { text: "Hg", correct: false },
      ],
    },
    {
      question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
      answers: [
        { text: "Mars", correct: false },
        { text: "Venus", correct: true },
        { text: "Mercury", correct: false },
        { text: "Neptune", correct: false },
      ],
    },
  
    {
      question: "What is the smallest prime number?",
      answers: [
        { text: "1", correct: false },
        { text: "2", correct: true },
        { text: "3", correct: false },
        { text: "5", correct: false },
      ],
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      answers: [
        { text: "China", correct: false },
        { text: "South Korea", correct: false },
        { text: "Japan", correct: true },
        { text: "Thailand", correct: false },
      ],
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Arctic Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
      ],
    },
    {
      question: "Which element has the chemical symbol 'K'?",
      answers: [
        { text: "Krypton", correct: false },
        { text: "Potassium", correct: true },
        { text: "Kryptonite", correct: false },
        { text: "Kallium", correct: false },
      ],
    },
    {
      question: "What is the capital city of India?",
      answers: [
        { text: "Mumbai", correct: false },
        { text: "New Delhi", correct: true },
        { text: "Bangalore", correct: false },
        { text: "Kolkata", correct: false },
      ],
    },
  ];

let rooms = {};

// Connection established
io.on("connection", (socket) => {
    console.log('A user has connected');

    // Message from frontend 'JoinRoom'
    socket.on("joinRoom", (room, name) => {
        socket.join(room);

        // Initialize the room if it doesn't exist yet
        if (!rooms[room]) {
            rooms[room] = {
                players: [],
                CurrentQuestion: null,
                CorrectAnswer: null,
                questionTimeout: null,
                askNewQuestion: true
            };
        }

        rooms[room].players.push({ id: socket.id, name });

        // Broadcast message to everyone who has joined the room
        io.to(room).emit("message", `${name} has joined the room`);

        // Ask a new question if the room is ready
        if (rooms[room].askNewQuestion) {
            askNewQuestion(room);
        }
    });

    // Handle submitted answers from players
    socket.on("submitAnswer", (room, answerIndex) => {

        // Find the player who submitted the answer
        const currentPlayer = rooms[room].players.find(player => player.id === socket.id);

        // Check if the answer is correct
        if (currentPlayer) {
            const correctAnswer = rooms[room].CorrectAnswer;
            const isCorrect = correctAnswer !== null && correctAnswer === answerIndex;

            
            currentPlayer.score = isCorrect ? (currentPlayer.score || 0) + 1 : (currentPlayer.score || 0) - 1;

           
            clearTimeout(rooms[room].questionTimeout);

            // Send the result of the answer to the room
            io.to(room).emit("answerResult", {
                playerName: currentPlayer.name,
                isCorrect,
                correctAnswer,
                scores: rooms[room].players.map(player => ({
                    name: player.name,
                    score: player.score || 0,
                })),
            });

            
            const winningThreshold = 5;
            const winner = rooms[room].players.find(player => (player.score || 0) >= winningThreshold);

          
            if (winner) {
                io.to(room).emit("gameOver", { winner: winner.name });
                delete rooms[room]; 
            } else {
                
                askNewQuestion(room);
            }
        }
    });
});


function askNewQuestion(room) {

    // Handle the edge case if no player 
    if (rooms[room].players.length === 0) {
        clearTimeout(rooms[room].questionTimeout);
        delete rooms[room];
        return;
    }

    let RandomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[RandomIndex];

    // Store the current question in the room
    rooms[room].CurrentQuestion = question;

    // Find the index of the correct answer
    const correctAnswerIndex = question.answers.findIndex(answer => answer.correct === true);
    rooms[room].CorrectAnswer = correctAnswerIndex;

    
    rooms[room].askNewQuestion = false;

    // Send the new question and answers to the room
    io.to(room).emit("newQuestion", {
        question: question.question,
        answers: question.answers.map(answer => answer.text),
        timer: 10, // Set a 10-second timer for the question
    });

    // Set a timeout for the answer
    rooms[room].questionTimeout = setTimeout(() => {
        io.to(room).emit("answerResult", {
            playerName: "No One", // Default if no one answers
            isCorrect: false,
            correctAnswer: rooms[room].CorrectAnswer,
            scores: rooms[room].players.map(player => ({
                name: player.name,
                score: player.score || 0,
            })),
        });

        // Ask a new question after the timeout
        askNewQuestion(room);

    }, 10000);
}

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
