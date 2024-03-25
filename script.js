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
      foto.style.left = '15%';
      foto.style.marginTop = '-10px'
      foto.style.marginBottom = '15px';
      foto.classList.add('Row');
      foto.classList.remove('Flex2');
    },
    moverFotoDesk: function() {
      var foto = document.getElementById('userpic');
      foto.style.transform = 'translate(50%, 0)';
      foto.style.right = '50%';
    },
    moverTexto: function() {
      var txtmove = document.getElementById('animatedtxt');
      txtmove.style.transform = 'translate(-10%, 0)';
      txtmove.style.left = '-10%';
    },
    verificarMediaQuery: function() {
      if (window.matchMedia('(min-width: 1200px)').matches) {
        this.moverTexto();
        this.moverFotoDesk();
      } else {
        this.moverFoto();
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