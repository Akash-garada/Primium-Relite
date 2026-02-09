
document.addEventListener("DOMContentLoaded", () => {

  const products = [
    {
      id: 1,
      name: "Relite Raw Hoodie",
      price: "₹1,999",
      images: [
        "images/hoodie1.jpg",
        "images/hoodie2.jpg"
      ],
      details: "Premium oversized hoodie with luxury feel.",
      colors: ["Black", "Grey"]
    }
  ];

  const params = new URLSearchParams(window.location.search);
  const productId = Number(params.get("id"));

  const product = products.find(p => p.id === productId);

  if (!product) {
    console.log("Product not found");
    return;
  }

  document.getElementById("pName").innerText = product.name;
  document.getElementById("pPrice").innerText = product.price;
  document.getElementById("pDetails").innerText = product.details;

  const mainImage = document.getElementById("mainImage");
  mainImage.src = product.images[0];

  const thumbs = document.getElementById("thumbs");
  thumbs.innerHTML = "";

  product.images.forEach(img => {
    const t = document.createElement("img");
    t.src = img;
    t.onclick = () => mainImage.src = img;
    thumbs.appendChild(t);
  });

  const colorBox = document.getElementById("colorBox");
  colorBox.innerHTML = "";

  product.colors.forEach(color => {
    const c = document.createElement("button");
    c.innerText = color;
    colorBox.appendChild(c);
  });

});