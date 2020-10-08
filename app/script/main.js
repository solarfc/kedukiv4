let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

window.onload = function () {

    /*
        increase date
     */

    let today = new Date (),
        tomorrow = new Date (),
        day,
        month,
        year,
        i = 3,
        period = document.querySelectorAll('h6 output');

    tomorrow.setDate(today.getDate() + i);

    day = tomorrow.getDate();
    month = tomorrow.getMonth() + 1;
    year = tomorrow.getFullYear().toString().slice(2);

    day = (day > 9) ? day : `0${day}`;
    month = (month > 9) ? month : `0${month}`;

    for(let i = 0; i < period.length; i++) {
        period[i].innerHTML = `${day}.${month}.${year}`;
    }

    document.querySelector('.footer__content p output').innerHTML = tomorrow.getFullYear();

    /*
        fancybox loop
     */

    $.fancybox.defaults.loop = true;

    /*
        form styler
     */

    $(function () {
        $('select').styler({
            selectSmartPositioning: false
        });
    });

    /*
        size chart
     */

    let activeSizeChart = document.querySelectorAll('.size-chart'),
        bodyFilter = document.querySelector('.body-filter'),
        sizeChart = document.querySelector('.size'),
        closeButton = document.querySelector('.close'),
        htmlBody = document.querySelector('html');

    const show = () => {
        bodyFilter.style.background = 'rgba(0, 0, 0, 0.8)';
        bodyFilter.style.zIndex = '999';
        htmlBody.style.overflowY = 'hidden';
        sizeChart.style.transform = 'translate(-50%, -50%) rotateX(0deg)';
        sizeChart.style.zIndex = '9999';
    };

    const hide = () => {
        bodyFilter.style.background = 'rgba(0, 0, 0, 0)';
        bodyFilter.style.zIndex = '-5';
        htmlBody.style.overflowY = 'scroll';
        sizeChart.style.transform = 'translate(-50%, -50%) rotateX(-90deg)';
        sizeChart.style.zIndex = '-5';
    };

    for(let i = 0; i < activeSizeChart.length; i++) {
        activeSizeChart[i].addEventListener('click', function () {
            if(this.dataset.color === 'white') {
                document.querySelector('figure.xxl').style.display = 'none';
            } else {
                document.querySelector('figure.xxl').style.display = 'flex';
            }
            if(this.dataset.color === 'blue') {
                document.querySelector('figure.s p.second').innerHTML = '68';
                document.querySelector('figure.s p.third').innerHTML = '88';
                document.querySelector('figure.s p.fourth').innerHTML = '96';

                document.querySelector('figure.m p.second').innerHTML = '72';
                document.querySelector('figure.m p.third').innerHTML = '92';
                document.querySelector('figure.m p.fourth').innerHTML = '100';

                document.querySelector('figure.l p.second').innerHTML = '76';
                document.querySelector('figure.l p.third').innerHTML = '96';
                document.querySelector('figure.l p.fourth').innerHTML = '104';

                document.querySelector('figure.xl p.second').innerHTML = '80';
                document.querySelector('figure.xl p.third').innerHTML = '100';
                document.querySelector('figure.xl p.fourth').innerHTML = '108';

                document.querySelector('figure.xxl p.second').innerHTML = '84';
                document.querySelector('figure.xxl p.third').innerHTML = '104';
                document.querySelector('figure.xxl p.fourth').innerHTML = '112';
            } else {
                document.querySelector('figure.s p.second').innerHTML = '64';
                document.querySelector('figure.s p.third').innerHTML = '84';
                document.querySelector('figure.s p.fourth').innerHTML = '92';

                document.querySelector('figure.m p.second').innerHTML = '68';
                document.querySelector('figure.m p.third').innerHTML = '88';
                document.querySelector('figure.m p.fourth').innerHTML = '93';

                document.querySelector('figure.l p.second').innerHTML = '72';
                document.querySelector('figure.l p.third').innerHTML = '92';
                document.querySelector('figure.l p.fourth').innerHTML = '100';

                document.querySelector('figure.xl p.second').innerHTML = '76';
                document.querySelector('figure.xl p.third').innerHTML = '96';
                document.querySelector('figure.xl p.fourth').innerHTML = '104';

                document.querySelector('figure.xxl p.second').innerHTML = '80';
                document.querySelector('figure.xxl p.third').innerHTML = '100';
                document.querySelector('figure.xxl p.fourth').innerHTML = '108';
            }
            show();
        });
    }

    bodyFilter.addEventListener('click', hide);
    closeButton.addEventListener('click', hide);

    /*
        review slider
     */

    $('.review__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 0,
        speed: 300,
        arrows: true,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow')
    });

    /*
        animate
     */

    let fade = [
        $('a.bucket'), $('h3'),
        $('.advantages__content-top p'), $('.advantages__content-top ul li'), $('.advantages__content-top figure img'),
        $('.advantages__content-bottom figure img'), $('.advantages__content-bottom a'),
        $('.gallery__content'), $('.photo__content'),
        $('.catalog__block ul li'), $('.catalog__block .price'), $('.catalog__block-img'),
        $('.description__content-text p'), $('.description__content-img img'),
        $('.description__block a'), $('.description__block-img img'),
        $('.review__slider'), $('.delivery__content figure')
    ];

    for(let i = 0; i < fade.length; i++) {
        fade[i].waypoint(
            function (direction) {
                if(direction === 'down') {
                    $(this.element).addClass('animated');
                    this.destroy();
                }
            },
            {
                offset: function () {
                    return this.context.innerHeight() * 0.82;
                }
            }
        );
    }

    /*
        hide bucket on mobile
     */

    const hideBucket = () => {
        let topOfWindows = window.pageYOffset + innerHeight,
            catalogTopPosition = document.querySelector('.catalog').offsetTop,
            photoTopPosition = document.querySelector('.photo').offsetTop,
            bucket = document.querySelector('a.bucket');

        if(topOfWindows > catalogTopPosition && topOfWindows < photoTopPosition) {
            bucket.classList.remove('animated');
            bucket.style.display = 'none';
        } else {
            bucket.classList.add('animated');
            bucket.style.display = 'block';
        }
    }

    /*
        slow scroll
     */

    if(/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)){
        let href = $('#mobile-order').offset().top - innerHeight - 30;

        $('.to-order a, a.order, a.bucket').on('click', function () {
            $('html, body').animate({scrollTop: href}, 800);
            return false;
        });

        window.addEventListener('scroll', function () {
            hideBucket();
        });

        window.addEventListener('resize', function () {
            hideBucket();
        });
    } else {
        let href = $('#catalog').offset().top;

        $('.to-order a, a.order, a.bucket').on('click', function () {
            $('html, body').animate({scrollTop: href}, 800);
            return false;
        });
    }
};
