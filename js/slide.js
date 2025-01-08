function slideParagraphs() {
    const paragraphs = document.querySelectorAll('.slide-para');
    let delay = 100;
  
    paragraphs.forEach((paragraph) => {
      setTimeout(() => {
        paragraph.style.opacity = '1';
        paragraph.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          paragraph.classList.add('active');
        }, 200);
      }, delay);
      delay += 600;
    });
  }
  
slideParagraphs();