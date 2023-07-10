function exportCharacter() {
    var characterName = document.getElementById("character-name").value;
    var race = document.getElementById("race").value;
    var charClass = document.getElementById("class").value;
    var level = document.getElementById("level").value;

    var filename = characterName + " - " + race + " " + charClass + ", Level " + level + ".txt";
    var characterData = {
        characterName: characterName,
        ac: document.getElementById("ac").value,
        speed: document.getElementById("speed").value,
        class: charClass,
        level: level,
        race: race,
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
        attacksWeaponry: document.getElementById("attacks-weaponry").value,
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

    var text = JSON.stringify(characterData);

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


function importCharacter() {
    var element = document.createElement('input');
    element.setAttribute('type', 'file');
    element.setAttribute('accept', '.txt');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.addEventListener('change', function(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
            var characterData = JSON.parse(event.target.result);
            document.getElementById("character-name").value = characterData.characterName;
            document.getElementById("ac").value = characterData.ac;
            document.getElementById("speed").value = characterData.speed;
            document.getElementById("class").value = characterData.class;
            document.getElementById("level").value = characterData.level;
            document.getElementById("race").value = characterData.race;
            document.getElementById("background").value = characterData.background;
            document.getElementById("alignment").value = characterData.alignment;
            document.getElementById("xp").value = characterData.xp;
            document.getElementById("strength").value = characterData.strength;
            document.getElementById("dexterity").value = characterData.dexterity;
            document.getElementById("constitution").value = characterData.constitution;
            document.getElementById("intelligence").value = characterData.intelligence;
            document.getElementById("wisdom").value = characterData.wisdom;
            document.getElementById("charisma").value = characterData.charisma;
            document.getElementById("skills").value = characterData.skills;
            document.getElementById("proficiency-bonus").value = characterData.proficiencyBonus;
            document.getElementById("saving-throws").value = characterData.savingThrows;
            document.getElementById("hp-current").value = characterData.hpCurrent;
            document.getElementById("hp-max").value = characterData.hpMax;
            document.getElementById("initiative").value = characterData.initiative;
            document.getElementById("attacks-weaponry").value = characterData.attacksWeaponry;
            document.getElementById("equipment").value = characterData.equipment;
            document.getElementById("spells").value = characterData.spells;
            document.getElementById("features-traits").value = characterData.featuresTraits;
            document.getElementById("languages").value = characterData.languages;
            document.getElementById("background-details").value = characterData.backgroundDetails;
            document.getElementById("appearance").value = characterData.appearance;
            document.getElementById("personality-traits").value = characterData.personalityTraits;
            document.getElementById("bonds-flaws-ideals").value = characterData.bondsFlawsIdeals;
            document.getElementById("backstory").value = characterData.backstory;
            document.getElementById("currency").value = characterData.currency;
            document.getElementById("allies-organizations").value = characterData.alliesOrganizations;
            document.getElementById("notes").value = characterData.notes;
        };

        reader.readAsText(file);
    });

    element.click();

    document.body.removeChild(element);
}


function rollDice() {
    var diceResult = Math.floor(Math.random() * 20) + 1;
    alert("You rolled a D20 and got: " + diceResult);
}


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



//Button prompting stuff//


function showAlert(text) {
  alert(text);
}









//OpenAI Stuff
async function generateText() {
  try {
    const prompt = ''; // Replace with your desired prompt
    const apiKey = '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'; // Replace with your API key
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    // Display loading message or show a spinner
    const textBox = document.getElementById('generated-text');
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
    alert('Error occurred while generating text.');
  }
}

function showAIContent() {
  generateText();
}




