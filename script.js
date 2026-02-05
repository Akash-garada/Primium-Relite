
function orderNow(productName, price) {
  const phoneNumber = "917008815216"; // 
  const message = `Hi Relite Clothing, I want to order ${productName} priced at ${price}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
// PRODUCT PAGE DATA LOAD
const params = new URLSearchParams(window.location.search);

const productData = {
  hoodie: {
    name: "RAW HOODIE",
    price: "₹1,999",
    color: "Black",
    image: "images/20250629_163350_0000.jpg",
    desc: "Premium quality cotton hoodie with luxury finish."
  }
};

const productKey = params.get("product");

if (productData[productKey]) {
  document.getElementById("productName").innerText = productData[productKey].name;
  document.getElementById("productPrice").innerText = productData[productKey].price;
  document.getElementById("productColor").innerText = productData[productKey].color;
  document.getElementById("productImage").src = productData[productKey].image;
  document.getElementById("productDesc").innerText = productData[productKey].desc;

  document.getElementById("orderBtn").onclick = function () {
    const msg = `Hi Relite Clothing, I want to order ${productData[productKey].name} (${productData[productKey].price})`;
    window.open(
      `https://wa.me/917008815216?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };
}