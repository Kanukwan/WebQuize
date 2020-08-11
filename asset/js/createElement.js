function createMenu(elementMenu){

    let arr_food = ["tacos","beers","wines","desserts","reservations"];

    var dom_elementmenu = arr_food.map((food)=>{

        var btn = document.createElement("BUTTON");
        btn.setAttribute("id", food);
        btn.innerText = food;

        elementMenu.appendChild(btn);

        return btn;
    })
}