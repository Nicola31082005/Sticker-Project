import { html } from "lite-html";

const template = (cartItems, totalPrice) => html`
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Checkout</h1>
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <!-- Cart Items Summary -->
      <h2 class="text-xl font-semibold mb-4">Your Cart</h2>
      ${cartItems.map(
        (item) => html`
          <div class="flex items-center border-b border-gray-200 py-4">
            <img src=${item.image} alt="Sticker" class="w-16 h-16 object-cover rounded-lg" />
            <div class="ml-4 flex-grow">
              <p class="text-lg font-semibold">Custom Sticker</p>
              <p class="text-gray-600">Size: ${item.size} | Material: ${item.material}</p>
              <p class="text-gray-600">Quantity: ${item.quantity}</p>
              <p class="text-gray-600">Price: $${item.price.toFixed(2)} each</p>
            </div>
          </div>
        `
      )}

      <!-- Total Price -->
      <div class="mt-6 text-right">
        <p class="text-xl font-semibold">Total: $${totalPrice.toFixed(2)}</p>
      </div>

      <!-- Shipping Details Form -->
      <h2 class="text-xl font-semibold mt-8 mb-4">Shipping Information</h2>
      <form action="/submit-order" method="POST">
          <div class="mb-4">
            <label for="name" class="block text-gray-700">Email</label>
            <input type="text" id="name" name="email" class="w-full p-3 border border-gray-300 rounded-md" required />
          </div>
        <div class="mb-4">
          <label for="name" class="block text-gray-700">Full Name</label>
          <input type="text" id="name" name="name" class="w-full p-3 border border-gray-300 rounded-md" required />
        </div>
        <div class="mb-4">
          <label for="city" class="block text-gray-700">City</label>
          <input type="text" id="city" name="city" class="w-full p-3 border border-gray-300 rounded-md" required />
        </div>
        <div class="mb-4">
          <label for="address" class="block text-gray-700">Shipping Address</label>
          <input type="text" id="address" name="address" class="w-full p-3 border border-gray-300 rounded-md" required />
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-gray-700">Phone Number</label>
          <input type="tel" id="phone" name="phone" class="w-full p-3 border border-gray-300 rounded-md" required />
        </div>


        <!-- Confirm Order Button -->
        <div class="mt-6 text-right">
          <button type="submit" class="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors">
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  </div>
`;

export function checkoutView(ctx) {
  // Example cart data (replace with actual data from your state or backend)
  const cartItems = [
    {
      id: 1,
      image: "/public/images/stickers/sticker1.png",
      size: "Medium",
      material: "Glossy",
      quantity: 2,
      price: 5.0,
    },
    {
      id: 2,
      image: "/public/images/stickers/sticker2.png",
      size: "Small",
      material: "Matte",
      quantity: 1,
      price: 3.0,
    },
  ];
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Render the checkout template
  const checkoutTemplate = template(cartItems, totalPrice);
  ctx.render(checkoutTemplate);
}
