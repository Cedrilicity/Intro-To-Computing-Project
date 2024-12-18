document.addEventListener("DOMContentLoaded", () => {
  
  const phonePrices = [
    { name: "Pixel 9 Pro and Pro XL", price: "₱49,999.00" },
    { name: "Pixel 9", price: "₱39,999.00" },
    { name: "Pixel 9 Pro Fold", price: "₱64,999.00" },
    { name: "Pixel 8 Pro", price: "₱38,499.00" },
    { name: "Pixel 8", price: "₱29,999.00" },
    { name: "Pixel 8a", price: "₱24,499.00" },
  ];

  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const phones = document.querySelectorAll(".phones");

  const openModal = (phone) => {
    const phoneName = phone.querySelector(".phoneName").textContent;
    const phoneData = phonePrices.find((item) => item.name === phoneName);

    modal.querySelector(".modelphone p").textContent = phoneName;
    modal.querySelector(".modal-image img").src = phone.querySelector(".phoneImage").src;
    modal.querySelector(".price p").textContent = phoneData ? phoneData.price : "Price not available";
    
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  phones.forEach((phone) => {
    phone.addEventListener("click", () => openModal(phone));
  });

  const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  overlay.addEventListener("click", closeModal);

});
