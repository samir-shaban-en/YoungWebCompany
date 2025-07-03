document.addEventListener('DOMContentLoaded', () => {
    const bannerList = document.querySelector('.hero-banners');
    const banners = document.querySelectorAll('.hero-banner-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentBannerIndex = 0;
    const totalBanners = banners.length;

    function updateSlider() {
        banners.forEach((banner, index) => {
            if (window.innerWidth >= 768) {
            
                if (index === currentBannerIndex) {
                    banner.classList.add('active');
                } else {
                    banner.classList.remove('active');
                }
               
                prevButton.disabled = currentBannerIndex === 0;
                nextButton.disabled = currentBannerIndex === totalBanners - 1;
            } else {
               
                banner.style.display = 'block'; 
                banner.classList.remove('active'); 
            }
        });
    }

    prevButton.addEventListener('click', () => {
        if (currentBannerIndex > 0) {
            currentBannerIndex--;
            updateSlider();
        }
    });
   
    nextButton.addEventListener('click', () => {
        if (currentBannerIndex < totalBanners - 1) {
            currentBannerIndex++;
            updateSlider();
        }
    });

    updateSlider();
    window.addEventListener('resize', updateSlider);
});
