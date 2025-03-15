// Function to extract the domain name from the URL
function getDomainFromUrl() {
    const url = window.location.hostname; // Get the full domain (e.g., blackbuckfinserv.com)
    return url;
  }
  
  // Function to replace "domain.com" with the actual domain
  function replaceDomainName() {
    const domain = getDomainFromUrl();
    const elements = document.querySelectorAll("[id^='domain-name']");
  
    elements.forEach((element) => {
      element.textContent = domain;
    });
  }
  
  // Run the function when the page loads
  window.onload = replaceDomainName;
