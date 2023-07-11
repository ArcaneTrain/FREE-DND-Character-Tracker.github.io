function exportCharacter() {
  var characterData = {
    characterName: document.getElementById("character-name").value,
    race: document.getElementById("race").value,
    class: document.getElementById("class").value,
    weapons: getWeaponEntries(),
    speed: document.getElementById("speed").value,
    level: document.getElementById("level").value,
    ac: document.getElementById("ac").value,
    background: document.getElementById("background").value,
    alignment: document.getElementById("alignment").value,
    xp: document.getElementById("xp").value,
    strength: document.getElementById("strength").value,
    dexterity: document.getElementById("dexterity").value,
    constitution: document.getElementById("constitution").value,
    intelligence: document.getElementById("intelligence").value,
    wisdom: document.getElementById("wisdom").value,
    charisma: document.getElementById("charisma").value,
    skills: document.getElementById("skills").value,
    proficiencyBonus: document.getElementById("proficiency-bonus").value,
    savingThrows: document.getElementById("saving-throws").value,
    hpCurrent: document.getElementById("hp-current").value,
    hpMax: document.getElementById("hp-max").value,
    initiative: document.getElementById("initiative").value,
    proficiencies: document.getElementById("proficiencies").value,
    equipment: document.getElementById("equipment").value,
    spells: document.getElementById("spells").value,
    featuresTraits: document.getElementById("features-traits").value,
    languages: document.getElementById("languages").value,
    backgroundDetails: document.getElementById("background-details").value,
    appearance: document.getElementById("appearance").value,
    personalityTraits: document.getElementById("personality-traits").value,
    bondsFlawsIdeals: document.getElementById("bonds-flaws-ideals").value,
    backstory: document.getElementById("backstory").value,
    currency: document.getElementById("currency").value,
    alliesOrganizations: document.getElementById("allies-organizations").value,
    notes: document.getElementById("notes").value
  };

  var jsonData = JSON.stringify(characterData);
  downloadData(jsonData, "character.json");
}

function importCharacter() {
  var fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".json";
  fileInput.addEventListener("change", handleFileSelect, false);
  fileInput.click();
}

function handleFileSelect(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var importedData = JSON.parse(e.target.result);
    populateCharacterSheet(importedData);
  };
  reader.readAsText(file);
}

function populateCharacterSheet(importedData) {
  document.getElementById("character-name").value = importedData.characterName;
  document.getElementById("race").value = importedData.race;
  document.getElementById("class").value = importedData.class;
  document.getElementById("speed").value = importedData.speed;
  document.getElementById("level").value = importedData.level;
  document.getElementById("ac").value = importedData.ac;
  document.getElementById("background").value = importedData.background;
  document.getElementById("alignment").value = importedData.alignment;
  document.getElementById("xp").value = importedData.xp;
  document.getElementById("strength").value = importedData.strength;
  document.getElementById("dexterity").value = importedData.dexterity;
  document.getElementById("constitution").value = importedData.constitution;
  document.getElementById("intelligence").value = importedData.intelligence;
  document.getElementById("wisdom").value = importedData.wisdom;
  document.getElementById("charisma").value = importedData.charisma;
  document.getElementById("skills").value = importedData.skills;
  document.getElementById("proficiency-bonus").value = importedData.proficiencyBonus;
  document.getElementById("saving-throws").value = importedData.savingThrows;
  document.getElementById("hp-current").value = importedData.hpCurrent;
  document.getElementById("hp-max").value = importedData.hpMax;
  document.getElementById("initiative").value = importedData.initiative;
  document.getElementById("proficiencies").value = importedData.proficiencies;
  document.getElementById("equipment").value = importedData.equipment;
  document.getElementById("spells").value = importedData.spells;
  document.getElementById("features-traits").value = importedData.featuresTraits;
  document.getElementById("languages").value = importedData.languages;
  document.getElementById("background-details").value = importedData.backgroundDetails;
  document.getElementById("appearance").value = importedData.appearance;
  document.getElementById("personality-traits").value = importedData.personalityTraits;
  document.getElementById("bonds-flaws-ideals").value = importedData.bondsFlawsIdeals;
  document.getElementById("backstory").value = importedData.backstory;
  document.getElementById("currency").value = importedData.currency;
  document.getElementById("allies-organizations").value = importedData.alliesOrganizations;
  document.getElementById("notes").value = importedData.notes;

  clearWeaponEntries();
  importedData.weapons.forEach(function (weapon) {
    addEntry(weapon);
  });
}


function getWeaponEntries() {
  var table = document.getElementById("weaponry-table");
  var weaponEntries = [];
  for (var i = 2; i < table.rows.length - 1; i++) {
    var weaponRow = table.rows[i];
    var weapon = {
      name: weaponRow.cells[0].querySelector("input").value,
      cost: weaponRow.cells[1].querySelector("input").value,
      weight: weaponRow.cells[2].querySelector("input").value,
      properties: weaponRow.cells[3].querySelector("input").value,
      damage: weaponRow.cells[4].querySelector("input").value,
      description: weaponRow.cells[5].querySelector("textarea").value,
      special: weaponRow.cells[6].querySelector("textarea").value,
      note: weaponRow.cells[7].querySelector("textarea").value,
    };
    weaponEntries.push(weapon);
  }
  return weaponEntries;
}

function addEntry(weapon = {}) {
  var table = document.getElementById("weaponry-table");
  var lastRowIndex = table.rows.length - 1;
  var newRow = table.insertRow(lastRowIndex);

  var weaponCell = newRow.insertCell();
  var damageCell = newRow.insertCell();
  var propertiesCell = newRow.insertCell();
  var costCell = newRow.insertCell();
  var weightCell = newRow.insertCell();
  var specialCell = newRow.insertCell();
  var descriptionCell = newRow.insertCell();
  var noteCell = newRow.insertCell();
  var removeCell = newRow.insertCell();

  var weaponInput = document.createElement("input");
  weaponInput.type = "text";
  weaponInput.placeholder = "Weapon";
  weaponInput.value = weapon.name || "";
  weaponCell.appendChild(weaponInput);

  var costInput = document.createElement("input");
  costInput.type = "text";
  costInput.placeholder = "Cost";
  costInput.value = weapon.cost || "";
  costCell.appendChild(costInput);

  var weightInput = document.createElement("input");
  weightInput.type = "text";
  weightInput.placeholder = "Weight";
  weightInput.value = weapon.weight || "";
  weightCell.appendChild(weightInput);

  var propertiesInput = document.createElement("input");
  propertiesInput.type = "text";
  propertiesInput.placeholder = "Properties";
  propertiesInput.value = weapon.properties || "";
  propertiesCell.appendChild(propertiesInput);

  var damageInput = document.createElement("input");
  damageInput.type = "text";
  damageInput.placeholder = "Damage";
  damageInput.value = weapon.damage || "";
  damageCell.appendChild(damageInput);

  var descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.placeholder = "Description";
  descriptionTextarea.value = weapon.description || "";
  descriptionCell.appendChild(descriptionTextarea);

  var specialTextarea = document.createElement("textarea");
  specialTextarea.placeholder = "Special";
  specialTextarea.value = weapon.special || "";
  specialCell.appendChild(specialTextarea);

  var noteTextarea = document.createElement("textarea");
  noteTextarea.placeholder = "Note";
  noteTextarea.value = weapon.note || "";
  noteCell.appendChild(noteTextarea);

  removeCell.innerHTML = `<button onclick="removeEntry(this)">-</button>`;

  return newRow;
}



function removeEntry(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function clearWeaponEntries() {
  var table = document.getElementById("weaponry-table");
  while (table.rows.length > 3) {
    table.deleteRow(table.rows.length - 2);
  }
}

function downloadData(data, filename) {
  var blob = new Blob([data], { type: "application/json" });
  if (navigator.msSaveBlob) {
    // For IE and Edge
    navigator.msSaveBlob(blob, filename);
  } else {
    var url = URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  }
}




















function rollDice() {
  var diceResult = Math.floor(Math.random() * 20) + 1;

  var resultWindow = document.createElement('div');
  resultWindow.textContent = "You rolled a D20 and got: " + diceResult;
  resultWindow.style.position = 'fixed';
  resultWindow.style.top = '95%';
  resultWindow.style.left = '50%';
  resultWindow.style.transform = 'translate(-50%, -50%)';
  resultWindow.style.padding = '10px';
  resultWindow.style.backgroundColor = '#f0f0f0';
  resultWindow.style.border = '1px solid #ccc';
  resultWindow.style.borderRadius = '4px';
  resultWindow.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  resultWindow.style.zIndex = '9999';

  document.body.appendChild(resultWindow);

  // Schedule the removal of the result window after 5 seconds
  var timeout = setTimeout(function() {
    resultWindow.remove();
  }, 5000);

  // Event listener to detect if a new window is opened
  window.addEventListener('focus', function() {
    clearTimeout(timeout);
    resultWindow.remove();
  });
}

rollDice();




function calculateModifier(score) {
  if (score >= 10) {
    return Math.floor((score - 10) / 2);
  } else {
    return Math.ceil((score - 10) / 2);
  }
}

function updateAbilityModifiers() {
  var strength = parseInt(document.getElementById("strength").value);
  var dexterity = parseInt(document.getElementById("dexterity").value);
  var constitution = parseInt(document.getElementById("constitution").value);
  var intelligence = parseInt(document.getElementById("intelligence").value);
  var wisdom = parseInt(document.getElementById("wisdom").value);
  var charisma = parseInt(document.getElementById("charisma").value);

  document.getElementById("strength-modifier").textContent = calculateModifier(strength);
  document.getElementById("dexterity-modifier").textContent = calculateModifier(dexterity);
  document.getElementById("constitution-modifier").textContent = calculateModifier(constitution);
  document.getElementById("intelligence-modifier").textContent = calculateModifier(intelligence);
  document.getElementById("wisdom-modifier").textContent = calculateModifier(wisdom);
  document.getElementById("charisma-modifier").textContent = calculateModifier(charisma);
}




//Adding weapons and attacks.

function initializeDragAndDrop() {
  var rows = document.querySelectorAll("#weaponry-table tbody tr");
  rows.forEach(function (row) {
    row.draggable = true;
    row.addEventListener("dragstart", handleDragStart);
    row.addEventListener("dragover", handleDragOver);
    row.addEventListener("drop", handleDrop);
  });
}

// Handle drag start event
function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

// Handle drag over event
function handleDragOver(event) {
  event.preventDefault();
}

// Handle drop event
function handleDrop(event) {
  event.preventDefault();
  var sourceRowId = event.dataTransfer.getData("text/plain");
  var sourceRow = document.getElementById(sourceRowId);
  var targetRow = event.target.closest("tr");

  if (sourceRow && targetRow && sourceRow !== targetRow) {
    var tbody = targetRow.parentNode;
    var rows = Array.from(tbody.getElementsByTagName("tr"));
    var sourceRowIndex = rows.indexOf(sourceRow);
    var targetRowIndex = rows.indexOf(targetRow);

    if (sourceRowIndex < targetRowIndex) {
      tbody.insertBefore(sourceRow, targetRow.nextSibling);
    } else {
      tbody.insertBefore(sourceRow, targetRow);
    }
  }
}

// Rewrite the addEntry function with drag and drop functionality
function addEntry(weapon = {}) {
  var table = document.getElementById("weaponry-table");
  var lastRowIndex = table.rows.length - 1;
  var newRow = table.insertRow(lastRowIndex);
  newRow.draggable = true;

  // Set the row ID to enable dragging
  newRow.id = "row-" + Date.now();

  var weaponCell = newRow.insertCell();
  var damageCell = newRow.insertCell();
  var propertiesCell = newRow.insertCell();
  var costCell = newRow.insertCell();
  var weightCell = newRow.insertCell();
  var specialCell = newRow.insertCell();
  var descriptionCell = newRow.insertCell();
  var noteCell = newRow.insertCell();
  var removeCell = newRow.insertCell();

  var weaponInput = document.createElement("input");
  weaponInput.type = "text";
  weaponInput.placeholder = "Weapon";
  weaponInput.value = weapon.name || "";
  weaponCell.appendChild(weaponInput);

  var costInput = document.createElement("input");
  costInput.type = "text";
  costInput.placeholder = "Cost";
  costInput.value = weapon.cost || "";
  costCell.appendChild(costInput);

  var weightInput = document.createElement("input");
  weightInput.type = "text";
  weightInput.placeholder = "Weight";
  weightInput.value = weapon.weight || "";
  weightCell.appendChild(weightInput);

  var propertiesInput = document.createElement("input");
  propertiesInput.type = "text";
  propertiesInput.placeholder = "Properties";
  propertiesInput.value = weapon.properties || "";
  propertiesCell.appendChild(propertiesInput);

  var damageInput = document.createElement("input");
  damageInput.type = "text";
  damageInput.placeholder = "Damage";
  damageInput.value = weapon.damage || "";
  damageCell.appendChild(damageInput);

  var descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.placeholder = "Description";
  descriptionTextarea.value = weapon.description || "";
  descriptionCell.appendChild(descriptionTextarea);

  var specialTextarea = document.createElement("textarea");
  specialTextarea.placeholder = "Special";
  specialTextarea.value = weapon.special || "";
  specialCell.appendChild(specialTextarea);

  var noteTextarea = document.createElement("textarea");
  noteTextarea.placeholder = "Note";
  noteTextarea.placeholder = "Note";
  noteTextarea.value = weapon.note || "";
  noteCell.appendChild(noteTextarea);

  removeCell.innerHTML = `<button onclick="removeEntry(this)">-</button>`;

  newRow.addEventListener("dragstart", handleDragStart);
  newRow.addEventListener("dragover", handleDragOver);
  newRow.addEventListener("drop", handleDrop);

  return newRow;
}

// Call the initializeDragAndDrop function to enable dragging and dropping
initializeDragAndDrop();
















//Button prompting stuff//


function showAlert(text) {
  alert(text);
}





//AI Generate button logic. This section has logic so when you press "Enter" it clicks.
document.querySelector("#ai-generated-content-input").addEventListener("keyup", event => {
  if(event.key !== "Enter") return; // Use `.key` instead.
  document.querySelector("#ai-button").click(); // Things you want to do.
  event.preventDefault(); // No need to `return false;`.
});








//OpenAI Stuff
async function generateText(prompt) {
  try {
    prompt = "The following should be a word, phrase, or question of any kind associated with D&D: " + prompt + ". Based on this word or phrase that was stated, give me the official D&D information on it. If it is a weapon, state the name, damage, properties, cost, weight, special, description, and notes if applicable. If what was said is not D&D related, please type 'Information not applicable.";
    const apiKey = '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'; // Replace with your API key
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    // Display loading message or show a spinner
    const textBox = document.getElementById('ai-generated-content-output');
    textBox.value = 'Generating text...';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
    });

    const data = await response.json();
    const generatedText = data.choices[0].message.content.trim();

    // Display the generated text in the text box
    textBox.value = generatedText;
  } catch (error) {
    console.error('Error:', error);
    alert('Error occurred while generating text: \n' + error);
  }
}

function showAIContent(prompt) {
  generateText(prompt);
}





