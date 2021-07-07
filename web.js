var rotatingSquare = document.getElementById("web-animations").animate(
    [
        { background: '#000000', opacity: 1.0, transform: 'rotate(0deg)translate3D(0,0,0)' },
        { background: '#440000', opacity: 0.3 },
        { background: '#000000', opacity: 1.0, transform: 'rotate(360deg) translate3D(0,0,0)' }
    ], {
        duration: 1000,
        iterations: Infinity,
        easing: 'ease-in-out'

    }
)