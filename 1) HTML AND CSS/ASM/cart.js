document.addEventListener('DOMContentLoaded', function() {
    // Get cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Select the cart-items list, total price element, and checkout button
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-btn');
  
    // Initialize total price
    let totalPrice = 0;
  
    // Check if cart is empty
    if (cart.length === 0) {
      cartItemsList.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      // Loop through cart items and display them
      cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Price: $${item.price} - Quantity: ${item.quantity}`;
  
        // Add a button to remove the item from cart
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeItemFromCart(index));
  
        listItem.appendChild(removeButton);
        cartItemsList.appendChild(listItem);
  
        // Calculate total price
        totalPrice += item.price * item.quantity;
      });
    }
  
    // Display total price
    totalPriceElement.textContent = totalPrice;
  
    // Checkout event listener
    checkoutButton.addEventListener('click', () => {
      // Perform checkout logic (you can replace this with your own checkout process)
      if(cart.length === 0){
        alert('There are no products to checkout!');
      }else{
        alert('Payment success!');
      }
  
      // Clear cart after checkout
      clearCart();
    });
  });
  
  // Function to remove item from cart
  function removeItemFromCart(index) {
    // Get cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Remove the item at the specified index
    cart.splice(index, 1);
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Reload the page to reflect the changes
    location.reload();
  }
  
  // Function to clear cart after checkout
  function clearCart() {
    // Clear localStorage cart
    localStorage.removeItem('cart');
  
    // Redirect to the cart page (optional)
    location.href = 'cart.html';
  }
  document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
  });
  
  function updateCartDisplay() {
    let cartItemsList = document.getElementById('cart-items');
    let totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsList.innerHTML = '';
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Price: $${item.price}`;
  
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.min = '1';
        quantityInput.addEventListener('change', (event) => {
            updateQuantity(index, event.target.value);
        });
        listItem.appendChild(quantityInput);
  
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeItemFromCart(index));
        listItem.appendChild(removeButton);
        cartItemsList.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });
    totalPriceElement.textContent = totalPrice;
  }
  
  function updateQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }
  





















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
//         // alert("Clicked!")
//         // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
//         var existingProductRow = tbody.querySelectorAll('tr[data-product-name="' + productName + '"]');
//         if (existingProductRow) {
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