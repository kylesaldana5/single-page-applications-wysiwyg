let famousAF = [
    {
        title: "Guitar legend",
        name: "Jerry Garcia",
        bio: "You do not merely want to be considered the best of the best. You want to be considered the only ones that do what you do.",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f2/Jerry_Garcia_1968.jpg",
        lifespan: {
            birth: 1942,
            death: 1955
        }
    },

    {
        title: "Jedi  Master",
        name: "Trey Anastasio",
        bio: "Whatever you do, take care of your shoes",
        image: "http://www.jambands.com/images/2016/12/13/61736/DSC_20132.jpg",
        lifespan: {
            birth: 1964,
            death: 2041
        }
    },

    {

        title: "His Airness",
        name: "Micheal Jordan",
        bio: "Some people want it to happen, some wish it would happen, others make it happen",
        image: "http://www.guinnessworldrecords.com/Images/Michael-Jordan-main_tcm25-15662.jpg",
        lifespan: {
            birth: 1963,
            death: 2038
        }
    },

    {

        title: "Black Mamba",
        name: "Kobe Bryant",
        bio: "These young guys are playing checkers. I'm out there playing chess",
        image: "https://www.ballerstatus.com/wp-content/uploads/2014/03/kobebryant.jpg",
        lifespan: {
            birth: 1978,
            death: 2040
        }
    },

]

let counter = 0;
let famousAFContainer = document.getElementById("famousAF");

// Create Cards and Put Into DOM
for (let i = 0; i < famousAF.length; i++) {
    counter += 1;
    
    // Create Element
    let famousCard = document.createElement("article");
    
    // Set Attributes 
    famousCard.setAttribute("id", `person - ${counter}`)
    console.log(`person - ${counter}` );
    famousCard.setAttribute("class", "famouse-card");
    
    // Appened Cards to Container
    famousAFContainer.appendChild(famousCard);
    
    // Add header element
    let header = document.createElement("header");
    famousAFContainer.appendChild(header);
    
    // Add section for bio
    let bio = document.createElement("section");
    famousAFContainer.appendChild(bio);
    
    // Add section for life span
    let lifespan = document.createElement("footer");
    famousAFContainer.appendChild(lifespan);
    console.log(famousAFContainer );
    
    // Create elements for name and title
    let h1 = document.createElement("h1");
    let name = document.createTextNode(`${famousAF[i].name}`);
    h1.appendChild(name);
    header.appendChild(h1);
    
    let h2 = document.createElement("h2");
    let title = document.createTextNode(`${famousAF[i].title}`);
    h2.appendChild(title);
    header.appendChild(h2);

    // Add pic
    bio.innerHTML = `<img src="${famousAF[i].image}">`

    // Create elements bio
    let p = document.createElement("p");
    let famousAFBio = document.createTextNode(`${famousAF[i].bio}`);
    p.appendChild(famousAFBio);
    bio.appendChild(p)

    // Add lifespan
    
   
}