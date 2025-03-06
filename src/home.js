function home() {
    const home = document.createElement("div");
    home.classList.add("home-content");
    
    const main = document.createElement("div")
    main.classList.add("main-page")

    const quotes = document.createElement("div")
    quotes.classList.add("quotes-togther");

    const heading = document.createElement("p");
    heading.textContent = "Double the Flavor,";  
    heading.classList.add("quote")
    quotes.appendChild(heading);

    const headingline = document.createElement("p");
    headingline.textContent = "Double the Fun";  
    headingline.classList.add("quote")
    quotes.appendChild(headingline);

    main.appendChild(quotes)

    const buyNow = document.createElement("button");
    buyNow.innerHTML = `Buy Now <svg class = "burger-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" width="64px" height="64px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" fill="#000000" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="hamburger"> <g> <path fill="#c87832" d="M490.667,447.906c0,5.906-4.766,10.656-10.656,10.656H32.223c-5.891,0-10.656-4.75-10.656-10.656v-53.312 h469.1V447.906z"></path> </g> <g> <path fill="#c87832" d="M255.875,53.438c-129.529,0-234.542,76.373-234.542,170.59h469.1 C490.433,129.811,385.419,53.438,255.875,53.438z"></path> </g> <path fill="#855400" d="M21.567,394.595c-11.765,0-21.328-9.562-21.328-21.312s9.562-21.312,21.328-21.312h469.1 c11.766,0,21.328,9.562,21.328,21.312s-9.562,21.312-21.328,21.312H21.567z"></path> <path fill="#855400" d="M21.333,309.315c-11.765,0-21.328-9.562-21.328-21.312c0-11.78,9.562-21.335,21.328-21.335h469.1 c11.766,0,21.328,9.555,21.328,21.335c0,11.75-9.562,21.312-21.328,21.312H21.333z"></path> <g> <path fill="#EC5564" d="M256.125,341.314c0,5.875-4.781,10.656-10.672,10.656H21.567c-5.891,0-10.656-4.781-10.656-10.656v-21.343 c0-5.875,4.765-10.656,10.656-10.656h223.886c5.891,0,10.672,4.781,10.672,10.656V341.314z"></path> </g> <g> <path fill="#EC5564" d="M501.339,341.314c0,5.875-4.781,10.656-10.672,10.656H266.781c-5.891,0-10.656-4.781-10.656-10.656 v-21.343c0-5.875,4.766-10.656,10.656-10.656h223.886c5.891,0,10.672,4.781,10.672,10.656V341.314z"></path> </g> <g> <polygon fill="#FECD57" points="256.125,437.25 42.895,309.315 468.871,309.315 "></polygon> </g> <path fill="#F5BA45" d="M213.235,351.971c0,5.875-4.781,10.656-10.672,10.656c-5.875,0-10.656-4.781-10.656-10.656 c0-5.906,4.781-10.656,10.656-10.656C208.454,341.314,213.235,346.064,213.235,351.971z"></path> <path fill="#F5BA45" d="M309.421,362.627c0,5.875-4.766,10.656-10.656,10.656s-10.656-4.781-10.656-10.656 c0-5.906,4.766-10.656,10.656-10.656S309.421,356.721,309.421,362.627z"></path> <path fill="#EAAD7A" d="M181.486,117.405c0,5.891-4.766,10.671-10.656,10.671c-5.89,0-10.671-4.781-10.671-10.671 c0-5.89,4.781-10.656,10.671-10.656C176.72,106.749,181.486,111.515,181.486,117.405z"></path> <path fill="#EAAD7A" d="M266.781,117.405c0,5.891-4.781,10.671-10.656,10.671c-5.891,0-10.672-4.781-10.672-10.671 c0-5.89,4.781-10.656,10.672-10.656C262,106.749,266.781,111.515,266.781,117.405z"></path> <path fill="#EAAD7A" d="M352.076,117.405c0,5.891-4.781,10.671-10.671,10.671c-5.875,0-10.656-4.781-10.656-10.671 c0-5.89,4.781-10.656,10.656-10.656C347.295,106.749,352.076,111.515,352.076,117.405z"></path> <path fill="#EAAD7A" d="M138.596,170.716c0,5.891-4.766,10.656-10.656,10.656s-10.656-4.765-10.656-10.656 c0-5.89,4.766-10.656,10.656-10.656S138.596,164.826,138.596,170.716z"></path> <path fill="#EAAD7A" d="M223.891,170.716c0,5.891-4.766,10.656-10.656,10.656c-5.891,0-10.672-4.765-10.672-10.656 c0-5.89,4.781-10.656,10.672-10.656C219.125,160.061,223.891,164.826,223.891,170.716z"></path> <path fill="#EAAD7A" d="M309.187,170.716c0,5.891-4.781,10.656-10.656,10.656c-5.891,0-10.672-4.765-10.672-10.656 c0-5.89,4.781-10.656,10.672-10.656C304.405,160.061,309.187,164.826,309.187,170.716z"></path> <path fill="#EAAD7A" d="M394.716,170.716c0,5.891-4.766,10.656-10.656,10.656s-10.672-4.765-10.672-10.656 c0-5.89,4.781-10.656,10.672-10.656S394.716,164.826,394.716,170.716z"></path> <path fill="#9ED36A" d="M506.667,234.355c0-5.89-4.781-10.671-10.672-10.671c-1.438,0-2.812,0.297-4.062,0.812l0,0l-0.016,0.016 c-0.047,0.016-0.078,0.016-0.109,0.031L442.7,244.809l-49.125-20.265c-0.031-0.016-0.062-0.016-0.094-0.031l-0.031-0.016l0,0 c-1.25-0.516-2.625-0.812-4.062-0.812s-2.812,0.297-4.062,0.812l0,0l-0.031,0.016c-0.031,0.016-0.062,0.016-0.094,0.031 l-49.123,20.265l-49.125-20.265c-0.031-0.016-0.047-0.016-0.078-0.031l-0.031-0.016l0,0c-1.266-0.516-2.625-0.812-4.078-0.812 c-1.438,0-2.797,0.297-4.062,0.812l0,0l-0.031,0.016c-0.031,0.016-0.062,0.016-0.078,0.031l-49.124,20.265l-49.124-20.265 c-0.031-0.016-0.062-0.016-0.094-0.031l-0.031-0.016l0,0c-1.25-0.516-2.625-0.812-4.062-0.812s-2.812,0.297-4.062,0.812l0,0 l-0.031,0.016c-0.031,0.016-0.062,0.016-0.094,0.031l-49.124,20.265l-49.124-20.265c-0.031-0.016-0.047-0.016-0.078-0.031 l-0.031-0.016l0,0c-1.266-0.516-2.625-0.812-4.078-0.812c-1.438,0-2.812,0.297-4.062,0.812l0,0l-0.031,0.016 c-0.031,0.016-0.062,0.016-0.078,0.031L12.177,246.48l0,0c-3.875,1.609-6.609,5.406-6.609,9.859 c0,5.891,4.781,10.656,10.671,10.656c1.438,0,2.812-0.281,4.062-0.797l0,0l0.031-0.016c0.031-0.016,0.062-0.016,0.094-0.031 l49.108-20.266l49.124,20.266c0.031,0.016,0.062,0.016,0.094,0.031l0.031,0.016l0,0c1.25,0.516,2.625,0.797,4.062,0.797 s2.812-0.281,4.062-0.797l0,0l0.031-0.016c0.031-0.016,0.062-0.016,0.094-0.031l49.124-20.266l49.124,20.266 c0.031,0.016,0.062,0.016,0.094,0.031l0.031,0.016l0,0c1.25,0.516,2.625,0.797,4.062,0.797s2.812-0.281,4.062-0.797l0,0 l0.031-0.016c0.031-0.016,0.062-0.016,0.094-0.031l49.108-20.266l49.125,20.266c0.031,0.016,0.062,0.016,0.094,0.031l0.031,0.016 l0,0c1.25,0.516,2.625,0.797,4.062,0.797s2.812-0.281,4.062-0.797l0,0l0.031-0.016c0.031-0.016,0.062-0.016,0.094-0.031 l49.123-20.266l49.125,20.266c0.031,0.016,0.047,0.016,0.078,0.031l0.031,0.016l0,0c1.266,0.516,2.625,0.797,4.078,0.797 c1.438,0,2.812-0.281,4.062-0.797l0,0l0.016-0.016c0.047-0.016,0.078-0.016,0.109-0.031l53.186-21.938v-0.016 C503.933,242.605,506.667,238.793,506.667,234.355z"></path> </g> </g></svg>`
    buyNow.classList.add("buynow")
    main.appendChild(buyNow)

    // Create the divider
    const divider = document.createElement("div");
    divider.classList.add("divider");
    main.appendChild(divider); // Add divider between sections

    const temp = document.createElement("div");
    temp.classList.add("timings-together");
    temp.innerHTML = `<svg class="clock" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"> <path d="M12 7V12L9.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3
     12 3C16.9706 3 21 7.02944 21 12Z" stroke="#eaa32a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;

    const timing = document.createElement("div");
    timing.classList.add("timing", "timing1");
    timing.textContent = "Mon - Thurs : 10am - 8pm"
    temp.appendChild(timing);


    const timing1 = document.createElement("div");
    timing1.classList.add("timing");
    timing1.classList.add("timing2");
    timing1.textContent = "Fri - Sun : 10am - 11pm"
    temp.appendChild(timing1)

    main.appendChild(temp)
    
    home.appendChild(main)

    const content = document.getElementById("content");
    content.innerHTML = '';  // Clear previous content
    content.appendChild(home);
}

export default home;
