let url=window.location.href;
var urlParams=new URLSearchParams(url.split("?")[1]);
var id=urlParams.get("id");


document.getElementById("count").innerHTML=localStorage.length;

async function details()
{
    let r="";
    try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                console.log(data.images.length);
                let ar=[]
                for (let i=0;i<data.images.length;i++){
                    ar.push(data.images[i]);
                }
                ar.map((dt)=>{
                    r+=`
                    
                        <div class="detail-image">
                            <img src="${dt}">
                        </div>`
                })
                    s=`
                    <h1 class="p-head">${data.title}</h1>
            <h4>${data.description}</h4>
            <span class="star"><span class="material-symbols-outlined">
                grade
                </span>${data.rating}</span>
            <h3>₹${data.price} <span class="off">${data.discountPercentage}% off</span></h3>
            <h5 class="pink">Hurry,Only ${data.stock} left!</h5>
            <p><span class="material-symbols-outlined">
            sell
            </span>Bank Offer10% Instant Discount on ICICI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and aboveT&C</p>
            <p><span class="material-symbols-outlined">
            sell
            </span>Bank Offer10% Instant Discount on Axis Bank Credit Card, up to ₹1250, on orders of ₹5,000 and aboveT&C</p>
            <p><span class="material-symbols-outlined">
            sell
            </span>Bank Offer5% off on Flipkart Axis Bank Credit Card, up to ₹625, on orders of ₹5,000 and aboveT&C</p>
            <p><span class="material-symbols-outlined">
            sell
            </span>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*Know More</p>
            <div class="btns">
                <button class="b">Buy</button>
                <button class="a" onclick="addtocart()" >Add To Cart</button>
            </div>`
           
            document.getElementById("detail-img").innerHTML=r;
            document.getElementById("d-dtails").innerHTML=s;
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
}

    
details()

async function addtocart(){
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    localStorage.setItem(data.id,JSON.stringify(data))
    alert("Product added to cart!");
    document.getElementById("count").innerHTML=localStorage.length;
}

