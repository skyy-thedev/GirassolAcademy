document.addEventListener('DOMContentLoaded', function () {
    // Inicializar Flickity
    var flkty = new Flickity('.hero-slider', {
        wrapAround: true,
        autoPlay: 6000, // Mudar slide a cada 15 segundos
        pauseAutoPlayOnHover: false, // Não pausar no hover
        prevNextButtons: true, // Desabilitar botões de navegação
    });
  });
  
  var animacoes = {
    moverFoto: function() {
      var foto = document.getElementById('userpic');
      foto.style.transform = 'translate(15%, 0)';
      foto.style.left = '12%';
      foto.style.marginTop = '-40px'
      foto.style.marginBottom = '-10px';
      foto.classList.add('Row');
      foto.classList.remove('Flex2');
    },
    moverFoto2: function() {
      var foto = document.getElementById('coursepic');
      foto.style.transform = 'translate(50%, 0)';
      foto.style.left = '-12%';
      foto.style.marginTop = '35px'
      foto.style.marginBottom = '35px';
      foto.classList.add('Row');
      foto.classList.remove('Flex2');
    },
    moverFoto3: function() {
      var foto = document.getElementById('servicepic');
      foto.style.transform = 'translate(25%, 0)';
      foto.style.left = '-24%';
      foto.style.marginTop = '30px'
      foto.style.marginBottom = '40px';
      foto.classList.add('Row');
      foto.classList.remove('Flex2');
    },
    moverFotoDesk: function() {
      var foto = document.getElementById('userpic');
      foto.style.transform = 'translate(40%, 0)';
      foto.style.right = '40%';
    },    
    moverFotoDesk2: function() {
      var foto = document.getElementById('coursepic');
      foto.style.transform = 'translate(52%, 0)';
      foto.style.left = '45%';
    },
    moverFotoDesk3: function() {
      var foto = document.getElementById('servicepic');
      foto.style.transform = 'translate(-70%, 15%)';
      foto.style.left = '0%';
    },
    moverTexto: function() {
      var txtmove = document.getElementById('animatedtxt');
      txtmove.style.transform = 'translate(-10%, 0)';
      txtmove.style.left = '-10%';
    },
    moverTexto2: function() {
      var txtmove = document.getElementById('animatedtxt2');
      txtmove.style.transform = 'translate(-50%, 0)';
      txtmove.style.marginTop = '-25%';
      txtmove.style.marginLeft = '48.7%';
    },
    moverTexto3: function() {
      var txtmove = document.getElementById('animatedtxt3');
      txtmove.style.transform = 'translate(-15%, -15%)';
      txtmove.style.marginLeft = '0%';
    },
    verificarMediaQuery: function() {
      if (window.matchMedia('(min-width: 1200px)').matches) {
        this.moverTexto();
        this.moverTexto2();
        this.moverTexto3();
        this.moverFotoDesk();
        this.moverFotoDesk2();
        this.moverFotoDesk3();
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