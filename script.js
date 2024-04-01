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
      foto.style.left = '11%';
      foto.style.marginTop = '-80px'
      foto.style.marginBottom = '5px';
      foto.classList.add('Row');
      foto.classList.remove('Flex2');
    },
    moverFoto2: function() {
      var foto = document.getElementById('coursepic');
      foto.style.transform = 'translate(15%, 0)';
      foto.style.left = '-29.5%';
      foto.style.marginTop = '35px'
      foto.style.marginBottom = '35px';
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
      foto.style.right = '52%';
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
    verificarMediaQuery: function() {
      if (window.matchMedia('(min-width: 1200px)').matches) {
        this.moverTexto();
        this.moverTexto2();
        this.moverFotoDesk();
        this.moverFotoDesk2();
      } else {
        this.moverFoto();
        this.moverFoto2();
      }
    }
  };
  
  // Adiciona um listener para o evento resize para atualizar as animações
  window.addEventListener('resize', function() {
    animacoes.verificarMediaQuery();
  });
  
  // Inicia as animações quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', function() {
    animacoes.verificarMediaQuery();
  });