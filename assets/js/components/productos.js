import productos from '../database/index.js'

/* Buscar el elemento en el DOM */
const productosContenedor = document.getElementById('productosContenedor')
const bebidasContenedor = document.getElementById('bebidasContenedor')

/* Pintamos los productos en el DOM */
function pintarProductos() {
  /* Creamos una variable para almacenar después los productos */

  let html1 = ''
  /* Recorremos el array de productos */
  for (const { id, nombre, imagen, precio, cantidad, categoria } of productos) {
    if (categoria == 'aperitivos') {
      html1 += `
      <div class="card">
      <div class="imgCard">
      <img src="${imagen}" alt="${nombre}">
      </div>
      <div class="contenidoCard">
      <div class="cardTitle">
        <h2>${nombre}</h2>
        <h2>$${precio}.00</h2>
        </div>
        <p><span>Cantidad:</span> ${cantidad}</p>
        <div class="buttonAdd">
          <button type="button" class="agregar" data-id="${id}">Agregar</button>
        </div>
      </div>
    </div>   
    `
    }
  }
  productosContenedor.innerHTML = html1
  let html = ''
  /* Recorremos el array de productos */
  for (const { id, nombre, imagen, precio, cantidad, categoria } of productos) {
    if (categoria == 'bebidas') {
      html += `
    <div class="card">
      <div class="imgCard">
      <img src="${imagen}" alt="${nombre}">
      </div>
      <div class="contenidoCard">
      <div class="cardTitle">
        <h2>${nombre}</h2>
        <h2>$${precio}.00</h2>
        </div>
        <p><span>Cantidad:</span> ${cantidad}</p>
        <div class="buttonAdd">
          <button type="button" class="agregar" data-id="${id}">Agregar</button>
        </div>
      </div>
    </div>    
    `
    }
  }
  bebidasContenedor.innerHTML = html

}

export default pintarProductos
