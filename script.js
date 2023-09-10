window.onscroll = function() {stickyNav()};

var navContainer = document.getElementById("nav-container");
var sticky = navContainer.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    navContainer.classList.add("sticky");
  } else {
    navContainer.classList.remove("sticky");
  }
}

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    strings: ['Hello World!', 'Welcome to my world!'],
    autoStart: true,
    loop: true,
});

window.addEventListener('load', function() {
  const loader = document.getElementById('loading');
  setTimeout(function() {
    loader.style.display = 'none';
  }, 5000); // 5 seconds delay
});

// Add 'active' class to div after delay
setTimeout(function() {
  const myDiv = document.getElementById('my-div');
  myDiv.classList.add('active');
}, 1000); // Delay of 1 second


var app = document.getElementById('text');
app.style.fontSize = '50px';
app.style.color = 'white';
var typewriter = new Typewriter(app, {
});

typewriter.typeString('Some of my recent projects!')
    .start();

var app = document.getElementById('text2');
app.style.color = 'white';
var typewriter = new Typewriter(app, {
    strings: ['Welcome to my Portfolio!', 'Here are some of my recent projects!'],
    startDelay: 1000,
    autoStart: true,
    loop: true,
});

window.addEventListener('load', function() {
  const loader = document.getElementById('loading');
  setTimeout(function() {
    loader.style.display = 'none';
  }, 5000); // 5 seconds delay
});

// Add 'active' class to div after delay
setTimeout(function() {
  const myDiv = document.getElementById('my-div');
  myDiv.classList.add('active');
}, 1000); // Delay of 1 second

var _window = window,Splitting = _window.Splitting,ScrollOut = _window.ScrollOut;
Splitting();
ScrollOut({
  targets: '.word',
  scrollingElement: '.page' });

