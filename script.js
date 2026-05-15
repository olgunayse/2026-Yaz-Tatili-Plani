function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth"
  });
}

function showDay(dayNumber) {
  const dayContent = document.getElementById("day-content");

  const days = {
    1: `
      <h3>1. Gün</h3>
      <p><strong>Kahvaltı:</strong> Evden çıkmadan kahvaltı / yolda atıştırmalık</p>
      <p><strong>Öğle:</strong> Sandviç, poğaça / dinner rolls, kek, atıştırmalıklar, içecekler</p>
      <p><strong>Akşam:</strong> Evden getirilenlerden devam</p>
    `,
    2: `
      <h3>2. Gün</h3>
      <p><strong>Kahvaltı:</strong> Otel kahvaltısı</p>
      <p><strong>Öğle:</strong> Sandviç, ekmek, krem peynir, salatalık, domates, üzüm, cips, limonata</p>
      <p><strong>Akşam:</strong> Olive Garden tarzı Alfredo makarna, fettuccine, alfredo sos, brokoli, salata</p>
    `,
    3: `
      <h3>3. Gün</h3>
      <p><strong>Kahvaltı:</strong> Otel kahvaltısı</p>
      <p><strong>Öğle:</strong> Cowboy caviar, siyah fasulye, börülce, mısır, domates, kırmızı soğan, biber, lime, tortilla cipsi</p>
      <p><strong>Akşam:</strong> Pilav, sebze yemeği, yoğurt / cacık</p>
      <p><strong>Atıştırmalık:</strong> Cips ve meyve</p>
    `,
    4: `
      <h3>4. Gün</h3>
      <p><strong>Kahvaltı:</strong> Otel kahvaltısı</p>
      <p><strong>Öğle:</strong> Makarna salatası, küçük makarna, yoğurt, mayonez, garnitür, turşu, mısır</p>
      <p><strong>Akşam:</strong> Paket mantı, sarımsaklı yoğurt, tereyağlı salçalı sos, nane, pul biber, salatalık domates salatası</p>
    `
  };

  dayContent.innerHTML = days[dayNumber];
}

function calculateBudget() {
  const hotel = Number(document.getElementById("hotelCost").value);
  const gas = Number(document.getElementById("gasCost").value);
  const food = Number(document.getElementById("foodCost").value);
  const people = Number(document.getElementById("peopleCount").value);

  const total = hotel + gas + food;
  const perPerson = total / people;

  document.getElementById("budgetResult").textContent =
    "Toplam tahmini ücret: $" + total.toFixed(2) + " | Kişi başı: $" + perPerson.toFixed(2);
}

function calculateGas() {
  const miles = Number(document.getElementById("miles").value);
  const mpg = Number(document.getElementById("mpg").value);
  const price = Number(document.getElementById("gasPrice").value);

  const gallonsNeeded = miles / mpg;
  const totalGas = gallonsNeeded * price;

  document.getElementById("gasResult").textContent =
    "Tahmini benzin masrafı: $" + totalGas.toFixed(2);
}

function updateProgress() {
  const checkboxes = document.querySelectorAll(".packing-list input");
  let checked = 0;

  checkboxes.forEach(function(item) {
    if (item.checked) {
      checked++;
    }
  });

  const percent = Math.round((checked / checkboxes.length) * 100);

  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("progressText").textContent = "Hazırlık oranı: " + percent + "%";
}

function addNote() {
  const input = document.getElementById("noteInput");
  const list = document.getElementById("notesList");

  if (input.value.trim() !== "") {
    const newNote = document.createElement("li");
    newNote.textContent = input.value;
    list.appendChild(newNote);
    input.value = "";
  }
}