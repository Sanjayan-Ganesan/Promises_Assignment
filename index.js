
var display = document.getElementById("container")



function order_food(){
    let timer = Math.round(Math.random() * (10 - 1) + 1);
    var status;
if(timer % 2 == 0){
    status = true;
}else{
    status = false;
}

let promise = new Promise(function(resolve,reject){

    if(status == true){
        resolve(`Restaruant is Open and Place your Order`);
        
    }else{
        reject(`Sorry the Restaurant is Closed`);
        
    }

});
    

promise.then(function(res){
    append_data();
    console.log(`res:`,res);
});

promise.catch(function(err){
    append_nodata();
    console.log(`err:`,err);
});
   
}

order_food();




function append_data(){
    document.getElementById("container").innerHTML = "";
    var selected = document.getElementById("order_food").value;
    console.log(selected);
    var logo = document.getElementById("Mcdonalds").value;
    var food_1 = document.getElementById("burger").value;
    var food_2 = document.getElementById("Coffee").value;
    var food_3 = document.getElementById("Chicken").value;
var main_div = document.createElement("div");
if(selected == logo){
    var logo = document.createElement("img");
    logo.src = "https://www.wgoqatar.com/wp-content/uploads/2020/01/Qatar_Dukhan_1_McDonalds.jpeg";
    logo.style.width = `500px`;
   logo.style.height = `345px`;
    logo.style.marginTop =`-5%`

    main_div.append(logo);
    container.append(main_div);

}
else if(selected == food_1){

    var burger_image = document.createElement("img");
    burger_image.src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=60";
    burger_image.style.width = `500px`;
    burger_image.style.height = `345px`;
    burger_image.style.marginTop =`-5%`;
    main_div.append(burger_image);
    container.append(main_div);
}else if(selected == food_2){
    var coffee_image = document.createElement("img");
    coffee_image.src = "https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-CAPPUCCINO-BANANA-SESAME-SEEDS.jpg";
    coffee_image.style.width = `500px`;
    coffee_image.style.height = `345px`;
    coffee_image.style.marginTop =`-5%`

    main_div.append(coffee_image);
    container.append(main_div);

}else if(selected == food_3){
    var chicken_image = document.createElement("img");
    chicken_image.src = "https://www.thespruceeats.com/thmb/RuiS8PlPaUkJFbrH8skujr90Q8A=/1500x1000/filters:fill(auto,1)/terris-crispy-fried-chicken-legs-3056879-10_preview-5b05ec40a474be00362260d7.jpeg";
    chicken_image.style.width = `500px`;
    chicken_image.style.height = `345px`;
    chicken_image.style.marginTop =`-5%`

    main_div.append(chicken_image);
    container.append(main_div);

}
    

}



function append_nodata(){
    document.getElementById("container").innerHTML = "";

    var no_main_div =  document.createElement("div");

    var no_img = document.createElement("img");
    no_img.src = "https://s3.eu-west-1.amazonaws.com/presspage-production-content/uploads/2170/sorry_we_re_closed.jpg";
    no_img.style.width = `500px`;
    no_img.style.height = `345px`;
    no_img.style.marginTop =`-5%`
    no_main_div.append(no_img);
    container.append(no_main_div);
    
}