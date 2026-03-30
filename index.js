const container = document.createElement("div");
container.className = "recipe-nutrition-container";

container.innerHTML = `
  <h3 class="recipe-nutrition-h3">Nutrition</h3>
  <p class="recipe-nutrition-p">
    The table below shows nutritional values per serving without the additional fillings.
  </p>
  <div class="recipe-table">
    <table>
      <tr><td class="name">Calories</td><td class="value">277kcal</td></tr>
      <tr><td class="name">Carbs</td><td class="value">0g</td></tr>
      <tr><td class="name">Protein</td><td class="value">20g</td></tr>
      <tr><td class="name">Fat</td><td class="value">22g</td></tr>
    </table>
  </div>
`;

document.getElementById("nutrition").appendChild(container);