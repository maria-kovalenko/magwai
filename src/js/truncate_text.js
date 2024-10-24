function truncateTextInCards() {
    const cards = document.querySelectorAll('.card__description'); 
    cards.forEach(card => {
        const originalText = card.textContent; 
        card.textContent = originalText; 

        while (card.scrollHeight > 144) {
            card.textContent = card.textContent.replace(/(\s+\S+)?$/, '') + '...';
        }
    });
}
 truncateTextInCards();