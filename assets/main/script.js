
let specs=document.getElementsByClassName("spec-Details");
let view=document.getElementsByClassName("spec-button");
let card=document.getElementsByClassName("card-tab");
let caret=document.getElementsByClassName("bi-caret-down-fill");
let cart=document.getElementsByClassName("cart3");
let price=document.getElementsByClassName("original");
let discounted=document.getElementsByClassName("actual");
let navItem=document.getElementsByClassName("nav-item");
let navLink=document.getElementsByClassName("nav-link");
let navig=document.getElementsByClassName("slideNavigation");
let SlideLink=document.getElementsByClassName("slidelink");
let FloatLink=document.getElementsByClassName("float-navlink");
let navIcon=document.getElementsByClassName("icon");
let tabContent=document.getElementsByClassName("tab-content");
let product=document.getElementsByClassName("product-list")[0];
let product_name=document.getElementsByClassName("product-name");
let tradeMark=document.getElementsByClassName("trademark");
const PageCardLimit=12;




const classes=['bi-house', 'bi-bag', 'bi-nut', 'bi-phone'];
const fillElmt=['bi-house-fill', 'bi-bag-fill', 'bi-nut-fill', 'bi-phone-fill'];

window.onload= function (){EventListenerAdder(), hideToTop(), calculatePrice(), SetupShopCards(), PreloadFunctions()};
window.onscroll= function(){hideToTop()};

//Card dropdown oncick
function DropDown(i){
    view[i].addEventListener("click", function (){
    specs[i].classList.toggle("visible");
    card[i].classList.toggle("expand");
    caret[i].classList.toggle("rotateCaret");
    cart[i].classList.toggle("TranslateCart");
    });
}

//EventListener Adding Loop
function EventListenerAdder(){

  for(i=0;i<cardTab.length;i++){
    clickCard(i);
  }

  for(i=0;i<view.length;i++){
    DropDown(i);
  }

  for(i=0;i<4;i++){
    Fill(i);
    Unfill(i);
  }

  for(i=0;i<BrandBlock.length;i++){
    clickBrand(i);
  }

  for(i=0;i<cartButton.length;i++){
    clickCartIcon(i);
  }

  for(i=0;i<incr.length;i++){
    VaryQty(i);
  }

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



//On card click
let cardTab = document.getElementsByClassName("card-img");
let StarContainer= document.getElementsByClassName('stars')

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

//Onclick Brand Block

let BrandBlock=document.getElementsByClassName('BrandBlock');

function clickBrand(i){
  BrandBlock[i].addEventListener('click', function(){
  sessionStorage.setItem('Brand',BrandBlock[i].textContent.toUpperCase());
  sessionStorage.setItem('ShopTab', 'Smart');
  window.location.href='./Shop.html';
  })
}

//Weekly CLick
function weekly(){
  sessionStorage.setItem('Brand', 'APPLE');
  sessionStorage.setItem('ShopTab', 'Week');
  window.location.href='./Shop.html';
}

function Best(){
  sessionStorage.setItem('Brand', 'APPLE');
  sessionStorage.setItem('ShopTab', 'Best');
  window.location.href='./Shop.html';
}



//Shop Script

const ActiveShopTab=['Smart', 'Week', 'Best'];
let shopTab=document.getElementsByClassName('tabButton');
let Brands = document.getElementsByClassName('brandOPtion');

function PreloadFunctions(){
    for(i=0;i<shopTab.length;i++){
        SwitchShopTab(i);
      }
    
      for(i=0;i<pageButton.length;i++){
        Pagination(i);
      }

      for(i=0;i<Brands.length;i++){
        ChooseBrand(i);
      }
}

function SwitchShopTab(i){
    shopTab[i].addEventListener('click', function(){
      sessionStorage.setItem('ShopTab', ActiveShopTab[i]);
      sessionStorage.setItem('PageNumber','1');
      SetupShopCards();
      var j=0;
      for(j;j<shopTab.length;j++){
        if(j==i){
          shopTab[j].classList.add("selected");
          if(i==1) document.getElementsByClassName('tab-badge')[0].style.backgroundColor="black"; 
          else document.getElementsByClassName('tab-badge')[0].style.backgroundColor="red";
          continue;
        }
        shopTab[j].classList.remove("selected");
      }
    })
  }
  
 let pageButton=document.getElementsByClassName("pageButton");
  
  function Pagination(i){
    pageButton[i].addEventListener('click', function(){
      sessionStorage.setItem('PageNumber', i+1);
      pageButton[i].classList.add('selected');
      var j=0;
      for(j;j<pageButton.length;j++){
        if(j!=i) pageButton[j].classList.remove('selected');
      }
      SetupShopCards();
    });
  }

  function ChooseBrand(i){
    Brands[i].addEventListener('click', function(){
      Brands[i].classList.add('chosen');
      document.getElementById('ChosenBrand').textContent=Brands[i].textContent;
      sessionStorage.setItem('Brand',Brands[i].textContent);
      sessionStorage.setItem('PageNumber','1');
      SetupShopCards();
      var j=0;
      for(j;j<Brands.length;j++){
        if(i==j)continue;
        Brands[j].classList.remove('chosen');
      }
    })
  }

  let Card = document.getElementsByClassName('card-tab');

  function SetupShopCards(){
    KeepState();
    let TabShop=sessionStorage.getItem('ShopTab');
    let Brand=sessionStorage.getItem('Brand');
    let ShowCard=document.getElementsByClassName(TabShop+' '+Brand);

    let CardNumber=ShowCard.length;
    let NumOfPages= Math.ceil(CardNumber/PageCardLimit);
    var j=0;
    //Remove Current pageButton
    while(pageButton[0]){
      pageButton[0].remove();
    }
    //End of Page number removal

    if(NumOfPages>1){
      for(j=1;j<NumOfPages+1;j++){
        let NewPagination=document.createElement('button');
        NewPagination.innerHTML=j;
        NewPagination.classList.add('pageButton');
        if(j==parseInt(sessionStorage.getItem('PageNumber'),10))NewPagination.classList.add('selected');
        document.getElementsByClassName('pagination')[0].appendChild(NewPagination);
        Pagination(pageButton.length-1);
      }
    }
    
    for(j=0;j<Card.length;j++){
      Card[j].classList.remove('ShowCard');
    }

      for(j=0;j<(PageCardLimit);j++){
        if((PageCardLimit*(parseInt(sessionStorage.getItem('PageNumber'),10)-1)+j)==ShowCard.length)break;
        ShowCard[PageCardLimit*(parseInt(sessionStorage.getItem('PageNumber'),10)-1)+j].classList.add('ShowCard');
    }

      document.getElementsByClassName('smallText')[0].scrollIntoView();
  }


  function KeepState(){
    if(sessionStorage.getItem('Brand')==null || sessionStorage.getItem('ShopTab')==null){
      sessionStorage.setItem('Brand','APPLE');
      sessionStorage.setItem('ShopTab',ActiveShopTab[0]);
    }

    var j;
    for(j=0;j<shopTab.length;j++){
      if(ActiveShopTab[j]==sessionStorage.getItem('ShopTab')){
        if(j==1)document.getElementsByClassName('tab-badge')[0].style.backgroundColor="black"; 
        else document.getElementsByClassName('tab-badge')[0].style.backgroundColor="red";
        shopTab[j].classList.add('selected');
        continue;
      }
      shopTab[j].classList.remove('selected');
    }
    
    for(j=0;j<Brands.length;j++){
      if(Brands[j].textContent==sessionStorage.getItem('Brand')){
        Brands[j].classList.add('chosen');
        document.getElementById('ChosenBrand').textContent=Brands[j].textContent;
        continue;
      }
      Brands[j].classList.remove('chosen');
    }
    //Keep CurrentPage
    if(sessionStorage.getItem('PageNumber')==null)sessionStorage.setItem('PageNumber','1');
  }




  //AddingToCart

  let cartButton= document.getElementsByClassName('cart3');
  let BadgeNumber=document.getElementsByClassName('nav-badge');
  let CartAlert=document.getElementById('cart-alert');
  let CartProduct=document.getElementsByClassName('cartProduct-name');

  function clickCartIcon(i){
    cartButton[i].addEventListener('click', function(){
      var z;
      for(z=0;z<CartProduct.length;z++){
        if(product_name[i]==CartItem[i]){
          CartAlert.classList.add('alert');
        }
      }
      BadgeNumber[0].textContent= parseInt(BadgeNumber[0].textContent, 10)+1;
    })
  }
 
  let incr=document.getElementsByClassName('incr');
  let decr=document.getElementsByClassName('decr');
  let qtyBar=document.getElementsByClassName('qtyBar');


  function VaryQty(i){
    incr[i].addEventListener('click', function(){
      let x=parseInt(qtyBar[i].value,10);
      x++;
      qtyBar[i].value=x;
    })
    
   decr[i].addEventListener('click', function(){
    let x=parseInt(qtyBar[i].value,10);
    if(x>1){
      x--;
      qtyBar[i].value=x;
    }
   })
    
  }
