# CBT Application

This project is a Computer-Based Test (CBT) application that renders a series of questions and allows users to select answers. The application is built using React and provides a simple interface for taking tests.

## Project Structure

```
cbt-app
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── App.js              # Main application component
│   ├── cbt.js              # Contains questions and answers
│   ├── components
│   │   ├── Question.js     # Component for displaying a single question
│   │   └── QuestionList.js  # Component for displaying a list of questions
│   └── styles
│       └── App.css         # CSS styles for the application
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd cbt-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- The application will display a series of questions.
- Users can select their answers by clicking on the options.
- The application can be extended to include features such as score calculation and result display.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.