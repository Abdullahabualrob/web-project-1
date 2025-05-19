
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


  const container1 = document.getElementById("Books-name");
  if (container1) {
    container1.innerHTML = books.map(createBookCard).join("");
  }