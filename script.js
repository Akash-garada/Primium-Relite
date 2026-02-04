
function orderNow(productName, price) {
  const phoneNumber = "917008815216"; // apna WhatsApp number
  const message = `Hi Relite Clothing, I want to order ${productName} priced at ${price}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}