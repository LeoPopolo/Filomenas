
window.onload = asignarEventos;

function asignarEventos() {

    agregarInicio();

    $("#botonNosotros").click(function()
    {
        agregarNosotros();
    });

    $("#botonProductos").click(function()
    {
        agregarProductos();
    });

    $("#botonContacto").click(function()
    {
        agregarContacto();
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
                                <img src="./img/zapatos1.jpg" style="height:100%">
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
                                <img src="./img/zapatos2.jpg" style="height:100%;">
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
                                <img src="./img/zapatos3.jpg" style="height:100%;">
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
                                <img src="./img/zapatos4.jpg" style="height:100%;">
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

function agregarNosotros(){

    $("#containerPrincipal").empty();

    var objeto = `<div id="menuNosotros">
                    <p id="quienesSomos">
                        ¿Quiénes somos?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, a odio quo illum corrupti unde. Officia dolor, sapiente aperiam facere atque temporibus voluptates itaque animi impedit minima, a architecto ex!
                        Quas ipsa veritatis eius dolorum, a neque cumque tempora! Minima mollitia atque, possimus at quos doloribus magni sit rem dolorem officiis quidem harum. Dolores labore consequuntur praesentium nesciunt reiciendis at.
                        Fugiat ut iure, assumenda praesentium a autem alias. Corrupti doloremque quidem, quis dolorum quod placeat laboriosam voluptatem nostrum exercitationem eius consequatur eveniet voluptate magnam itaque! Dolor necessitatibus cupiditate totam nobis.
                        Repellendus ea nam quibusdam non possimus fuga delectus quisquam esse? Animi, magnam vero officia molestias dolore iure quas? Blanditiis odit sapiente voluptatem officiis tempora illum nisi necessitatibus ullam vero temporibus.
                        Cupiditate beatae nisi, voluptatibus adipisci iure deleniti doloremque illo eligendi quo minima, optio distinctio. Cum, amet, reiciendis totam est, enim voluptates reprehenderit nisi iure rem aperiam maiores architecto saepe esse.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, a odio quo illum corrupti unde. Officia dolor, sapiente aperiam facere atque temporibus voluptates itaque animi impedit minima, a architecto ex!
                        Quas ipsa veritatis eius dolorum, a neque cumque tempora! Minima mollitia atque, possimus at quos doloribus magni sit rem dolorem officiis quidem harum. Dolores labore consequuntur praesentium nesciunt reiciendis at.
                        Fugiat ut iure, assumenda praesentium a autem alias. Corrupti doloremque quidem, quis dolorum quod placeat laboriosam voluptatem nostrum exercitationem eius consequatur eveniet voluptate magnam itaque! Dolor necessitatibus cupiditate totam nobis.
                        Repellendus ea nam quibusdam non possimus fuga delectus quisquam esse? Animi, magnam vero officia molestias dolore iure quas? Blanditiis odit sapiente voluptatem officiis tempora illum nisi necessitatibus ullam vero temporibus.
                    </p>
                </div>`
        
    $("#containerPrincipal").append(objeto);
}

function agregarContacto(){
    $("#containerPrincipal").empty();

    var objeto = `<div id="divContactoP"><p>Contacto</p></div>
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
    </div>`
        
    $("#containerPrincipal").append(objeto);
}

function agregarInicio(){

    $("#containerPrincipal").empty();

    var objeto = `
                    <div id="divInicio">
                    <p>Aca van nuevas noticias, ofertas, promociones, etc.</p>
                    <img src="./img/imgInicio.jpg" height="500px">
                    </div>
                    `
        
    $("#containerPrincipal").append(objeto);
}