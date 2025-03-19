document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.stat__item')
    const handleScroll = () => {
        items.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
            if (isVisible && !item.classList.contains("active")) {
                const numberElement = item.querySelector('.stat__number');
                const maxValue = parseInt(numberElement.dataset.max, 10);

                const duration = 3000; 
                const increment = maxValue / (duration / 10);
                let currentValue = 0
                const couter = setInterval(() => {
                    currentValue += increment
                    if (currentValue >= maxValue) {
                        currentValue = maxValue
                        clearInterval(couter)
                    }
                    numberElement.textContent = Math.floor(currentValue);
                }, 10);
                item.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
})

const projectItems = document.querySelectorAll('.project__item')
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); 
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1 
});

projectItems.forEach(item => {
    observer.observe(item);
});
