const normalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        normalObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  const multiObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        multiObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  
  document.querySelectorAll("section:not(.multi-product)").forEach(sec => {
    normalObserver.observe(sec);
  });
  
  const multiProduct = document.querySelector(".multi-product");
  if (multiProduct) multiObserver.observe(multiProduct);
  