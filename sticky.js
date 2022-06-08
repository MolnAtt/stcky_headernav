main()

function main(){
    pseudo_selector_stuck();
}

function pseudo_selector_stuck(){
    // stuck pseudoselector leprogramozása
    const navc = document.querySelector('.nav-container');
    const observer = new IntersectionObserver( 
        ([e]) => beragadaskor(e), { threshold: [1] }
    );
    observer.observe(navc);
    console.log('pseudo_selector_stuck() lefutott');
}

function beragadaskor(e){
    const b = e.intersectionRatio < 1;
    e.target.classList.toggle("elvesztette-a-ragadost", b);
    let r = e.target.firstElementChild.classList.toggle("stuck", b);
    console.log("beragadt vagy levált");
    return r;
}