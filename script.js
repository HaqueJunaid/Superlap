document.querySelector(".openMenu").addEventListener("click", function () {
    document.querySelector(".menu").classList.add("open")
})

document.querySelector(".closeMenu").addEventListener("click", function () {
    document.querySelector(".menu").classList.remove("open")
})

function injectItem() {
    let obj = [
        {
            type: "Type",
            duration: "Duration",
            price: "Price"
        },
        {
            type: "coffee with coach",
            duration: "1 HR",
            price: "$40.00"
        },
        {
            type: "drill mode",
            duration: "1 HR",
            price: "$50.00"
        },
        {
            type: "Feature Race",
            duration: "2 HR",
            price: "$90.00"
        },
        {
            type: "first drive",
            duration: "1 HR",
            price: "$50.00"
        },
        {
            type: "Night moves",
            duration: "1-2 HR",
            price: "from $50.00"
        },
        {
            type: "open drive",
            duration: "5-pack",
            price: "$212.00"
        },
        {
            type: "pckg, corsa",
            duration: "2 HR",
            price: "from $80.00"
        },
        {
            type: "pckg, volex",
            duration: "10-pack",
            price: "$312.00"
        },
        {
            type: "The Membership - club racer",
            duration: "unlimited",
            price: "$500.00"
        },
        {
            type: "time attack",
            duration: "1 HR",
            price: "$40.00"
        },

    ]
    let clutter = ``;
    let pusher = document.querySelector(".pusher")
    obj.forEach(elem => {
        let element = `<li class="hoverme">
                        <span>${elem.type}</span>
                        <span class="center">${elem.duration}</span>
                        <span>${elem.price}</span>
                    </li>`

        clutter = clutter + element;
    })

    pusher.innerHTML = clutter;
}
injectItem();


let imageSource = [
    "./Images/10.png",
    "./Images/9.svg",
    "./Images/8.svg",
    "./Images/7.svg",
    "./Images/6.svg",
    "./Images/5.svg",
    "./Images/4.png",
    "./Images/3.png",
    "./Images/2.svg",
    "./Images/1.svg",
]
function mouseIn() {
    document.getElementById("addImage").style.display = "none"
    let items = document.querySelectorAll(".hoverme");
    items.forEach((item, index) => {
        if (index > 0) {
            index = index - 1;
            item.addEventListener("mouseover", () => {
                document.getElementById("addImage").style.display = "block"
                document.getElementById("addImage").src = imageSource[index]
            })
        } 
    })
}

function mouseOut() {
    let items = document.querySelectorAll(".hoverme");
    items.forEach((item) => {
        item.addEventListener("mouseleave", () => {
            document.getElementById("addImage").style.display = "none"
        })
    })
}

mouseOut();
mouseIn();