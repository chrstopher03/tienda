
/* ********************************** */
/*           MENU RESPONSIVE          */
/* ********************************** */
let overlay = document.querySelector('#overlay');
let menuHamburger = document.querySelector('.menu-hamburger');
let menuResponsive = document.querySelector('.menu-responsive');
let menuClose = document.querySelector('.btn-close-responsive');

menuHamburger.addEventListener('click', () => {
	menuResponsive.classList.add('active');
	overlay.style.display = 'block';
	document.body.style.overflow = 'hidden'; // Bloquea el scroll
});

menuClose.addEventListener('click', () => {
	menuResponsive.classList.remove('active');
	overlay.style.display = 'none';
	document.body.style.overflow = 'auto'; // Desbloquea el scroll
});

// Actualiza el estado del botón de decrementar al cargar la página
updateButtonState();


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>thins sthore</title>
    <link rel="icon" href="img/think 8.jpg">

    <link rel="stylesheet" href="CSS/styles.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css" integrity="sha512-6lLUdeQ5uheMFbWm3CP271l14RsX1xtx+J5x2yeIDkkiBpeVTNhTqijME7GgRKKi6hCqovwCoBTlRBEC20M8Mg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
<body>

    <header>

   


        <div class="header container">
            <img src="img/00.png" alt="">
           
            <nav>
                <ul class="menu-nav">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="hombres.html">Hombres</a></li>
                    <li><a href="mujeres.htm">Mujeres</a></li>       
                        
                </ul>
            </nav>

            <div class="menu-hamburger">
                <i class="fa-solid fa-bars"></i>
            </div>


        <div class="menu-responsive">

            <h1 class="logo-responsive"></h1>
            <img src="img/00.png" alt="">

            <p>
                somos una tienda que te trae la solución a tu problema con la moda, ofreciendo variedades de productos.
            </p>

            <p>Sigue nuestras redes sociales</p>
            <div class="container-social-responsive">
                <a href="https://www.facebook.com/profile.php?id=61565389907892&mibextid=ZbWKwL" class="facebook">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/think_.store?igsh=dWR5dHVja2M4eG1y" class="instagram">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://wa.me/qr/IBJY7SB3QCHKH1" class="whatsapp">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            </div>
            <nav>
                <ul class="menu-nav-responsive">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="hombres.html">Hombres</a></li>
                    <li><a href="mujeres.hml">Mujeres</a></li>   
     
                </ul>
            </nav>
            <div class="btn-close-responsive">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        <div id="overlay"></div>
    </header>

    <section id="container-slider">	
        <a href="javascript: fntExecuteSlide('prev');" class="arrowPrev"><i class="fas fa-chevron-circle-left"></i></a>
        <a href="javascript: fntExecuteSlide('next');" class="arrowNext"><i class="fas fa-chevron-circle-right"></i></a>
        <ul class="listslider">
          <li><a itlist="itList_0" href="#" class="item-select-slid"></a></li>
          <li><a itlist="itList_1" href="#"></a></li>
          <li><a itlist="itList_2" href="#"></a></li>
        </ul>
        <ul id="slider">
          <li style="background-image: url('img/12.jpg'); z-index:0; opacity: 1;">
            <div class="content_slider" >
              <div>
                <h2>Emprendimiento Think Store</h2>
          </div>
            </div>
          </li>
          <li style="background-image: url('img/The.jpg'); ">
            <div class="content_slider" >
              <div>
                <h2>Diseños</h2>
          </div>
            </div>
          </li>
          <li style="background-image: url('img/14.jpeg'); ">
            <div class="content_slider" >
              <div>
               
          </div>
            </div>
          </li>
       </ul>
     </section>

          

    <section class="container container-productos-relacionados">
        <h2 class="text-center">AQUI ENCONTRARAS NUESTROS NUEVOS DROPS</h2>
        <div class="cards-productos-relacionados">
            <div class="card-producto-relacionado">
                <div  class="image-product">
                    <img
                        src="img/46.jpg"
                        alt="Producto Relacionado 1"
                    />
                    <div class="button-group">
                       

                       n>
                    </div>
                </div>
                <div class="info-product">
                    
                </div>
            </div>
            <div class="card-producto-relacionado">
                <div  class="image-product">
                    <img
                        src="img/47.jpeg"
                        alt="Producto Relacionado 1"
                    />
                    <div class="button-group">
                       

                       n>
                    </div>
                </div>
                <div class="info-product">
                    
                </div>
            </div>
            <div class="card-producto-relacionado">
                <div  class="image-product">
                    <img
                        src="img/48.jpg"
                        alt="Producto Relacionado 1"
                    />
                    <div class="button-group">
                       

                       n>
                    </div>
                </div>
                <div class="info-product">
                    
                </div>
            </div>
            <div class="card-producto-relacionado">
                <div  class="image-product">
                    <img
                        src="img/Remera Jesús minimalista negro.png"
                        alt="Producto Relacionado 1"
                    />
                    <div class="button-group">
                       

                       n>
                    </div>
                </div>
                <div class="info-product">
                    
                </div>
            </div>
                </div>
            </div>

            
        </div>

        
    </section>
    <body>

        <div class="container mt-3">
        <div class="row responsive">
        
        <div class="col-lg-4">
          <div class="card">
            <img class="card-img-top" src="img/7.jpg" alt="Card image" style="width:100%">
            <div class="card-body">
              <h4 class="card-title">Think Store</h4>
              <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
         </div>
         
         <div class="col-lg-4">
          <div class="card">
            <img class="card-img-top" src="img/8.jpeg" alt="Card image" style="width:100%">
            <div class="card-body">
              <h4 class="card-title">Think Store</h4>
              <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
         </div>
         
         
         <div class="col-lg-4">
          <div class="card">
            <img class="card-img-top" src="img/11.jpg" alt="Card image" style="width:100%">
            <div class="card-body">
              <h4 class="card-title">Think Store</h4>
              <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
         </div>
         
          <div class="col-lg-4">
          <div class="card">
            <img class="card-img-top" src="img/10.jpeg" alt="Card image" style="width:100%">
            <div class="card-body">
              <h4 class="card-title">Think Store</h4>
              <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
         </div>
         
         
          <div class="col-lg-4">
          <div class="card">
            <img class="card-img-top" src="img/3.png" alt="Card image" style="width:100%">
            <div class="card-body">
              <h4 class="card-title">Think Store</h4>
              <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
         </div>
          
         </div>
        </div>
        
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        
        
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
          
          
         <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js" integrity="sha512-WNZwVebQjhSxEzwbettGuQgWxbpYdoLf7mH+25A7sfQbbxKeS5SQ9QBf97zOY4nOlwtksgDA/czSTmfj4DUEiQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> 
        
        
        <script>
        $('.responsive').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
           responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
          
        });
        </script>
        
        </body>
             
    <footer>
        <div class="container footer">
            <h1 class="logo">Siguenos</h1>

            <div class="container-social">
                <a href="https://www.facebook.com/profile.php?id=61565389907892&mibextid=ZbWKwL" class="facebook">
                    <i class="fa-brands fa-facebook"></i>
                    <span>facebook</span>
                </a>
                <a href="https://wa.me/qr/IBJY7SB3QCHKH1" class="whatsapp">
                    <i class="fa-brands fa-whatsapp"></i>
                    <span>whatsapp</span>
                </a>
                <a href="https://www.instagram.com/think_.store?igsh=dWR5dHVja2M4eG1y" class="telegram">
                    <i class="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                </a>
               
            </div>

            <div class="user-footer">
                <ul>
                    <li><a href="cuenta.html">Mi cuenta</a></li>
                    <li><a href="registro.html">Registrate</a></li>
                    <li><a href="https://www.instagram.com/think_.store?igsh=dWR5dHVja2M4eG1y">Contáctanos</a></li>
                </ul>
            </div>

            <div class="container-policies">
                <ul>
                    <li>
                        <a href="politica.html">Política de Privacidad</a>
                    </li>
                    <li>
                        <a href="devoluciones.html">Política de Devoluciones</a>
                    </li>
                    <li>
                        <a href="compras.html">Términos de comprar</a>
                    </li>
                    <li>
                        <a href="#">Preguntas Frequentes</a>
                    </li>
                </ul>
                
            </div>


        </div>
        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<script defer src="js/funciones.js"></script>
    </footer>
    
    
    <script src="index.js"></script>
  </body>
</html>