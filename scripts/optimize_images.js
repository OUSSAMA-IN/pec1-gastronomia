import sharp from "sharp";

const sizes = [
  { name: "600", width: 600 },
  { name: "900", width: 900 },
  { name: "1700", width: 1700 }
];

const imagenes = [
  // ====== LO QUE YA TENÍAS ======
  { input: "./src/assets/img/tajine1.webp", outputName: "tajine1" },
  { input: "./src/assets/img/tajine2.jpg", outputName: "tajine2" },
  { input: "./src/assets/img/tajine3.jpg", outputName: "tajine3" },

  // ====== NUEVO (categorías) ======
  { input: "./src/assets/img/pastela.jpg", outputName: "pastela" },
  { input: "./src/assets/img/cuscus.webp", outputName: "cuscus" },

  { input: "./src/assets/img/pizza.jpeg", outputName: "pizza" },
  { input: "./src/assets/img/pasta_italiana.jpg", outputName: "pasta_italiana" },
  { input: "./src/assets/img/lasana.jpeg", outputName: "lasana" },

  { input: "./src/assets/img/tarta.jpeg", outputName: "tarta" },
  { input: "./src/assets/img/articulo3.jpeg", outputName: "articulo3" },
  { input: "./src/assets/img/pastel.jpg", outputName: "pastel" }
];

async function generarImagenes() {
  for (const imagen of imagenes) {
    for (const size of sizes) {
      await sharp(imagen.input)
        .resize(size.width)
        .webp({ quality: 80 })
        .toFile(`./src/assets/img/${imagen.outputName}-${size.name}.webp`);

      console.log(`✔ ${imagen.outputName}-${size.name}.webp creada`);
    }
  }
}

generarImagenes();