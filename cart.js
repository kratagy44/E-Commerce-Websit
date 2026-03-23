console.clear();

if(document.cookie.indexOf(',counter=')>=0)
{
    let counter = document.cookie.split(',')[1].split('=')[1]
    document.getElementById("badge").innerHTML = counter
}


let cartContainer = document.getElementById('cartContainer')

let boxContainerDiv = document.createElement('div')
boxContainerDiv.id = 'boxContainer'

// DYNAMIC CODE TO SHOW THE SELECTED ITEMS IN YOUR CART
function dynamicCartSection(ob,itemCounter)
{
    let boxDiv = document.createElement('div')
    boxDiv.id = 'box'
    boxContainerDiv.appendChild(boxDiv)

    let boxImg = document.createElement('img')
    boxImg.src = ob.preview
    boxDiv.appendChild(boxImg)

    let boxh3 = document.createElement('h3')
    let h3Text = document.createTextNode(ob.name + ' × ' + itemCounter)
    // let h3Text = document.createTextNode(ob.name)
    boxh3.appendChild(h3Text)
    boxDiv.appendChild(boxh3)

    let boxh4 = document.createElement('h4')
    let h4Text = document.createTextNode('Amount: Rs' + ob.price)
    boxh4.appendChild(h4Text)
    boxDiv.appendChild(boxh4)

    // console.log(boxContainerDiv);

    cartContainer.appendChild(boxContainerDiv)
    cartContainer.appendChild(totalContainerDiv)
    // let cartMain = document.createElement('div')
    // cartmain.id = 'cartMainContainer'
    // cartMain.appendChild(totalContainerDiv)

    return cartContainer
}

let totalContainerDiv = document.createElement('div')
totalContainerDiv.id = 'totalContainer'

let totalDiv = document.createElement('div')
totalDiv.id = 'total'
totalContainerDiv.appendChild(totalDiv)

let totalh2 = document.createElement('h2')
let h2Text = document.createTextNode('Total Amount')
totalh2.appendChild(h2Text)
totalDiv.appendChild(totalh2)

// TO UPDATE THE TOTAL AMOUNT
function amountUpdate(amount)
{
    let totalh4 = document.createElement('h4')
    // let totalh4Text = document.createTextNode(amount)
    let totalh4Text = document.createTextNode('Amount: Rs ' + amount)
    totalh4Text.id = 'toth4'
    totalh4.appendChild(totalh4Text)
    totalDiv.appendChild(totalh4)
    totalDiv.appendChild(buttonDiv)
    console.log(totalh4);
}


let buttonDiv = document.createElement('div')
buttonDiv.id = 'button'
totalDiv.appendChild(buttonDiv)

let buttonTag = document.createElement('button')
buttonDiv.appendChild(buttonTag)

let buttonLink = document.createElement('a')
buttonLink.href = '/orderPlaced.html?'
buttonLink.innerHTML = 'Place Order'
buttonTag.appendChild(buttonLink)

buttonTag.onclick = function()
{
    console.log("clicked")
}  

//dynamicCartSection()
// console.log(dynamicCartSection());

let totalAmount = 0;
if(document.cookie.indexOf(',counter=')>=0) {
    let counter = Number(document.cookie.split(',')[1].split('=')[1]);
    let totalItemEle = document.getElementById("totalItem");
    if(totalItemEle) totalItemEle.innerHTML = ('Total Items: ' + counter);

    let itemStr = document.cookie.split(',')[0].split('=')[1];
    let item = itemStr ? itemStr.trim().split(" ") : [];

    // Count item frequencies properly
    let itemCounts = {};
    for (let i = 0; i < item.length; i++) {
        if (!item[i]) continue;
        itemCounts[item[i]] = (itemCounts[item[i]] || 0) + 1;
    }

    // Render items and calculate total
    for (let itemId in itemCounts) {
        let itemCounter = itemCounts[itemId];
        let prod = productList.find(p => p.id == itemId);
        if (prod) {
            totalAmount += Number(prod.price) * itemCounter;
            dynamicCartSection(prod, itemCounter);
        }
    }
    amountUpdate(totalAmount);
}




