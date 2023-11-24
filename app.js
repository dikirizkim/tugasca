const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      nama: "mang dik",
      kelas: "TT-45-07",
      kota: "garut",
      kecematan: "sukaregang",
      desa: "suci",
    },
    {
      id: 2,
      nama: "mang dik",
      kelas: "TT-45-07",
      kota: "garut",
      kecematan: "sukaregang",
      desa: "suci",
    },
    {
      id: 3,
      nama: "mang dik",
      kelas: "TT-45-07",
      kota: "garut",
      kecematan: "sukaregang",
      desa: "suci",
    },
    {
      id: 4,
      nama: "mang dik",
      kelas: "TT-45-07",
      kota: "garut",
      kecematan: "sukaregang",
      desa: "suci",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
