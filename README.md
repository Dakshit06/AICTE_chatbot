# AICTE Chatbot 🤖

A intelligent chatbot application designed to answer questions about AICTE (All India Council for Technical Education) using Natural Language Processing and Naive Bayes classification.

![AICTE Logo](Frontend/static/css/AICTE.png)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Training Data](#training-data)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

The AICTE Chatbot is a web-based conversational AI that provides information about AICTE, technical education, and related topics. It uses machine learning algorithms to understand user queries and provide relevant responses based on pre-trained data.

## ✨ Features

- **Intelligent Response System**: Uses Naive Bayes classifier for natural language understanding
- **Real-time Chat Interface**: Interactive web-based chat UI
- **CORS Enabled**: Cross-origin resource sharing for seamless frontend-backend communication
- **Responsive Design**: Mobile-friendly chat interface
- **Training Data Persistence**: Saves trained model for faster subsequent responses
- **Natural Language Processing**: Powered by Natural.js library

## 🛠 Technology Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **Natural.js**: Natural language processing library
- **Bayes Classifier**: Machine learning algorithm for text classification

### Frontend
- **HTML5**: Markup language
- **CSS3**: Styling and responsive design
- **JavaScript**: Client-side functionality
- **jQuery**: DOM manipulation and AJAX requests
- **Font Awesome**: Icons and visual elements

### Machine Learning
- **Naive Bayes Classifier**: Text classification algorithm
- **Natural Language Processing**: Text preprocessing and analysis

## 📁 Project Structure

```
AICTE Chatbot/
├── Backend/
│   ├── index.js              # Main server file
│   ├── data.json             # Training data for the chatbot
│   ├── package.json          # Node.js dependencies
│   ├── package-lock.json     # Dependency lock file
│   ├── savedata.json         # Persisted trained model
│   └── node_modules/         # Dependencies
├── Frontend/
│   ├── index.html            # Main HTML file
│   └── static/
│       ├── css/
│       │   ├── chat.css      # Chat interface styles
│       │   ├── home.css      # Home page styles
│       │   └── AICTE.png     # AICTE logo
│       └── nodejs/
│           └── chat.js       # Client-side JavaScript
├── savedata.json             # Root level model persistence
└── README.md                 # Project documentation
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Chatbot final project"
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Required Packages**
   The following packages will be installed automatically:
   - express
   - natural
   - bayes
   - classifier
   - init
   - naive

## 🎮 Usage

### Starting the Server

1. **Navigate to Backend directory**
   ```bash
   cd Backend
   ```

2. **Start the server**
   ```bash
   node index.js
   ```

3. **Server will start on port 3000**
   ```
   server start on port 3000
   ```

### Accessing the Application

1. **Open the Frontend**
   - Navigate to the `Frontend` folder
   - Open `index.html` in your web browser
   - Or serve it using a local web server

2. **Using the Chatbot**
   - Click on the "AICTE Chatbot" button to open the chat interface
   - Type your questions about AICTE
   - Press Enter or click Send to get responses

## 🔌 API Endpoints

### GET `/getresonse`

Processes user input and returns chatbot response.

**Parameters:**
- `data` (query parameter): User's question/message

**Example Request:**
```
GET http://localhost:3000/getresonse?data=what is aicte full form
```

**Example Response:**
```json
{
  "data": "All India Council for Technical Education"
}
```

### GET `/`

Health check endpoint.

**Response:**
```
Hello World!
```

## 📊 Training Data

The chatbot is trained on a dataset containing questions and answers about AICTE. The training data is stored in `Backend/data.json` with the following structure:

```json
[
  {
    "text": "what is aicte full form",
    "category": "All India Council for Technical Education"
  },
  {
    "text": "hi",
    "category": "hi there how are you"
  }
]
```

### Adding New Training Data

To expand the chatbot's knowledge:

1. Edit `Backend/data.json`
2. Add new objects with `text` (question) and `category` (response)
3. Restart the server to retrain the model

## 🖼 Screenshots

### Chat Interface
*The chatbot features a collapsible chat window with a clean, modern interface*

### Response Example
*Users can ask questions about AICTE and receive instant responses*

## 🔧 Configuration

### CORS Settings
The backend is configured to allow cross-origin requests from any domain:

```javascript
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
```

### Model Persistence
The trained Naive Bayes model is automatically saved to `savedata.json` for faster loading on subsequent requests.

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📝 Future Enhancements

- [ ] Add more comprehensive AICTE-related questions and answers
- [ ] Implement intent recognition for better conversation flow
- [ ] Add voice input/output capabilities
- [ ] Create an admin panel for managing training data
- [ ] Implement conversation history
- [ ] Add emoji support and rich text responses
- [ ] Deploy to cloud platforms (Heroku, AWS, etc.)

## 🐛 Troubleshooting

### Common Issues

1. **Server not starting**
   - Ensure all dependencies are installed: `npm install`
   - Check if port 3000 is available

2. **CORS errors**
   - Make sure the backend server is running
   - Check that the frontend is making requests to the correct URL

3. **No responses from chatbot**
   - Verify that `data.json` contains training data
   - Check server console for error messages

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

## 👥 Authors

- **Your Name** - Initial work

## 🙏 Acknowledgments

- AICTE for the inspiration
- Natural.js community for the NLP library
- Express.js team for the web framework
- All contributors and supporters

---

**Note**: This chatbot is designed for educational purposes and to provide basic information about AICTE. For official information, please visit the [AICTE official website](https://www.aicte-india.org/).
