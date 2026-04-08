const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "public", "login.html")));
app.get("/book", (req, res) => res.sendFile(path.join(__dirname, "public", "book.html")));
app.get("/join", (req, res) => res.sendFile(path.join(__dirname, "public", "join.html")));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
