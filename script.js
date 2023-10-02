const generate = document.getElementById('generate');

generate.addEventListener("click", (e) => {
    e.preventDefault();
    generateCard();
})

function generateCard() {
    
    const imageSrc = document.getElementById("image").value;
    const name = document.getElementById("name").value;
    const bio = document.getElementById("bio").value;
    const twitterLink = document.getElementById("twitter").value;
    const githubLink = document.getElementById("github").value;
    const linkedinLink = document.getElementById("linkedin").value;
    const email = document.getElementById("email").value;

    const card = document.getElementById("output");
    // Add your card here
    // e.g const card1 = document.getElementById("output1");
    const cardHTML = `
    <div class="card">
        <img src="${imageSrc}" alt="image" class="profile">
        <h2>${name}</h2>
        <p>${bio}</p>
        <div class="links">
            <a href="${twitterLink}" target="_blank"><img src="https://img.icons8.com/color/344/twitter-circled--v1.png"></a>
            <a href="${githubLink}" target="_blank"><img src="https://img.icons8.com/color/344/github--v1.png"></a>
            <a href="${linkedinLink}" target="_blank"><img src="https://img.icons8.com/color/344/linkedin-circled--v5.png"></a>
        </div>
        <a href="mailto:${email}"><button class="btn2">Contact me</button></a>
        <button class="btn2" id="copy">Copy embedded link</button>
    </div>
    `;
    // Create your own card here
    // e.g: const cardHTML1 = `
    // <div class="card">
    //     <img src="${imageSrc}" alt="image" class="profile">
    //     <h2>${name}</h2>
    //     <p>${bio}</p>
    //     <div class="links">
    //         <a href="${twitterLink}" target="_blank"><img src="https://img.icons8.com/color/344/twitter-circled--v1.png"></a>
    //         <a href="${githubLink}" target="_blank"><img src="https://img.icons8.com/color/344/github--v1.png"></a>
    //         <a href="${linkedinLink}" target="_blank"><img src="https://img.icons8.com/color/344/linkedin-circled--v5.png"></a>
    //     </div>
    //     <a href="mailto:${email}"><button class="btn2">Contact me</button></a>
    //     <button class="btn2" id="copy">Copy embedded link</button>
    // </div>
    // `
    card.innerHTML = cardHTML;

    // Write the html of the card to DOM
    // e.g card1.innerHTML = cardHTML1;
    
    //Create a copyHTML variable and store the HTML code without the copy embedded link button

    const copyHTML = `
    <div class="card">
        <img src="${imageSrc}" alt="image" class="profile">
        <h2>${name}</h2>
        <p>${bio}</p>
        <div class="links">
            <a href="${twitterLink}" target="_blank"><img src="https://img.icons8.com/color/344/twitter-circled--v1.png"></a>
            <a href="${githubLink}" target="_blank"><img src="https://img.icons8.com/color/344/github--v1.png"></a>
            <a href="${linkedinLink}" target="_blank"><img src="https://img.icons8.com/color/344/linkedin-circled--v5.png"></a>
        </div>
        <a href="mailto:${email}"><button class="btn2">Contact me</button></a>
    </div>
    `;
    
    // e.g const copyHTML1 = `
    // <div class="card">
    //     <img src="${imageSrc}" alt="image" class="profile">
    //     <h2>${name}</h2>
    //     <p>${bio}</p>
    //     <div class="links">
    //         <a href="${twitterLink}" target="_blank"><img src="https://img.icons8.com/color/344/twitter-circled--v1.png"></a>
    //         <a href="${githubLink}" target="_blank"><img src="https://img.icons8.com/color/344/github--v1.png"></a>
    //         <a href="${linkedinLink}" target="_blank"><img src="https://img.icons8.com/color/344/linkedin-circled--v5.png"></a>
    //     </div>
    //     <a href="mailto:${email}"><button class="btn2">Contact me</button></a>
    // </div>
    // `;

    const copyButton = document.getElementById("copy");
    copyButton.addEventListener("click", function () {
        // Create a textarea element to hold the card HTML
        const textarea = document.createElement("textarea");
        textarea.value = copyHTML;
        document.body.appendChild(textarea);

        // Select the text in the textarea
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Remove the textarea element
        document.body.removeChild(textarea);

        // Provide feedback to the user
        alert("Card HTML copied to clipboard!");
    })
  }
  