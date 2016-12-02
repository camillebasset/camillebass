// CONTAINER 1 \\

var typewritting = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 50) || 90;
    this.txt = '';
    this.tick();

};

typewritting.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    this.txt = fullTxt.substring(0, this.txt.length + 1);


    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 200;


    delta = this.period;


    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new typewritting(elements[i], JSON.parse(toRotate), period);
        }
    }
};



// CONTAINER 2 \\


$(".drop").click(function () {
    $('html, body').animate({
        scrollTop: $(".experience__container").offset().top
    }, 1000);
});

