window.addEventListener("load", function(){
    const slider = document.querySelector('.slider');
    const sliderMain = document.querySelector('.slider-main');
    const sliderItems = document.querySelectorAll('.slider-item');
    const sliderLength = sliderItems.length;
    const dotItems = document.querySelectorAll('.dots-item');
    const sliderItemWidth = sliderItems[0].offsetWidth;
    let positionX = 0;
    let index = 0;
    function handleChangeSlide(){
        positionX -= sliderItemWidth;
        sliderMain.style =`transform: translateX(${positionX}px)`;
        [...dotItems].forEach(el => el.classList.remove("active"));
        dotItems[index].classList.add("active");
        index++;
    }
    setInterval(handleChangeSlide, 2000);
});