import router from './router'
import homeTpl from './templates/home.hbs'
import simpleTpl from './templates/simple.hbs'
import styleTpl from './templates/style.hbs'
import animationTpl from './templates/animation.hbs'
import textTpl from './templates/text.hbs'
import interactionTpl from './templates/interaction.hbs'
import notFoundTpl from './templates/not-found.hbs'


const app = document.getElementById('app')

function index() {
  app.innerHTML = homeTpl()
}

function simple() {
  app.innerHTML = simpleTpl()
}

function style() {
  app.innerHTML = styleTpl()
}

function animation() {
  app.innerHTML = animationTpl()
}

function text() {
  app.innerHTML = textTpl()
}

function interaction() {
    app.innerHTML = interactionTpl()

  let backgroundBtn = document.getElementById('btn-background'),
      backgroundBtnWidth = backgroundBtn.getAttribute('width'),
      slider = document.getElementById('slider'),
      slideBtn = document.getElementById('btn-slide'),
      slideBtnWidth = slideBtn.getAttribute('width'),
      arrowBtn = document.getElementById('btn-arrow'),
      slideBtnPos = 0,
      actPosMouseX = 0,
      committed = false,
      mouseDown = false;

  slider.addEventListener('mousedown', function (e) {
    mouseDown = true;
    actPosMouseX = e.clientX;
  });

  document.addEventListener('mouseup', function (e) {
    mouseDown = false;
    if(slideBtnPos >= backgroundBtnWidth - 5) {
      slideBtn.setAttribute('width', backgroundBtnWidth);
      committed = true;
      let committed = document.getElementById('committed');
      committed.setAttribute('visibility', 'visible');
    }
    else {
      slideBtn.setAttribute('width', slideBtnWidth);
      arrowBtn.setAttribute('transform','translate(0,0)');
    }
  });

  slider.addEventListener('mousemove', function (e) {
    if(!mouseDown || committed)
      return;

    let movementX = parseInt(e.clientX - actPosMouseX);
    actPosMouseX += movementX;
    slideBtnPos = parseInt(actPosMouseX - slideBtnWidth);

    if(slideBtnPos >= slideBtnWidth && slideBtnPos <= backgroundBtnWidth) {
      slideBtn.setAttribute('width', slideBtnPos);
      arrowBtn.setAttribute('transform',`translate(${slideBtnPos - slideBtnWidth},0)`);
    }
  });
}

function notFound() {
  app.innerHTML = notFoundTpl()
}

router('/', index)
router('/simple', simple)
router('/style', style)
router('/animation', animation)
router('/text', text)
router('/interaction', interaction)
router('*', notFound)
router()
