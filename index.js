
document.addEventListener("DOMContentLoaded", () => {
  const books = [
    "images/image/book_1.jpg",
    "images/image/blog_2.jpg",
    "images/image/blog_3.jpg",
    "images/image/book_4.jpg",
    "images/image/book_5.jpg",
    "images/image/book_6.jpg",
    "images/image/book_7.png",
    "images/image/book_8.png",
    "images/image/book_9.jpg",
    "images/image/book_10.png",
    "images/image/book_11.jpg",
    "images/image/book_12.png",
    "images/image/book_13.png",
    "images/image/book_14.png",
    "images/image/book_15.png"
  ];  } );


  

  

  const NewArrivals1 = [
    "image/arrival_1.jpg",
    "image/arrival_2.jpg",
    "image/arrival_3.jpg",
    "image/arrival_4.jpg",
    "image/arrival_5.jpg",
  ];
  const NewArrivals2 = [
    "image/arrival_6.jpg",
    "image/arrival_7.jpg",
    "image/arrival_8.webp",
    "image/arrival_9.jpg",
    "image/arrival_10.jpg",
  ];
  




function createBookCard(imageSrc) {
    return `
      <div class="book-card">
        <img src="${imageSrc}" alt="Book">
        <div class="Featured-Books"><span>Featured</span> <span>Books</span></div>
        <div><span class="jone-Deo">john Deo</span></div>
        <div class="Romance">
          <span>Thiller</span>, <span>Horror</span>, <span>Romance</span>
        </div>
        <div class="cost-Book"><span>$25.50</span></div>
        <div class="cost-past"><span><del>$28.60</del></span></div>
        <input class="button-learn3" type="button" value="Learn More">
      </div>
    `;
  }


  function createBookarrival(imageSrc) {
    return `
      <div class="book-arrival">
        <img src="${imageSrc}" alt="Book">
        <div class="new-arrivals"><span>New</span> <span>Arrivals</span></div>
        <div  class="star">     
<div>  <i class="fas fa-star"></i></div>
<div>   <i class="fas fa-star"></i></div>
<div>   <i class="fas fa-star"></i></div>
<div>   <i class="fas fa-star"></i></div>
<div>  <i class="fas fa-star-half-stroke"></i> </div>

</div>
        <input class="button-learn3" type="button" value="Learn More">
      </div>
    `;
  }

  
function createBookarrival2(imageSrc) {
    return `
      <div class="book-arrival2">
        <img src="${imageSrc}" alt="Book">
        <div class="new-arrivals"><span>New</span> <span>Arrivals</span></div>
        <div  class="star">     
<div>  <i class="fas fa-star"></i></div>
<div>   <i class="fas fa-star"></i></div>
<div>   <i class="fas fa-star"></i></div>
<div>   <i class="fas fa-star"></i></div>
<div>  <i class="fas fa-star-half-stroke"></i> </div>

</div>
        <input class="button-learn3" type="button" value="Learn More">
      </div>
    `;
  }


  const container1 = document.getElementById("Books-name");
  if (container1) {
    container1.innerHTML = books.map(createBookCard).join("");
  }


  const container2 = document.getElementById("New-Arrivals-book-A");
  if (container2) {
    container2.innerHTML = NewArrivals1.map(createBookarrival).join("");

    
  }

const container3 = document.getElementById("New-Arrivals-book-B");
  if (container3) {
    container3.innerHTML = NewArrivals2.map(createBookarrival2).join("");
  }



