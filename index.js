const container = document.createElement("div");
container.className = "recipe-nutrition-container";

container.innerHTML = `
  <h2 class="recipe-nutrition-h2">Nutrition</h2>
  <p class="recipe-nutrition-p">
    The table below shows nutritional values per serving without the additional fillings.
  </p>
  <div class="recipe-table">
    <table>
      <caption>Nutrition facts per serving</caption>
      <tr>
        <th scope="row" class="name">Calories</th>
        <td class="value">277 kcal</td>
      </tr>
      <tr>
        <th scope="row" class="name">Carbs</th>
        <td class="value">0 g</td>
      </tr>
      <tr>
        <th scope="row" class="name">Protein</th>
        <td class="value">20 g</td>
      </tr>
      <tr>
        <th scope="row" class="name">Fat</th>
        <td class="value">22 g</td>
      </tr>
    </table>
  </div>
`;

document.getElementById("nutrition").appendChild(container);