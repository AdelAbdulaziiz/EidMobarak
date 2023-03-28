document.getElementById("generate-btn").addEventListener("click", function() {
    const nameInput = document.getElementById("name-input");
    const cardName = document.getElementById("card-name");
    
    cardName.textContent = nameInput.value;
});