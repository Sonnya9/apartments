document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.stat__item')
    const handleScroll = () => {
        items.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight rect.bottom >= 0;
            if (isVisible !item.classList.contains("active")) {
                const numberElement = item.querySelector('.stat__number')
                const maxValue = parseInt(numberElement.dateset.max, 10);

                const duration = 3000;
                const increment = maxValue / (duration / 10);
                let currentValue = 0

            }
        }
    }
})