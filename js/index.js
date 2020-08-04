
window.onload = asignarEventos;

function asignarEventos() {

    agregarInicio();

    window.sr = ScrollReveal();

        sr.reveal('#h1',{
            duration: 3000,
            origin: 'bottom'
        });
        sr.reveal('#navegacion',{
            duration: 2000,
            origin: 'left',
            distance: '300px'
        });
        sr.reveal('#divBuscar',{
            duration: 2000,
            origin: 'bottom',
            distance: '300px'
        });
        sr.reveal('#containerPrincipal',{
            duration: 2000,
            origin: 'left',
            distance: '300px'
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
    
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

    $("#botonProductos").click(function()
    {
        agregarProductos();
    });

    $("#botonInicio").click(function()
    {
        agregarInicio();
    });

}

function agregarProductos(){

    $("#containerPrincipal").empty();
    var marca = "Filomena";
    var precio = 1500;
    
    var objeto =  `
                    <article id="containerInterno">
                        <div class="divObjeto" id="obj">
                            <div id="divInternoObjeto">
                                <img src="./imgProductos/producto1.jpeg" style="height:100%">
                            </div>
                            <div class="descripcionProducto">
                                <p>
                                    Marca de zapatos
                                    </br>
                                    $1500.00
                                </p>
                            </div>
                        </div>
                        <div class="divObjeto" id="obj">
                            <div id="divInternoObjeto">
                                <img src="./imgProductos/producto2.jpeg" style="height:100%;">
                            </div>
                            <div class="descripcionProducto">
                                <p>
                                    Marca de zapatos
                                    </br>
                                    $1500.00
                                </p>
                            </div>
                        </div>
                        <div class="divObjeto" id="obj">
                            <div id="divInternoObjeto">
                                <img src="./imgProductos/producto3.jpeg" style="height:100%;">
                            </div>
                            <div class="descripcionProducto">
                                <p>
                                    Marca de zapatos
                                    </br>
                                    $1500.00
                                </p>
                            </div>
                        </div>
                        <div class="divObjeto" id="obj">
                            <div id="divInternoObjeto">
                                <img src="./imgProductos/producto4.jpeg" style="height:100%;">
                            </div>
                            <div class="descripcionProducto">
                                <p>
                                    Marca de zapatos
                                    </br>
                                    $1500.00
                                </p>
                            </div>
                        </div>
                        <div class="divObjeto" id="obj">
                            <div id="divInternoObjeto">
                                <img src="./imgProductos/producto5.jpeg" style="height:100%;">
                            </div>
                            <div class="descripcionProducto">
                                <p>
                                    Marca de zapatos
                                    </br>
                                    $1500.00
                                </p>
                            </div>
                        </div>
                        <div class="divObjeto" id="obj">
                            <div id="divInternoObjeto">
                                <img src="./imgProductos/producto6.jpeg" style="height:100%;">
                            </div>
                            <div class="descripcionProducto">
                                <p>
                                    Marca de zapatos
                                    </br>
                                    $1500.00
                                </p>
                            </div>
                        </div>
                    </article>
                `
        
    $("#containerPrincipal").append(objeto);
}

function agregarInicio(){

    $("#containerPrincipal").empty();

    var objeto = `
                    <div id="divInicio">
                    <p>Aca van nuevas noticias, ofertas, promociones, etc.</p>
                    <img src="./img/imgInicio.jpg" height="500px">
                    </div>
                    <div id="menuNosotros">
                    <p id="quienesSomos">
                        ¿Quiénes somos?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, a odio quo illum corrupti unde. Officia dolor, sapiente aperiam facere atque temporibus voluptates itaque animi impedit minima, a architecto ex!
                        Quas ipsa veritatis eius dolorum, a neque cumque tempora! Minima mollitia atque, possimus at quos doloribus magni sit rem dolorem officiis quidem harum. Dolores labore consequuntur praesentium nesciunt reiciendis at.
                        Fugiat ut iure,ea nam quibusdam non possimus fuga delectus quisquam esse? Animi, magnam vero officia molestias dolore iure quas? Blanditiis odit sapiente voluptatem officiis tempora illum nisi necessitatibus ullam vero temporibus.
                    </p>
                    </div>
                    <div id="divContactoP"><p>Contacto</p></div>
                    <div id="divContacto">
                        <div id="divContactoIzquierdo">
                            <ul id="ul1">
                                <li><img src="./img/wppContacto.png" alt="">1122334455</li>
                                <li><img src="./img/mailContacto.png" alt="">Filomena@gmail.com</li>
                            </ul>
                            <ul id="ul2">                        
                                <li><img src="./img/fbContacto.png" alt="">Filomena SHOES</li>
                                <li><img src="./img/igContacto.png" alt="">@_filomenashoes</li>
                            </ul>
                        </div>
                        <div id="divContactoDerecho">
                            <form>
                                <div class="form-group">
                                <label>Nombre</label>
                                <input class="form-control" id="inputNombreContacto" placeholder="Ingrese su nombre">
                                </div>
                                <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" id="inputEmailContacto" aria-describedby="Email" placeholder="Ingrese su E-mail">
                                </div>
                                <div class="form-group">
                                <label>Teléfono (Opcional)</label>
                                <input class="form-control" id="inputTelefonoContacto" placeholder="Ingrese su teléfono">
                                </div>
                                <div class="form-group">
                                    <label>Mensaje</label>
                                    <textarea class="form-control" id="inputMensajeContacto" rows="3" placeholder="Escriba su mensaje"></textarea>
                                </div>
                                
                                <button type="submite" class="btn btn-outline-dark">Enviar</button>
                            </form>
                        </div>
                    </div>
                    `
        
    $("#containerPrincipal").append(objeto);
}