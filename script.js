
function orderNow(productName, price) {
  const phoneNumber = "917008815216"; // 
  const message = `Hi Relite Clothing, I want to order ${productName} priced at ${price}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
// ===============================
// UNIVERSAL PRODUCT SYSTEM
// ===============================

// PRODUCT CLICK → SAVE DATA
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {

    const product = {
      name: card.dataset.name,
      price: card.dataset.price,
      color: card.dataset.color,
      image: card.dataset.image,
      desc: card.dataset.desc
    };

    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "product.html";
  });
});

// LOAD PRODUCT ON PRODUCT PAGE
const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {
  document.getElementById("pName").innerText = product.name;
  document.getElementById("pPrice").innerText = product.price;
  document.getElementById("pColor").innerText = product.color;
  document.getElementById("pImage").src = product.image;
  document.getElementById("pDesc").innerText = product.desc;

  document.getElementById("whatsappBtn").onclick = () => {
    const msg = `Hi Relite Clothing, I want to order ${product.name} (${product.price})`;
    window.open(`https://wa.me/917008815216?text=${encodeURIComponent(msg)}`);
  };
}