function obtenerBodegas(){
    document.getElementById("nuevaBodega").style.display= 'none'
    document.getElementById("nuevaFactura").style.display= 'none'
    document.getElementById("nuevoProducto").style.display= 'none'
    var texto = document.getElementById("info")
    var title = document.getElementById("title")
    title.innerHTML = "Bodegas"
    document.getElementById("nuevo").onclick =  nuevaBodega
    document.getElementById("nuevo").style.display =  'inline-flex'
    fetch(`http://localhost:8080/bodegas`).then(function (res) {
        if (res.ok) {
            res.json().then(function (rows) {
                var text = "<table> ";
                text = text + '<th>ID</th>'
                text = text + '<th>NOMBRE</th>'
                text = text + '<th>DIRECCION</th>'
                text = text + '<th></th>'
                text = text + '<th></th>'
                rows.forEach(element => {
                    if(element.id%2 == 0){
                        text = text + "<tr>"
                    }else{
                        text = text + "<tr class=bggray>"
                    }
                    text = text + '<td>' + element.id + '</td>'
                    text = text + '<td id= "nombreBodega'+ element.id+'">' + element.nombre + '</td>'
                    text = text + '<td id= "direccionBodega'+ element.id+'">' + element.direccion + '</td>'
                    text = text + '<td id= "editarBodega' + element.id+'"><img src="./assets/edit.png" alt="" width="20px" onclick="editarBodega('+element.id+')"></td>'
                    text = text + '<td><img src="./assets/delete.png" width = "20px" onclick="borrarBodega('+element.id+')"> </td>'
                    text = text + "</tr>"
                });
                texto.innerHTML = text + "</table>"
            })
        }
    })
}
function obtenerFacturas(){
    document.getElementById("nuevaBodega").style.display= 'none'
    document.getElementById("nuevaFactura").style.display= 'none'
    document.getElementById("nuevoProducto").style.display= 'none'
    var texto = document.getElementById("info")
    var title = document.getElementById("title")
    title.innerHTML = "Facturas"
    document.getElementById("nuevo").onclick =  nuevaFactura
    document.getElementById("nuevo").style.display =  'inline-flex'
    fetch(`http://localhost:8080/facturas`).then(function (res) {
        if (res.ok) {
            res.json().then(function (rows) {
                var text = "<table> ";
                text = text + '<th>ID</th>'
                text = text + '<th>TOTAL</th>'
                text = text + '<th></th>'
                text = text + '<th></th>'
              
                rows.forEach(element => {
                    if(element.id%2 == 0){
                        text = text + "<tr>"
                    }else{
                        text = text + "<tr class=bggray>"
                    }
                    text = text + '<td>' + element.id + '</td>'
                    text = text + '<td id= "totalFactura'+ element.id+'">' + element.total + '</td>'
                    text = text + '<td id= "editarFactura' + element.id+'"><img src="./assets/edit.png" alt="" width="20px" onclick="editarFactura('+element.id+')"></td>'
                    text = text + '<td><img src="./assets/delete.png" width = "20px" onclick="borrarFactura('+element.id+')"> </td>'

                    
                    text = text + "</tr>"
                });
                texto.innerHTML = text + "</table>"
            })
        }
    })
}

function obtenerProductos(){
    document.getElementById("nuevaBodega").style.display= 'none'
    document.getElementById("nuevaFactura").style.display= 'none'
    document.getElementById("nuevoProducto").style.display= 'none'
    var texto = document.getElementById("info")
    var title = document.getElementById("title")
    title.innerHTML = "Productos"
    document.getElementById("nuevo").onclick =  nuevoProducto
    document.getElementById("nuevo").style.display =  'inline-flex'
    fetch(`http://localhost:8080/productos`).then(function (res) {
        if (res.ok) {
            res.json().then(function (rows) {
                var text = "<table> ";
                text = text + '<th>ID</th>'
                text = text + '<th>NOMBRE</th>'
                text = text + '<th>DESCRIPCION</th>'
                text = text + '<th>PRECIO</th>'
                text = text + '<th></th>'
                text = text + '<th></th>'
                rows.forEach(element => {
                    if(element.id%2 == 0){
                        text = text + "<tr>"
                    }else{
                        text = text + "<tr class=bggray>"
                    }
                    
                    text = text + '<td>' + element.id + '</td>'
                    text = text + '<td id= "nombreProducto'+ element.id+'">' + element.nombre + '</td>'
                    text = text + '<td id= "descripcionProducto'+ element.id+'">' + element.descripcion + '</td>'
                    text = text + '<td id= "precioProducto'+ element.id+'">' + element.precio+ '</td>'
                    text = text + '<td  id= "editarProducto' + element.id+'"><img src="./assets/edit.png" alt="" width="20px" onclick="editarProducto('+element.id+')"></td>'
                    text = text + '<td><img src="./assets/delete.png" width = "20px" onclick="borrarProducto('+element.id+')"> </td>'
                                    
                    text = text + "</tr>"
                });
                texto.innerHTML = text + "</table>"
            })
        }
    })
}

function nuevaBodega(){
    document.getElementById("nuevaBodega").style.display= 'block'
    document.getElementById("nuevaFactura").style.display= 'none'
    document.getElementById("nuevoProducto").style.display= 'none'
}
function nuevaFactura(){
    document.getElementById("nuevaFactura").style.display= 'block'
    document.getElementById("nuevaBodega").style.display= 'none'
    document.getElementById("nuevoProducto").style.display= 'none'
}
function nuevoProducto(){
    document.getElementById("nuevoProducto").style.display= 'block'
    document.getElementById("nuevaBodega").style.display= 'none'
    document.getElementById("nuevaFactura").style.display= 'none'
    
}
function guardarBodega(){
    var nombreBodega = document.getElementById("nombreBodega")
    var direccion = document.getElementById("direccion")
    if (nombreBodega.value == "" || direccion.value ==""){
        window.alert("la informacion de la bodega no puede estar vacia")
    }
    fetch(`http://localhost:8080/bodegas`,
        { method: "post", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: nombreBodega.value, direccion:direccion.value }) }).then(
            function(res){
                obtenerBodegas()
                document.getElementById("nuevaBodega").style.display= 'none'
            }
        )

}

function guardarFactura(){
    var totalFactura = document.getElementById("totalFactura")
    if (totalFactura.value == "" ){
        window.alert("la informacion de la factura no puede estar vacia")
    }
    fetch(`http://localhost:8080/facturas`,
        { method: "post", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ total: totalFactura.value }) }).then(
            function(res){
                obtenerFacturas()
                document.getElementById("nuevaFactura").style.display= 'none'
            }
        )

}

function guardarProducto(){
    var nombreProducto = document.getElementById("nombreProducto")
    var descripcionProducto = document.getElementById("descripcionProducto")
    var precioProducto = document.getElementById("precioProducto")
    if (nombreProducto.value == "" || descripcionProducto.value =="" || precioProducto.value ==""){
        window.alert("la informacion del producto no puede estar vacia")
    }
    fetch(`http://localhost:8080/productos`,
        { method: "post", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: nombreProducto.value, descripcion: descripcionProducto.value, precio: precioProducto.value }) }).then(
            function(res){
                obtenerProductos()
                document.getElementById("nuevoProducto").style.display= 'none'
            }
        )

}

function borrarBodega(id){
    var opcion = confirm("estas seguro que desea borrar la bodega " + id + "?")
    if(opcion== true){
        fetch(`http://localhost:8080/bodegas/${id}`,
        { method: "delete", headers: { "Content-Type": "application/json" }}).then(
            function(res){
                obtenerBodegas()
                document.getElementById("nuevaBodega").style.display= 'none'
            }
        )
    }
   
}

function borrarFactura(id){
    var opcion = confirm("estas seguro que desea borrar la factura " + id + "?");
    if(opcion == true){
        fetch(`http://localhost:8080/facturas/${id}`,
        { method: "delete", headers: { "Content-Type": "application/json" }}).then(
            function(res){
                obtenerFacturas()
                document.getElementById("nuevaFactura").style.display= 'none'
            }
        )
    }
}

function borrarProducto(id){
    var opcion = confirm("estas seguro que desea borrar el producto " + id + "?");
    if(opcion == true){
        fetch(`http://localhost:8080/productos/${id}`,
        { method: "delete", headers: { "Content-Type": "application/json" }}).then(
            function(res){
                obtenerProductos()
                document.getElementById("nuevoProducto").style.display= 'none'
            }
        )
    }
}

function editarBodega(id){
    var nombreBodega= document.getElementById("nombreBodega" + id)
    nombreBodega.innerHTML= `<input id="nombreBodegaEdit${id}" value="${nombreBodega.textContent}" >`
    var direccionBodega= document.getElementById("direccionBodega" + id)
    direccionBodega.innerHTML= `<input id="direccionBodegaEdit${id}" value="${direccionBodega.textContent}" >`
    var editarBodega= document.getElementById("editarBodega" + id)
    editarBodega.innerHTML= `<img src="./assets/save.png" alt="" width="20px" onclick="GuardarEditBodega(${id})">`
    
    
}

function GuardarEditBodega(id){
    var nombreBodega= document.getElementById("nombreBodegaEdit" + id)
    var direccionBodega= document.getElementById("direccionBodegaEdit" + id)
    fetch(`http://localhost:8080/bodegas/${id}`,
    { method: "put", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: nombreBodega.value, direccion: direccionBodega.value })}
    ).then(
        function(res){
            obtenerBodegas()
            document.getElementById("nuevaBodega").style.display= 'none'
        }
    )
    
}

function editarFactura(id){
    var totalFactura= document.getElementById("totalFactura" + id)
    totalFactura.innerHTML= `<input id="totalFacturaEdit${id}" value="${totalFactura.textContent}" >`
    var editarFactura= document.getElementById("editarFactura" + id)
    editarFactura.innerHTML= `<img src="./assets/save.png" alt="" width="20px" onclick="GuardarEditFactura(${id})">`
    
    
}

function GuardarEditFactura(id){
    var totalFactura= document.getElementById("totalFacturaEdit" + id)
    
    fetch(`http://localhost:8080/facturas/${id}`,
    { method: "put", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ total: totalFactura.value })}
    ).then(
        function(res){
            obtenerFacturas()
            document.getElementById("nuevaFactura").style.display= 'none'
        }
    )
    
}

function editarProducto(id){
    var nombreProducto= document.getElementById("nombreProducto" + id)
    nombreProducto.innerHTML= `<input id="nombreProductoEdit${id}" value="${nombreProducto.textContent}" >`
    var descripcionProducto= document.getElementById("descripcionProducto" + id)
    descripcionProducto.innerHTML= `<input id="descripcionProductoEdit${id}" value="${descripcionProducto.textContent}" >`
    var precioProducto= document.getElementById("precioProducto" + id)
    precioProducto.innerHTML= `<input id="precioProductoEdit${id}" value="${precioProducto.textContent}" >`
    var editarProducto= document.getElementById("editarProducto" + id)
    editarProducto.innerHTML= `<img src="./assets/save.png" alt="" width="20px" onclick="GuardarEditProducto(${id})">`
    
    
}

function GuardarEditProducto(id){
    var nombreProducto= document.getElementById("nombreProductoEdit" + id)
    var descripcionProducto= document.getElementById("descripcionProductoEdit" + id)
    var precioProducto= document.getElementById("precioProductoEdit" + id)
    
    fetch(`http://localhost:8080/productos/${id}`,
    { method: "put", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: nombreProducto.value, descripcion: descripcionProducto.value, precio:precioProducto.value })}
    ).then(
        function(res){
            obtenerProductos()
            document.getElementById("nuevoProducto").style.display= 'none'
        }
    )
    
}
