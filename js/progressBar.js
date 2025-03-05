const progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
    const scrollTop = window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    progressBar.style.width = scrollPercentage + '%';
}

window.addEventListener('scroll', updateProgressBar);