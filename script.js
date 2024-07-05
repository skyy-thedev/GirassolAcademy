document.addEventListener('DOMContentLoaded', function () {
    // Inicializar Flickity
    var flkty = new Flickity('.hero-slider', {
        wrapAround: true,
        autoPlay: 6000, // Mudar slide a cada 15 segundos
        pauseAutoPlayOnHover: false, // Não pausar no hover
        prevNextButtons: true, // Desabilitar botões de navegação
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
  
    const options = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    fadeInSections.forEach(section => {
      observer.observe(section);
    });
  });
  
  function importHotmart(){ 
    var imported = document.createElement('script'); 
    imported.src = 'https://static.hotmart.com/checkout/widget.min.js'; 
    document.head.appendChild(imported); 
   var link = document.createElement('link'); 
   document.head.appendChild(link);	} 
  importHotmart(); 

  var animacoes = {
    moverFoto: function() {
      var foto = document.getElementById('userpic');
      foto.style.transform = 'translate(20%, 0)';
      foto.style.left = '-23%';
      foto.style.marginTop = '40px'
      foto.style.marginBottom = '10px';
      foto.classList.add('Row');
      foto.classList.remove('Flex2');
    },
    moverFoto2: function() {
      var foto = document.getElementById('coursepic');
      foto.style.transform = 'translate(50%, 0)';
      foto.style.left = '-28%';
      foto.style.marginTop = '50px'
      foto.style.marginBottom = '70px';
      foto.classList.add('Row');
      foto.classList.remove('Flex2');
    },
    moverFoto3: function() {
      var foto = document.getElementById('servicepic');
      foto.style.transform = 'translate(25%, 10%)';
      foto.style.left = '-24%';
      foto.style.marginBottom = '-450px'
      foto.classList.add('Row');
      foto.classList.remove('Flex2');
    },
    moverFoto4: function() {
      var foto = document.getElementById('coursepic2');
      foto.style.transform = 'translate(50%, 10%)';
      foto.style.marginTop = '50px'
      foto.style.marginBottom = '70px';
      foto.classList.add('Row');
      foto.classList.remove('Flex2');
    },
    moverFotoDesk: function() {
      var foto = document.getElementById('userpic');
      foto.style.transform = 'translate(10%, 0)';
      foto.style.right = '0%';
    },    
    moverFotoDesk2: function() {
      var foto = document.getElementById('coursepic');
      foto.style.transform = 'translate(130%, -115%)';
      foto.style.left = '0%';
    },
    moverFotoDesk3: function() {
      var foto = document.getElementById('servicepic');
      foto.style.transform = 'translate(0%, 30%)';
      foto.style.left = '40%';
    },
    moverFotoDesk4: function() {
      var foto = document.getElementById('coursepic2');
      foto.style.transform = 'translate(150%, -120%)';
      foto.style.left = '0%';
      foto.style.marginBottom = '-250px'
    },
    moverTexto: function() {
      var txtmove = document.getElementById('animatedtxt');
      txtmove.style.transform = 'translate(-10%, -100%)';
      txtmove.style.left = '-10%';
    },
    moverTexto2: function() {
      var txtmove = document.getElementById('animatedtxt2');
      txtmove.style.transform = 'translate(-50%, 0)';
      txtmove.style.marginTop = '-25%';
      txtmove.style.marginLeft = '35%';
    },
    moverTexto3: function() {
      var txtmove = document.getElementById('animatedtxt3');
      txtmove.style.transform = 'translate(-15%, -15%)';
      txtmove.style.marginLeft = '0%';
    },
    moverTexto4: function() {
      var txtmove = document.getElementById('animatedtxt4');
      txtmove.style.transform = 'translate( 0%, -20%)';
      txtmove.style.marginLeft = '0%';
    },
    verificarMediaQuery: function() {
      if (window.matchMedia('(min-width: 1200px)').matches) {
        this.moverTexto();
        this.moverTexto2();
        this.moverTexto3();
        this.moverTexto4();
        this.moverFotoDesk();
        this.moverFotoDesk2();
        this.moverFotoDesk3();
        this.moverFotoDesk4();
      } else {
        this.moverFoto();
        this.moverFoto2();
        this.moverFoto3();
      }
    }
  };
  // window.addEventListener('load', () => {
  //   const shine = document.querySelector('#logo img');
  //   let opacity = 0;
  
  //   function animateShine() {
  //     opacity = opacity === 1 ? 0 : 1;
  //     shine.style.opacity = opacity;
  //     setTimeout(animateShine, 500); // Altere este valor para ajustar a velocidade do brilho
  //   }
  
  //   animateShine();
  // });
  
  // Adiciona um listener para o evento resize para atualizar as animações
  window.addEventListener('resize', function() {
    animacoes.verificarMediaQuery();
  });
  
  // Inicia as animações quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', function() {
    animacoes.verificarMediaQuery();
  });