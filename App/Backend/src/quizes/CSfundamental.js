 const CSfundamental_questions = [
    {
      question: "What is the primary function of an operating system?",
      answers: [
        { text: "To perform arithmetic calculations", correct: false },
        { text: "To manage hardware and software resources", correct: true },
        { text: "To edit images", correct: false },
        { text: "To design websites", correct: false },
      ],
    },
    {
      question: "Which of the following data structures follows the Last In, First Out (LIFO) principle?",
      answers: [
        { text: "Queue", correct: false },
        { text: "Array", correct: false },
        { text: "Stack", correct: true },
        { text: "Linked List", correct: false },
      ],
    },
    {
      question: "Which of these is a type of system call used for process control?",
      answers: [
        { text: "fork()", correct: true },
        { text: "malloc()", correct: false },
        { text: "printf()", correct: false },
        { text: "strcpy()", correct: false },
      ],
    },
    {
      question: "Which of the following is not a programming paradigm?",
      answers: [
        { text: "Object-Oriented", correct: false },
        { text: "Procedural", correct: false },
        { text: "Recursive", correct: true },
        { text: "Functional", correct: false },
      ],
    },
    {
      question: "What does a process control block (PCB) store?",
      answers: [
        { text: "Process ID, state, and registers", correct: true },
        { text: "Only the process ID", correct: false },
        { text: "Only the program counter", correct: false },
        { text: "Memory mapping information", correct: false },
      ],
    },
    {
      question: "What is the difference between a mutex and a semaphore?",
      answers: [
        { text: "A mutex is for multiple resources, semaphore for one", correct: false },
        { text: "A semaphore allows multiple signals, mutex does not", correct: true },
        { text: "Mutex and semaphore are identical", correct: false },
        { text: "Mutex is used in scheduling; semaphore is not", correct: false },
      ],
    },
    {
      question: "Which protocol is responsible for reliable data transfer in the transport layer?",
      answers: [
        { text: "HTTP", correct: false },
        { text: "TCP", correct: true },
        { text: "UDP", correct: false },
        { text: "IP", correct: false },
      ],
    },
    {
      question: "What is the purpose of the ARP protocol?",
      answers: [
        { text: "To map IP addresses to MAC addresses", correct: true },
        { text: "To map domain names to IP addresses", correct: false },
        { text: "To establish TCP connections", correct: false },
        { text: "To route packets across networks", correct: false },
      ],
    },
    {
      question: "What is the ACID property in databases?",
      answers: [
        { text: "Atomicity, Consistency, Isolation, Durability", correct: true },
        { text: "Availability, Consistency, Integrity, Durability", correct: false },
        { text: "Atomicity, Clustering, Indexing, Durability", correct: false },
        { text: "Atomicity, Caching, Isolation, Durability", correct: false },
      ],
    },
    {
      question: "What is a deadlock?",
      answers: [
        { text: "A situation where two processes use the same resource", correct: false },
        { text: "A state where processes are blocked indefinitely", correct: true },
        { text: "A state where all processes run simultaneously", correct: false },
        { text: "A software crash caused by memory leaks", correct: false },
      ],
    },
    {
      question: "What is normalization in databases?",
      answers: [
        { text: "Organizing data to reduce redundancy", correct: true },
        { text: "Converting data into machine language", correct: false },
        { text: "Organizing data into files", correct: false },
        { text: "Converting data into SQL queries", correct: false },
      ],
    },
    {
      question: "Which of the following is a non-preemptive CPU scheduling algorithm?",
      answers: [
        { text: "Shortest Job Next (SJN)", correct: true },
        { text: "Round Robin", correct: false },
        { text: "Priority Scheduling", correct: false },
        { text: "Multilevel Queue", correct: false },
      ],
    },
    {
      question: "What does DNS stand for?",
      answers: [
        { text: "Data Network System", correct: false },
        { text: "Domain Name System", correct: true },
        { text: "Distributed Node Service", correct: false },
        { text: "Data Node Synchronization", correct: false },
      ],
    },
    {
      question: "Which sorting algorithm uses a divide-and-conquer approach?",
      answers: [
        { text: "Bubble Sort", correct: false },
        { text: "Quick Sort", correct: true },
        { text: "Selection Sort", correct: false },
        { text: "Insertion Sort", correct: false },
      ],
    },
    {
      question: "What is the complexity of a binary search?",
      answers: [
        { text: "O(n)", correct: false },
        { text: "O(log n)", correct: true },
        { text: "O(n log n)", correct: false },
        { text: "O(1)", correct: false },
      ],
    },
    {
      question: "What is a critical section in concurrent programming?",
      answers: [
        { text: "A section of code that must execute atomically", correct: true },
        { text: "A section that handles errors", correct: false },
        { text: "A loop with no exit", correct: false },
        { text: "A section that allocates memory", correct: false },
      ],
    },
    {
      question: "Which of the following layers ensures data encryption in the OSI model?",
      answers: [
        { text: "Transport Layer", correct: false },
        { text: "Application Layer", correct: false },
        { text: "Presentation Layer", correct: true },
        { text: "Network Layer", correct: false },
      ],
    },
    {
      question: "Which traversal technique is used in Depth First Search (DFS)?",
      answers: [
        { text: "Level Order", correct: false },
        { text: "Inorder", correct: false },
        { text: "Preorder", correct: true },
        { text: "Breadth Order", correct: false },
      ],
    },
    {
      question: "What is a dangling pointer in C?",
      answers: [
        { text: "A pointer pointing to a deleted memory location", correct: true },
        { text: "A pointer with a NULL value", correct: false },
        { text: "A pointer that points to the stack", correct: false },
        { text: "A pointer to uninitialized memory", correct: false },
      ],
    },
    {
      question: "What is the purpose of an index in a database?",
      answers: [
        { text: "To ensure ACID properties", correct: false },
        { text: "To speed up data retrieval", correct: true },
        { text: "To store metadata about tables", correct: false },
        { text: "To normalize data", correct: false },
      ],
    },
  ];
  
  export default CSfundamental_questions