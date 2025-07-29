const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/bfhl", (req, res) => {
  const input = req.body.data || [];

  const email = "john@xyz.com";
  const roll_number = "ABCD123";
  const full_name = "john_doe_17091999";
  const user_id = full_name.toLowerCase();

  const odd_numbers = [];
  const even_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;
  let concatAlpha = [];

  input.forEach((el) => {
    const str = el.toString();

    if (!isNaN(str)) {
      const num = parseInt(str);
      if (!isNaN(num)) {
        sum += num;
        if (num % 2 === 0) even_numbers.push(str);
        else odd_numbers.push(str);
        return;
      }
    }

    if (/^[a-zA-Z]+$/.test(str)) {
      alphabets.push(str.toUpperCase());
      concatAlpha.push(str);
    } else {
      special_characters.push(str);
    }
  });

  const concat_string = concatAlpha
    .join("")
    .split("")
    .reverse()
    .map((char, idx) => (idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join("");

  res.status(200).json({
    is_success: true,
    user_id,
    email,
    roll_number,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
