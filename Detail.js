let image=document.getElementsByClassName("image");
let rate=document.getElementsByClassName("rate");
let shopTab=document.getElementsByClassName('tabButton');
let panel=document.getElementsByClassName("panel");
let Clickable=document.getElementsByClassName("panelClickable");
let panelContent=document.getElementsByClassName("PanelContent");
let panelIcon=document.getElementsByClassName("PanelIcon");
let price=document.getElementsByClassName("original");
let discounted=document.getElementsByClassName("actual");
let specs=document.getElementsByClassName("spec-Details");
let view=document.getElementsByClassName("spec-button");
let cardTab=document.getElementsByClassName("card-img");
let card=document.getElementsByClassName("card-tab");
let caret=document.getElementsByClassName("bi-caret-down-fill");
let cart=document.getElementsByClassName("cart3");
let navItem=document.getElementsByClassName("nav-item");
let navLink=document.getElementsByClassName("nav-link");
let navig=document.getElementsByClassName("slideNavigation");
let SlideLink=document.getElementsByClassName("slidelink");
let FloatLink=document.getElementsByClassName("float-navlink");
let navIcon=document.getElementsByClassName("icon");
let ShopNavLink=document.getElementsByClassName("Shop-link");
let product_name=document.getElementsByClassName("product-name");
let tradeMark=document.getElementsByClassName("trademark");

const classes=['bi-house', 'bi-bag', 'bi-gear', 'bi-phone'];
const fillElmt=['bi-house-fill', 'bi-bag-fill', 'bi-gear-fill', 'bi-phone-fill'];


function AddEvent(){
    for(i=0;i<panel.length;i++){
       IntAccordian(i);
    }

    for(i=0;i<color.length;i++){
        colorPick(i);
    }

    for(i=0;i<image.length;i++){
        ChangeImage(i);
    }

    for(i=0;i<rate.length;i++){
        Rate(i);
    }

    for(i=0;i<view.length;i++){
        DropDown(i);
      }

    for(i=0;i<4;i++){
        Fill(i);
        Unfill(i);
      }

    for(i=0;i<ShopNavLink.length;i++){
        BackToIndex(i);
    }

    for(i=0;i<cardTab.length;i++){
        clickCard(i);
      }
}







function IntAccordian(i){
  Clickable[i].addEventListener('click', function(){
    if(Clickable[i].classList.contains('panelActive')){
       panel[i].classList.remove('panelOpen');
       panelContent[i].classList.remove('contentOpen');
       Clickable[i].classList.remove('panelActive');
       panelIcon[i].textContent="+";
    }
    else{
       panel[i].classList.add('panelOpen');
       panelContent[i].classList.add('contentOpen');
       Clickable[i].classList.add('panelActive');
       panelIcon[i].textContent="-";
       var j=0;
       for(j;j<panel.length;j++){
        if(j!=i){
          panel[j].classList.remove('panelOpen');
          panelContent[j].classList.remove('contentOpen');
          Clickable[j].classList.remove('panelActive');
          panelIcon[j].textContent="+";
        }
       }
    }
  });
}

let color=document.getElementsByClassName("color");

function colorPick(i){
  color[i].addEventListener('click', function(){
    color[i].classList.add("ChosenColor");
    var j=0;
    for(j;j<color.length;j++){
      if(i!=j){
        color[j].classList.remove("ChosenColor");
      }
    }
  })
}

function incr_Qty(){
    let x=parseInt(document.getElementById("qtyBar").value,10);
    x++;
    document.getElementById("qtyBar").value=x;
  }
  
  function decr_Qty(){
    let x=parseInt(document.getElementById("qtyBar").value,10);
    if(x>1){
      x--;
      document.getElementById("qtyBar").value=x;
    }
  }

  function Rate(i){
    rate[i].addEventListener("click", function(){
      if(i==0 || (rate[i].classList.contains("bi-star") && rate[i-1].classList.contains("bi-star-fill"))){
        rate[i].classList.add("bi-star-fill");
        rate[i].classList.remove("bi-star");
      }
  
        else{
          if((i==rate.length-1 && rate[i].classList.contains("bi-star-fill")) || !(rate[i+1].classList.contains("bi-star-fill"))){
          rate[i].classList.add("bi-star");
          rate[i].classList.remove("bi-star-fill");}
        }
    })
  }

  //Change Image on click

function ChangeImage(i){
    image[i].addEventListener("click", function(){
      image[i].classList.add("chosen");
      var j=0;
      for(j;j<image.length;j++){
        if(i!=j){
          image[j].classList.remove("chosen");
        }
      }
      
      document.getElementById("mainChoice").setAttribute("src",image[i].getAttribute("src"));
    })
  }

  function DropDown(i){
    view[i].addEventListener("click", function (){
    specs[i].classList.toggle("visible");
    card[i].classList.toggle("expand");
    caret[i].classList.toggle("rotateCaret");
    cart[i].classList.toggle("TranslateCart");
    });
}

//Side NavbarSlider
function SlideNav(){
    navig[0].classList.add("expandSlide");
    body=document.getElementsByTagName("section");
    for(i=0;i<body.length;i++){
      body[i].style.filter="blur(1px)";
    }
    document.getElementById('navigationBar').style.filter="blur(1px)";
  }
  
  function CollapseNav(){
    navig[0].classList.remove("expandSlide");
    body=document.getElementsByTagName("section");
    for(i=0;i<body.length;i++){
    body[i].style.filter="none";
    document.getElementById('navigationBar').style.filter="none";
    }
  }
  
  //NavIconFill
  function Fill(i){
     navLink[i].addEventListener("mouseover", function(){
     var iconFiller=document.getElementsByClassName(classes[i]);
     iconFiller[0].classList.add(fillElmt[i]);
     iconFiller[0].classList.remove(classes[i]);
     });
  }
  
  function Unfill(i){
      navLink[i].addEventListener("mouseout", function(){
      var iconFiller=document.getElementsByClassName(fillElmt[i]);
      if(navItem[i].textContent!=document.getElementsByClassName("active")[0].textContent){
        iconFiller[0].classList.add(classes[i]);
        iconFiller[0].classList.remove(fillElmt[i]);
      }
      });
  }

  function calculatePrice(){
    var i;
    for(i=0;i<price.length;i++){
      var x=price[i].textContent;
      var y=0.7*parseFloat(x.replace(",",""));
      discounted[i].textContent=y.toFixed(2);
    }
   }
  
   function hideToTop(){
      if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
          document.getElementById("toTop").style.display="block";
      document.getElementById("navigationBar").style.boxShadow="0px 0px 16px rgb(82, 82, 82)";
      }
      else{
          document.getElementById("toTop").style.display="none";
      document.getElementById("navigationBar").style.boxShadow="none";
      }
   }
  
  function scrollToTop(){
      document.documentElement.scrollTop=-25;
      document.body.scrollTop=0;
  }

  function BackToIndex(i){
    ShopNavLink[i].addEventListener('click', function(){
      window.location.href="./index.html";
      var tab=i%4;
      sessionStorage.setItem('tab', tab);
    });
  }

  //On card click
  function clickCard(i){
      cardTab[i].addEventListener("click", function(){
      sessionStorage.setItem('name',product_name[i].textContent);
      sessionStorage.setItem('trademark',tradeMark[i].textContent);
      sessionStorage.setItem('price', price[i].textContent);
      sessionStorage.setItem('salePrice', discounted[i].textContent);
      sessionStorage.setItem('stars', StarContainer[i].innerHTML);
      sessionStorage.setItem("Image",cardTab[i].getAttribute('src'));
      window.location.href="./Detail.html";
    })
  }

  function SetupImage(){
    document.getElementById('mainChoice').setAttribute('src', sessionStorage.getItem('Image'));
  }

  //Setup detail

  function SetupDetail(){
    let Price= document.getElementsByClassName('DetailPrice')[0];
    let ActualPrice=document.getElementsByClassName('originalPrice')[0];
    let prod_Name=document.getElementsByClassName("productName")[0];
    let BrandName=document.getElementsByClassName("brandName")[0];
    let StarRating=document.getElementsByClassName('rating')[0];
    prod_Name.innerHTML=sessionStorage.getItem('name');
    BrandName.innerHTML=sessionStorage.getItem('trademark');
    Price.textContent=sessionStorage.getItem('salePrice');
    ActualPrice.textContent=sessionStorage.getItem('price');
    StarRating.innerHTML=sessionStorage.getItem('stars');
  }



  window.onload=function(){ AddEvent(), calculatePrice(), scrollToTop(), SetupImage(), SetupDetail()}
  window.onscroll=function(){ hideToTop() }