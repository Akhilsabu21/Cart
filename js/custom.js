

function data()
{
    fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(data=>{
        let r=``,l=``,f=``,s=``,g=``,h=``;
        data.products.map((dt)=>{
            if(dt.category=="smartphones")
            {
                r+=`
            <a href="./template/details.html?id=${dt.id}" class="a-tag">
            <div class="cards">
                <div class="c-img">
                    <img src="${dt.thumbnail}" alt="">
                </div>
                <div class="c-detail">
                    <p>${dt.title}</p>
                    <p>From ₹${dt.price}</p>
                </div>
            </div>
            </a>`
            }else if(dt.category=="laptops")
            {
                l+=`
            <a href="./template/details.html?id=${dt.id}" class="a-tag">
            <div class="cards">
                <div class="c-img">
                    <img src="${dt.thumbnail}" alt="">
                </div>
                <div class="c-detail">
                    <p>${dt.title}</p>
                    <p>From ₹${dt.price}</p>
                </div>
            </div>
            </a>`
            }else if(dt.category=="fragrances")
            {
                f+=`
            <a href="./template/details.html?id=${dt.id}" class="a-tag">
            <div class="cards">
                <div class="c-img">
                    <img src="${dt.thumbnail}" alt="">
                </div>
                <div class="c-detail">
                    <p>${dt.title}</p>
                    <p>From ₹${dt.price}</p>
                </div>
            </div>
            </a>`
            }else if(dt.category=="skincare")
            {
                s+=`
            <a href="./template/details.html?id=${dt.id}" class="a-tag">
            <div class="cards">
                <div class="c-img">
                    <img src="${dt.thumbnail}" alt="">
                </div>
                <div class="c-detail">
                    <p>${dt.title}</p>
                    <p>From ₹${dt.price}</p>
                </div>
            </div>
            </a>`
            }else if(dt.category=="groceries")
            {
                g+=`
            <a href="./template/details.html?id=${dt.id}" class="a-tag">
            <div class="cards">
                <div class="c-img">
                    <img src="${dt.thumbnail}" alt="">
                </div>
                <div class="c-detail">
                    <p>${dt.title}</p>
                    <p>From ₹${dt.price}</p>
                </div>
            </div>
            </a>`
            }else if(dt.category=="home-decoration")
            {
                h+=`
            <a href="./template/details.html?id=${dt.id}" class="a-tag">
            <div class="cards">
                <div class="c-img">
                    <img src="${dt.thumbnail}" alt="">
                </div>
                <div class="c-detail">
                    <p>${dt.title}</p>
                    <p>From ₹${dt.price}</p>
                </div>
            </div>
            </a>`
            }
        })
        document.getElementById("out").innerHTML=r;
        document.getElementById("lap").innerHTML=l;
        document.getElementById("frag").innerHTML=f;
        document.getElementById("skin").innerHTML=s;
        document.getElementById("gro").innerHTML=g;
        document.getElementById("hom").innerHTML=h;
    }).catch(error=>{console.log(error);})
}
data();

document.getElementById("inp").addEventListener("keyup",()=>{
    let inp=document.getElementById("inp").value.toUpperCase();
    console.log(inp);
    fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(data=>{
        let r="";
        data.products.filter((dt)=>{
            let item=dt.title.toUpperCase();
            if(item.indexOf(inp)>-1){
                r+=`
                <div class="cards">
                    <div class="c-img">
                        <img src="${dt.thumbnail}" alt="">
                    </div>
                    <div class="c-detail">
                        <p>${dt.title}</p>
                        <p>From ₹${dt.price}</p>
                    </div>
                </div>`
            }
        })
        document.getElementById("search-out").innerHTML=r;
    })
    .catch(error=>{console.log(error);})
})

document.getElementById("count").innerHTML=localStorage.length;

