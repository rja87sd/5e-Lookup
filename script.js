// Script.js - D&D Spell Search Application

//  This script fetches spell data from the D&D 5e API based on user input,
//  and displays spell details on the web page, allowing users to search for
//  specific spells and view their information. Credit to Lewis Benson and
//  ChatGPT for assistance. Credit to ChatGPT for comments.

"use strict"; // Enables strict mode to catch common coding mistakes and improve performance

// Define the base URL for the D&D 5e API
const BASE_URL = "https://www.dnd5eapi.co";

// Get the search form element
const searchForm = document.getElementById("spellSearchForm");

// Define a class to represent a spell
class Spell {
  constructor(spellData) {
    // Constructor to initialize spell properties
    this.name = spellData.name; // Spell name
    this.url = spellData.url; // Spell URL
  }

  // Method to display the spell details on the page
  displayToDom() {
    // Get the container for spell cards
    const cardContainer = document.getElementById("spellbook");
    // Clear previous spell cards
    cardContainer.innerHTML = "";
    // Create a div element for the spell card
    const spellCard = document.createElement("div");
    spellCard.classList.add("spell-card");

    // Populate the spell card with spell information
    spellCard.innerHTML = `
      <h2>${this.name}</h2>
      <div class="spell-card__details">

      </div>
    `;

    // Append the spell card to the card container
    cardContainer.appendChild(spellCard);

    // Fetch detailed information about the spell and display it
    this.fetchSpellDetails();
  }

  // Method to fetch detailed information about the spell from the API
  async fetchSpellDetails() {
    try {
      // Fetch spell details from the API
      const response = await fetch(BASE_URL + this.url);
      const spellData = await response.json();

      // Display the detailed information in the spell card
      const spellDetailsDiv = document.querySelector(".spell-card__details");
      spellDetailsDiv.innerHTML = `
      <p><strong>Level:</strong> ${spellData.level}</p>
      <p><strong>School:</strong> ${spellData.school.name}</p>
      <p><strong>Ritual:</strong> ${spellData.ritual ? "Yes" : "No"}</p>
      <p><strong>Components:</strong> ${spellData.components}</p>
      <p><strong>Material Components:</strong> ${
        spellData.material ? spellData.material : "None"
      }</p>
      <p><strong>Range:</strong> ${spellData.range}</p>
      <p><strong>At Higher Levels:</strong> ${spellData.higher_level}</p>
      <br>
      <hr>
      <br>
    `;

      // Log the spell object to console
      console.log("Spell Object:", spellData);

      // Display the description parameter from the spell
      if (spellData.desc && spellData.desc.length > 0) {
        spellDetailsDiv.innerHTML += `<p><strong>Description:</strong> ${spellData.desc[0]}</p>`;
        for (let i = 1; i < spellData.desc.length; i++) {
          spellDetailsDiv.innerHTML += `<p><strong>Description (Continued):</strong> ${spellData.desc[i]}</p>`;
        }
      }
    } catch (error) {
      // Handle errors when fetching spell data
      console.log("Error fetching spell data:", error);
    }
  }
}

// Add event listener for form submission
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get the entered spell name from the form input
  const spellName = document.getElementById("spellName").value.trim();

  if (spellName) {
    try {
      // Fetch the spell from the API
      const response = await fetch(BASE_URL + "/api/spells/?name=" + spellName);
      const data = await response.json();

      console.log(data);
      // If spell is found, display it
      if (data.results.length > 0) {
        const foundSpell = data.results.find(
          (spell) => spell.name.toLowerCase() === spellName.toLowerCase()
        );
        const spell = new Spell(foundSpell);
        spell.displayToDom();
      } else {
        console.log("Spell not found.");
      }
    } catch (error) {
      // Handle errors when fetching spell data
      console.log("Error fetching spell data:", error);
    }
  } else {
    console.log("Please enter a spell name.");
  }
});
