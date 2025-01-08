<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiply and Divide</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        input, button {
            margin: 10px;
            padding: 10px;
            font-size: 16px;
        }
        #result {
            margin-top: 20px;
            font-size: 18px;
            color: blue;
        }
    </style>
</head>
<body>
    <h1>Multiplication and Division Calculator</h1>
    <div>
        <label for="num1">Number 1:</label>
        <input type="number" id="num1" placeholder="Enter first number">
    </div>
    <div>
        <label for="num2">Number 2:</label>
        <input type="number" id="num2" placeholder="Enter second number">
    </div>
    <div>
        <button onclick="calculate('multiply')">Multiply</button>
        <button onclick="calculate('divide')">Divide</button>
    </div>
    <div id="result"></div>

    <script>
        function calculate(operation) {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            let result = "";

            if (isNaN(num1) || isNaN(num2)) {
                result = "Please enter valid numbers.";
            } else if (operation === "multiply") {
                result = `Result: ${num1 * num2}`;
            } else if (operation === "divide") {
                result = num2 === 0 ? "Error: Division by zero is not allowed." : `Result: ${num1 / num2}`;
            }

            document.getElementById("result").innerText = result;
        }
    </script>
</body>
</html>
