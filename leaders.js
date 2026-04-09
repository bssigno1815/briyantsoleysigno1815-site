const leaders = [
  { name: "Ygens", file: "ygens.jpeg" },
  { name: "Ti Rat 2", file: "ti-rat-2.jpeg" },
  { name: "Montina", file: "montina.jpeg" },
  { name: "Prez Papit", file: "prez-papit.jpg" },
  { name: "Fanfan", file: "fanfan.jpeg" },
  { name: "Fifi", file: "fifi.jpeg" },
  { name: "Elson", file: "elson.jpeg" },
  { name: "Ti Papouch", file: "ti-papouche.jpeg" },
  { name: "Ti Marasa", file: "ti-marasa.jpeg" },
  { name: "Ti La France", file: "ti-la-france.jpeg" },
  { name: "Roro Lajan", file: "roro-lajan.jpeg" },
  { name: "Jeff Colin", file: "jeff.colin.jpeg" },
  { name: "Jij Mayan", file: "jij-mayan.jpeg" },
  { name: "Majis Junior", file: "majis-junior.jpeg" },
  { name: "Magistra Mauclair", file: "magistra-mauclair.jpeg" },
  { name: "Mambo Fifi", file: "mambo-fifi.jpeg" },
  { name: "Maximax60", file: "maximax60.jpeg" },
  { name: "Landry", file: "landry.jpeg" },
  { name: "Prez Aly", file: "prez-aly.jpeg" },
  { name: "Don Dodo", file: "don-dodo.png" },
  { name: "Macu & MV", file: "macu-&-mv.png" },
  { name: "Anperè", file: "anperè.jpg" },
  { name: "Sindy", file: "sindy.png" },
  { name: "Bouboul", file: "bouboul.png" },
  { name: "Madina", file: "madina.png" },
  { name: "Doodly", file: "doodly.jpeg" },
  { name: "Cange 2", file: "cange2.jpg" },
  { name: "Cange 3", file: "cange3.jpg" },
  { name: "Bawon An", file: "bawon-an.jpg" },
  { name: "Roro 2", file: "roro2.jpg" },
  { name: "Roro 23", file: "roro23.jpg" },
  { name: "Cols 2", file: "cols2.jpg" },
  { name: "Doudou", file: "doudou.jpg" },
  { name: "Tania", file: "tania.jpg" },
  { name: "Coucou 23", file: "coucou23.jpg" }
];

function renderSlideshow() {
  const container = document.getElementById("slideshow");

  leaders.forEach((leader) => {
    const slide = document.createElement("div");
    slide.className = "slide fade";
    slide.innerHTML = `
      <img src="assets/leaders/${leader.file}" alt="${leader.name}">
      <div class="caption">${leader.name}</div>
    `;
    container.appendChild(slide);
  });

  startSlideshow();
}

let slideIndex = 0;

function startSlideshow() {
  const slides = document.getElementsByClassName("slide");
  if (!slides.length) return;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";

  setTimeout(startSlideshow, 3000);
}
