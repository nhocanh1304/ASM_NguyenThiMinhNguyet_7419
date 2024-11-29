function addToCart(productName, productPrice) {
    // Check if there is an existing cart in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.name === productName);
  
    if (existingProduct) {
      // If the product exists, increment its quantity
      existingProduct.quantity++;
    } else {
      // If the product doesn't exist, add it to the cart
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    alert('Product added to cart!');
  
    // Redirect to the cart page
    // window.location.href = 'cart.html';
  }

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.products .box-container .box');

filterBtn.forEach(button => {

    button.onclick = () =>{
        filterBtn.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        let dataFilter = button.getAttribute('data-filter');

        filterItem.forEach(item => {
            item.classList.remove('active');
            item.classList.add('hide');

            if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                item.classList.remove('hide');
                item.classList.add('active');
            }
        });
    };
});

var swiper = new Swiper(".home-slider", {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".featured-slider", {
    centeredSlides: true,
    loop: true,
    spaceBetween:20,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
      },
});

var swiper = new Swiper(".review-slide", {
    loop: true,
    spaceBetween:20,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
      },
});

var swiper = new Swiper(".blogs-slider", {
    centeredSlides: true,
    loop: true,
    spaceBetween:20,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
      },
});

// Thanh toán sản phẩm




































// var cartIcons = document.querySelectorAll(".fas.fa-shopping-cart");
// cartIcons.forEach(function (icon) {
//     icon.addEventListener('click', function (event) {
//         // Ngăn chặn hành vi mặc định của biểu tượng giỏ hàng
//         event.preventDefault();
//         // alert("clicked!")

//         // Lấy thông tin về sản phẩm từ phần tử cha của biểu tượng giỏ hàng
//         var productContainer = icon.closest('.box');
//         var productName = productContainer.querySelector('.content').innerText;
//         var productPrice = productContainer.querySelector('.price').innerText;
//         // Thêm thông tin sản phẩm vào giỏ hàng hoặc thực hiện các hành động khác tùy thuộc vào yêu cầu của bạn
//         console.log('Đã thêm sản phẩm vào giỏ hàng:');
//         console.log('Tên sản phẩm:', productName);
//         console.log('Giá sản phẩm:', productPrice);
//     });
// });



// // Lấy thẻ bảng giỏ hàng và biểu tượng giỏ hàng
// var cartTable = document.getElementById('cart-table');
// var cartIcon = document.getElementById('cart-icons');

// // Thêm sự kiện "click" cho biểu tượng giỏ hàng
// cartIcon.addEventListener('click', function (event) {
//     // Ngăn chặn hành vi mặc định của biểu tượng giỏ hàng
//     event.preventDefault();
//     // alert("Clicked!")

//     // window.open("cart.html");

//     if (cartTable) {
//         if (cartTable.style.display === 'none') {
//             cartTable.style.display = 'block';
//         } else {
//             cartTable.style.display = 'none';
//         }
//     } else {
//         console.error("no table");
//     }
// });

// // Lấy thẻ tbody của bảng giỏ hàng và thẻ tổng giá
// var tbody = document.querySelector('#cart-table tbody');
// var totalPriceElement = document.querySelector('#total-price');

// // Tạo một biến để lưu tổng giá
// var totalPrice = 0;

// // Lặp qua danh sách các nút mua hàng và thêm sự kiện "click" cho mỗi nút
// cartIcons.forEach(function (icon) {
//     icon.addEventListener('click', function (event) {
//         event.preventDefault();

//         // Lấy thông tin về sản phẩm từ phần tử cha của biểu tượng giỏ hàng
//         var productContainer = icon.closest('.box');
//         var productName = productContainer.querySelector('.content').innerText;
//         var productPrice = parseFloat(productContainer.querySelector('.price').innerText.replace('đ', '').replace('.', ''));

//         // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
//         var existingProductRow = tbody.querySelector('tr[data-product-name="' + productName + '"]');
//         if (existingProductRow > 0) {
//             // Nếu sản phẩm đã tồn tại, tăng số lượng sản phẩm
//             var quantityElement = existingProductRow.querySelector('.quantity');
//             var quantity = parseInt(quantityElement.textContent);
//             quantity++;
//             quantityElement.textContent = quantity;
//         } else {
//             // Nếu sản phẩm chưa tồn tại, thêm mới vào bảng giỏ hàng
//             var newRow = document.createElement('tr');
//             newRow.dataset.productName = productName; // Lưu tên sản phẩm vào thuộc tính dataset để kiểm tra lại
//             newRow.innerHTML = `
//                 <td>${productName}</td>
//                 <td class="quantity">1</td>
//                 <td>${productPrice}đ</td>

//             `;
//             tbody.appendChild(newRow);
//         }

//         // Cập nhật tổng giá
//         totalPrice += productPrice;
//         totalPriceElement.textContent = 'Tổng giá: ' + totalPrice + 'đ';
//     });
// });