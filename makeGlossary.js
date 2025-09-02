<script>
function makeGlossary(containerId, items) {
  const container = document.getElementById(containerId);

  // build the HTML
  let html = `
  <div class="glossary columns">
    <div class="column" style="width:30%">
      <ul class="terms">
  `;

  items.forEach((item, i) => {
    html += `<li ${i===0 ? 'class="active"' : ''} onclick="showDef('${containerId}-def${i}', this)">
      ${item.term}</li>`;
  });

  html += `
      </ul>
    </div>
    <div class="column" style="width:70%">
      <div class="definitions">
  `;

  items.forEach((item, i) => {
    html += `<div id="${containerId}-def${i}" class="definition"
      style="display:${i===0 ? 'block' : 'none'};">${item.definition}</div>`;
  });

  html += `
      </div>
    </div>
  </div>
  `;

  container.innerHTML = html;
}

function showDef(id, el) {
  const container = el.closest(".glossary");

  // hide all definitions in this glossary
  container.querySelectorAll('.definition')
    .forEach(def => def.style.display = 'none');

  // show selected one
  container.querySelector('#' + id).style.display = 'block';

  // remove active from all terms
  container.querySelectorAll('.terms li')
    .forEach(li => li.classList.remove('active'));

  // add active to clicked one
  el.classList.add('active');
}
</script>

<style>
  .glossary .terms li {
    cursor: pointer;
    padding: 4px;
  }
  .glossary .terms li.active {
    font-weight: bold;
    color: #007acc;
  }
</style>
