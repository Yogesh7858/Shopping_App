const apiUrl = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';

let apiData = fetch(apiUrl).then(response => {
  if (!response) {
    throw new Error("Api is not proper working")
  }
  return response.json();
}).then(data => {
  menCategory(data.categories[0])
  womenCategory(data.categories[1])
  kidsCategory(data.categories[2])
  return data
}).catch(error => {
  console.error(error);
})

function menCategory(menData) {

  productData = menData.category_products;
  let men=document.getElementById('Men')
  for (let i = 0; i < productData.length; i++) {
        let newElement=document.createElement('div');
        newElement.innerHTML=
                            `<div class="card">

                                <div class="image-Container">
                                    ${productData[i].badge_text?`<div class="badge-container">
                                            <span class="badge">${productData[i].badge_text}</span>
                                        </div>` : ``}
                                    
                                    <img class="product-Image" src=${productData[i].image} alt=${productData[i].title}/>
                                </div>

                                <p class="product-Name-Container">
                                    <span class="product-Name">${productData[i].title}</span>
                                    <span class="company-Name-Container">
                                        <span class="bullet">&#8226;</span>
                                        <span class="product-Company">${productData[i].vendor}</span>
                                    </span>
                                </p>

                                <p class="priceContainer">
                                    <span>
                                        <span class="rupees-text">Rs </span>
                                        <span class="actual-Price">${productData[i].price}</span>
                                    </span>
                                    <span class="original-Price">${productData[i].compare_at_price}</span>
                                    <span class="discount-container">
                                        <span class="discount">${caculateDiscount(productData[i].price, productData[i].compare_at_price)}</span>
                                        <span> off</span>
                                    </span>
                                </p>

                                <button type="button"  class="add-Cart-Button">Add to Cart</button>
                            </div>`
        men.appendChild(newElement)
    }
}


function womenCategory(womenData) {
    let Women=document.getElementById('Women')

  productData = womenData.category_products;

  for (let i = 0; i < productData.length; i++) {
    let newElement=document.createElement('div');
    newElement.innerHTML=
                        `<div class="card">

                            <div class="image-Container">
                                ${productData[i].badge_text?`<div class="badge-container">
                                        <span class="badge">${productData[i].badge_text}</span>
                                    </div>` : ``}
                                
                                <img class="product-Image" src=${productData[i].image} alt=${productData[i].title}/>
                            </div>

                            <p class="product-Name-Container">
                                <span class="product-Name">${productData[i].title}</span>
                                <span class="company-Name-Container">
                                    <span class="bullet">&#8226;</span>
                                    <span class="product-Company">${productData[i].vendor}</span>
                                </span>
                            </p>

                            <p class="priceContainer">
                                <span>
                                    <span class="rupees-text">Rs </span>
                                    <span class="actual-Price">${productData[i].price}</span>
                                </span>
                                <span class="original-Price">${productData[i].compare_at_price}</span>
                                <span class="discount-container">
                                    <span class="discount">${caculateDiscount(productData[i].price, productData[i].compare_at_price)}</span>
                                    <span> off</span>
                                </span>
                            </p>

                            <button type="button"  class="add-Cart-Button">Add to Cart</button>
                        </div>`
    Women.appendChild(newElement)
}

}

function kidsCategory(kidsData) {

  productData = kidsData.category_products;
  let Kids=document.getElementById('Kids')
  for (let i = 0; i < productData.length; i++) {
    let newElement=document.createElement('div');
    newElement.innerHTML=
                        `<div class="card">

                            <div class="image-Container">
                                ${productData[i].badge_text?`<div class="badge-container">
                                        <span class="badge">${productData[i].badge_text}</span>
                                    </div>` : ``}
                                
                                <img class="product-Image" src=${productData[i].image} alt=${productData[i].title}/>
                            </div>

                            <p class="product-Name-Container">
                                <span class="product-Name">${productData[i].title}</span>
                                <span class="company-Name-Container">
                                    <span class="bullet">&#8226;</span>
                                    <span class="product-Company">${productData[i].vendor}</span>
                                </span>
                            </p>

                            <p class="priceContainer">
                                <span>
                                    <span class="rupees-text">Rs </span>
                                    <span class="actual-Price">${productData[i].price}</span>
                                </span>
                                <span class="original-Price">${productData[i].compare_at_price}</span>
                                <span class="discount-container">
                                    <span class="discount">${caculateDiscount(productData[i].price, productData[i].compare_at_price)}</span>
                                    <span> off</span>
                                </span>
                            </p>

                            <button type="button"  class="add-Cart-Button">Add to Cart</button>
                        </div>`
    Kids.appendChild(newElement)
}

}

function caculateDiscount(sellingPrice, originalPrice) {
  let discount = (((originalPrice - sellingPrice) / originalPrice) * 100).toString().split('.')[0];
  return discount + '%';
}



function showList(event, category) {

  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  let tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].style.backgroundColor = "#f2f2f2";
    tablinks[i].style.color = "#000000";
    tablinks[i].querySelector(".gender-icons").style.display = "none";

  }
  document.getElementById(category).style.display = "flex";

  setActiveStyles(event)

}

function setActiveStyles(event) {
  event.currentTarget.className += " active";
  event.currentTarget.style.backgroundColor = "#000000";
  event.currentTarget.style.color = "#ffffff";
  event.currentTarget.style.borderRadius = "4px";
  event.currentTarget.querySelector(".gender-icons").style.display = "flex";
}

