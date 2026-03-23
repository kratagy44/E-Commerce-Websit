// console.clear();

let contentTitle;

console.log(document.cookie);
function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");
  // boxLink.href = '#'
  boxLink.href = "/contentDetails.html?" + ob.id;
  // console.log('link=>' + boxLink);

  let imgTag = document.createElement("img");
  // imgTag.id = 'image1'
  // imgTag.id = ob.photos
  imgTag.src = ob.preview;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.brand);
  h4.appendChild(h4Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("rs  " + ob.price);
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

//  TO SHOW THE RENDERED CODE IN CONSOLE
// console.log(dynamicClothingSection());

// console.log(boxDiv)

let mainContainer = document.getElementById("mainContainer");
mainContainer.innerHTML = '';

if(document.cookie.indexOf(',counter=')>=0)
{
    let counter = document.cookie.split(',')[1].split('=')[1]
    let badge = document.getElementById("badge");
    if(badge) badge.innerHTML = counter;
}

function renderCategories() {
  let categories = [...new Set(productList.map(item => item.category))];
  
  categories.forEach(category => {
    let catHeader = document.createElement("h1");
    catHeader.innerText = category;
    mainContainer.appendChild(catHeader);
    
    let catContainer = document.createElement("div");
    catContainer.className = "categoryContainer";
    mainContainer.appendChild(catContainer);
    
    let catProducts = productList.filter(p => p.category === category);
    catProducts.forEach(item => {
      catContainer.appendChild(dynamicClothingSection(item));
    });
  });
}

// Initial render
renderCategories();

// Search Feature
let searchInput = document.getElementById("input");
if (searchInput) {
  searchInput.addEventListener("input", function(e) {
    let query = e.target.value.toLowerCase();
    
    mainContainer.innerHTML = '';
    
    let categories = [...new Set(productList.map(item => item.category))];
    categories.forEach(category => {
      let catProducts = productList.filter(p => p.category === category && (p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query)));
      
      if (catProducts.length > 0) {
        let catHeader = document.createElement("h1");
        catHeader.innerText = category;
        mainContainer.appendChild(catHeader);
        
        let catContainer = document.createElement("div");
        catContainer.className = "categoryContainer";
        mainContainer.appendChild(catContainer);
        
        catProducts.forEach(item => {
          catContainer.appendChild(dynamicClothingSection(item));
        });
      }
    });
  });
}
