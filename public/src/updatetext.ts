document.addEventListener("DOMContentLoaded", () => {
    // Select the heading in the "Unique Jewelry" section
    const heroContentHeading: HTMLElement | null = document.querySelector(".hero--content h1");
  
    // Define the breakpoint for tablets and mobile devices
    const breakpoint: number = 768;
  
    // Function to update the text based on screen width
    const updateTextForDevice = (): void => {
      if (!heroContentHeading) return; // Ensure the heading exists
  
      if (window.innerWidth <= breakpoint) {
        // If the device width is less than or equal to 768px
        heroContentHeading.innerHTML = " ";
      } else {
        // Default text for larger devices
        heroContentHeading.innerHTML = "Unique<br>Jewelry";
      }
    };
  
    // Initial call to update the text
    updateTextForDevice();
  
    // Listen for window resize events and update the text dynamically
    window.addEventListener("resize", updateTextForDevice);
  });
  