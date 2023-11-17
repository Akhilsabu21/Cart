// cart 
function cartData()
{
    let allData = [];

        let c="",b="";

        for (let i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i);
          let value = JSON.parse(localStorage.getItem(key));
          allData.push(value);
        }
        
        // console.log(allData);
        console.log(allData);
        allData.map((value)=>{
            console.log(value.id);

        c+=`
        <div class="item">
            <div class="product-img">
                <img src="${value.thumbnail}" alt="">
            </div>
            <div class="product-details">
                <h4 id="title">${value.title}</h4>
                <h4>${value.description}</h4>
                <p>₹${value.price}
                <span class="c-star"><span class="material-symbols-outlined">
                grade
                </span>${value.rating}</span></p>
                <button onclick="remove(${value.id})" id="r-btn">Remove</button>
            </div>
        </div>
                `
        b+=`
        <div class="cart-details">
              <div class="cart-items-name">
                <p>${value.brand}</p>
                <div class="item-count">
                  <input type="number" class="cart-item-count" onchange="countChange('${value.price}','${value.id}')" id='${value.title}' min="1" value="1">
                </div>
              </div>
              <div>
                <p id='${value.id}' class="item-price">₹${value.price}</p>
              </div>
        </div>
        `
        })
        document.getElementById("products-list").innerHTML=c;
        document.getElementById("cart-price-details").innerHTML=b;
}
cartData()

// remove
function remove(itemId)
{
    let id=itemId;
    console.log(title);
    localStorage.removeItem(id);
    cartData();
}
// remove 
function countChange(price,id)
{
    console.log(event.target.id);
    const title=event.target.id;
    let count=document.getElementById(title).value;
    let newPrice=count*price;
    console.log(newPrice);
    document.getElementById(id).innerHTML="₹"+newPrice;
    totalPrice();
}

//total price

function totalPrice()
{
    let totalPrice=0;
    // console.log("price"+(document.getElementsByClassName("item-price")[0]).innerHTML);
    for (let i = 0; i < localStorage.length; i++)
    {
        let price=((document.getElementsByClassName("item-price")[i]).innerHTML).split("₹");
        price=parseInt(price[1])
        console.log(price);
        totalPrice+=price;
    }
    console.log(totalPrice);
    document.getElementById("total-price").innerHTML="₹"+totalPrice;
    // let priceData = [];
    // totalPrice=0;
    //     for (let i = 0; i < localStorage.length; i++) {
    //       let key = localStorage.key(i);
    //       let value = JSON.parse(localStorage.getItem(key));
    //       priceData.push(value);
    //     }
    //     priceData.map((value)=>{
    //         console.log(value.id);
    //     totalPrice+=value.price;
    //     })
    //     document.getElementById("total-price").innerHTML=totalPrice;
}
totalPrice();

//total price end
// cart end