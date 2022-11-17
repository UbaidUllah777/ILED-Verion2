const ElidHeaderSales = document.getElementById("idHeaderSales");
const ElidHeaderService = document.getElementById("idHeaderService");
const ElidHeaderFacebook = document.getElementById("idHeaderFacebook");
const ElidHeaderTwitter = document.getElementById("idHeaderTwitter");
const ElidHeaderInstagram = document.getElementById("idHeaderInstagram");
const ElidHeaderGetQuote = document.getElementById("idHeaderGetQuote");
const ElidHeaderLogo = document.getElementById("idHeaderLogo");
const ElidHeaderLinkHome = document.getElementById("idHeaderLinkHome");
const ElidHeaderLinkAboutUs = document.getElementById("idHeaderLinkAboutUs");
const ElidHeaderlinkProducts = document.getElementById("idHeaderlinkProducts");
const ElidHeaderLinkMarkets = document.getElementById("idHeaderLinkMarkets");
const ElidHeaderLinkSupport = document.getElementById("idHeaderLinkSupport");
const ElidHeaderLinkContactUs = document.getElementById(
  "idHeaderLinkContactUs"
);
// Rendering Header Elements
ElidHeaderSales.innerHTML = `
Sales:
<a
  href="tel:+1234567890"
  class="text-color-dark text-color-hover-primary text-decoration-none"
  ><strong>123-456-789</strong></a
>
`;

ElidHeaderService.innerHTML = `
Services:
<a
  href="tel:+1234567890"
  class="text-color-dark text-color-hover-primary text-decoration-none"
  ><strong>123-456-789</strong></a
>`;
ElidHeaderFacebook.innerHTML = ` <a
href="http://www.facebook.com/"
target="_blank"
title="Facebook"
><i class="fab fa-facebook-f"></i
></a>`;
ElidHeaderTwitter.innerHTML = ` <a
href="http://www.twitter.com/"
target="_blank"
title="Twitter"
><i class="fab fa-twitter"></i
></a>`;

ElidHeaderInstagram.innerHTML = ` <a
href="http://www.instagram.com/"
target="_blank"
title="Instagram"
><i class="fab fa-instagram"></i
></a>`;

ElidHeaderGetQuote.innerHTML = `
<svg
  class="custom-svg-btn-background"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewBox="0 0 210 70"
  preserveAspectRatio="none"
>
  <polygon
    fill="none"
    stroke="#D4D4D4"
    stroke-width="2"
    stroke-miterlimit="10"
    points="7,5 185,5 205,34 186,63 7,63 "
  />
</svg>
GET A QUOTE
<svg
  class="custom-svg-btn-arrow"
  version="1.1"
  viewBox="0 0 15.698 8.706"
  width="17"
  xml:space="preserve"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <polygon
    stroke="#FFF"
    stroke-width="0.4"
    fill="#FFF"
    points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 "
  />
</svg>`;

ElidHeaderLogo.src = `img/demos/industry-factory/logo.png`;
// ElidHeaderLogo.style.width = `123`;
// ElidHeaderLogo.style.height = `23`;

ElidHeaderLinkHome.textContent = `Home`;
ElidHeaderLinkHome.href = `index.html`;

ElidHeaderLinkAboutUs.textContent = `About Us`;
ElidHeaderLinkAboutUs.href = `about-us.html`;

ElidHeaderlinkProducts.textContent = `Products`;
ElidHeaderlinkProducts.href = `products.html`;

ElidHeaderLinkMarkets.textContent = `Markets`;
ElidHeaderLinkMarkets.href = `#`;

ElidHeaderLinkSupport.textContent = `Support`;
ElidHeaderLinkSupport.href = `services.html`;

ElidHeaderLinkContactUs.textContent = `Contact`;
ElidHeaderLinkContactUs.href = `contact.html`;

const FnCLickedProduct = (CLickedProductId) => {
  clikedProduct = sessionStorage.setItem("productId", CLickedProductId);
};
