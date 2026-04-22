// Chatbot Functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');

    // Toggle chatbot window
    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.classList.toggle('hidden');
    });

    // Close chatbot
    chatbotClose.addEventListener('click', function() {
        chatbotWindow.classList.add('hidden');
    });

    // Send message function
    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage === '') return;

        // Add user message to chat
        addMessage(userMessage, 'user');
        chatbotInput.value = '';

        // Generate bot response
        setTimeout(() => {
            const botResponse = generateBotResponse(userMessage);
            addMessage(botResponse, 'bot');
        }, 500);
    }

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`;

        const messageBubble = document.createElement('div');
        messageBubble.className = `${
            sender === 'user'
                ? 'bg-[#3B82F6] text-white'
                : 'bg-[#1E293B] text-[#E2E8F0]'
        } rounded-lg px-4 py-2 max-w-xs text-sm break-words`;
        messageBubble.textContent = text;

        messageDiv.appendChild(messageBubble);
        chatbotMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Generate bot response based on user input
    function generateBotResponse(userMessage) {
        const message = userMessage.toLowerCase();

        // Skills responses
        if (
            message.includes('skill') ||
            message.includes('what can you do') ||
            message.includes('expertise') ||
            message.includes('technology')
        ) {
            return "I specialize in PHP, JavaScript, HTML5, CSS3, and MySQL. I also work with Stripe API, PHPMailer, and Tailwind CSS. Always learning new technologies! 🚀";
        }

        // Projects responses
        if (
            message.includes('project') ||
            message.includes('portfolio') ||
            message.includes('work') ||
            message.includes('experience')
        ) {
            return "I've worked on amazing projects like a full-stack cleaning services website with Stripe payments and a school scheduling system. Check out the projects section for more details! 💼";
        }

        // Contact responses
        if (
            message.includes('contact') ||
            message.includes('email') ||
            message.includes('how to reach') ||
            message.includes('get in touch')
        ) {
            return "You can reach me through the contact form below, or connect with me on GitHub and LinkedIn. I'd love to hear from you! 📧";
        }

        // About responses
        if (
            message.includes('about') ||
            message.includes('who are you') ||
            message.includes('tell me about') ||
            message.includes('background')
        ) {
            return "I'm a Junior Full Stack Developer passionate about creating responsive, user-friendly web applications. I love problem-solving and building modern solutions! 👨‍💻";
        }

        // Greeting responses
        if (
            message.includes('hi') ||
            message.includes('hello') ||
            message.includes('hey') ||
            message.includes('greetings')
        ) {
            return "Hey there! 👋 Nice to meet you! What would you like to know? You can ask me about my skills, projects, or how to contact me.";
        }

        // Help response
        if (message.includes('help') || message.includes('what can i ask')) {
            return "You can ask me about:\n• My skills and expertise\n• My projects and work\n• How to contact me\n• Information about my background\n\nJust type your question!";
        }

        // Default response
        return "That's an interesting question! Feel free to check out my projects, or use the contact form to reach out directly. How else can I help? 😊";
    }

    // Send message on button click
    chatbotSend.addEventListener('click', sendMessage);

    // Send message on Enter key
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Focus on input when window opens
    chatbotToggle.addEventListener('click', function() {
        if (!chatbotWindow.classList.contains('hidden')) {
            setTimeout(() => {
                chatbotInput.focus();
            }, 100);
        }
    });
});
