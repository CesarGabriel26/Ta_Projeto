const Banner = (id,img,title,subtext) => `
    <div class="carousel-item ${(id == 0)? "active": ""}">
        <img src="${img}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
        <h5>${title}</h5>
        <p>${subtext}</p>
        </div>
    </div>
`

async function LoafBanners() {
    const response = await fetch("../db/Banners.json");
    const Banners = await response.json();
    

    Banners.forEach((B,id) => {
        document.querySelector('.carousel-inner').innerHTML += Banner(id,B.img,B.title,B.subtext)
    });


}
LoafBanners()