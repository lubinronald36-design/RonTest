<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz</title>
    <style>
        /* Add some basic styling */
        body {
            font-family: Arial, sans-serif;
        }
        #questions {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h1>Quiz</h1>
    <div id="questions"></div>
    <div id="timer"></div>
    <div id="score">
        <p>Correct: <span id="correct">0</span></p>
        <p>Incorrect: <span id="incorrect">0</span></p>
    </div>
    <button id="start-btn">Start Quiz</button>
    <button id="restart-btn" style="display: none;">Take Again</button>
    <button id="exit-btn" style="display: none;">Exit</button>

    <script src="script.js"></script>
</body>
</html>
