const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/calculate', (req, res) => {
    const { num1, num2, operator } = req.body;
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      default:
        result = 'Invalid operator';
    }
    res.render('result', { result });
});
  
app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});