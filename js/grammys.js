

$.ajax({
  url : 'https://mdgarciaaguilar.github.io/lab3/data/grammys.json',
  type : 'GET',
  dataType : 'json',
  success: function(data) {
    let newHtml = ''

    for( let i = 0; i < data.fields.length; i++) {
      newHtml += `
        <option value = "${data.fields[i].field_id}">
          ${data.fields[i].field}
        </option>
      `
    }
    $('#category_types').append(newHtml)
    loadField()

  },
  error : function(errorMsg) {
    console.log(errorMsg)
  }
})

function loadField() {
  $.ajax({
    url : 'https://mdgarciaaguilar.github.io/lab3/data/grammys.json',
    type : 'GET',
    dataType : 'json',
    success : function(data) {
      $('#category_types').on('change', function(event) {

        // Obtener el id del field seleccionado y restarle 1, ya que la opcion 0
        // es la de selecciona una opcion, y el array de datos empieza en 0
        let id = $(this).val()
        id = id - 1

        let newHtml = ''

        // Si la opción seleccionada no es -1, desplegar la info correspondiente
        if (id !== "-1") {

          // Nombre del Field
          newHtml += `
            <h2> ${data.fields[id].field} </h2>

          `

          // Descripción
          if (data.fields[id].description) {
            newHtml += `<h5 class="description"> ${data.fields[id].description} </h5>`
          }

        // Nombre de categoría y descripción
        for( let i = 0; i < data.fields[id].categories.length; i++ ) {

          newHtml += `
            <hr>
            <h3> ${data.fields[id].categories[i].category_name} </h3>
          `
          // Si existe descripción para la categoría
          if (data.fields[id].categories[i].description) {
            newHtml += `
              <h5 class="description"> ${data.fields[id].categories[i].description} </h5>
            `
          }

          // Nominees de cada categoría
          for( let j = 0; j < data.fields[id].categories[i].nominees.length; j++ ) {

            if (j == data.fields[id].categories[i].winner_id) {
              newHtml += `
                <li class="winner"> ${data.fields[id].categories[i].nominees[j].nominee} -
                ${data.fields[id].categories[i].nominees[j].artist} WINNER!
                </li>

                <h5 class="nominees_list"> ${data.fields[id].categories[i].nominees[j].info} </h5>
              `
            } else {
              newHtml += `
                <li> ${data.fields[id].categories[i].nominees[j].nominee} -
                ${data.fields[id].categories[i].nominees[j].artist}
                </li>
                <h5 class="nominees_list"> ${data.fields[id].categories[i].nominees[j].info} </h5>
              `
            }


          }
        }
      }





        $('#nominees_section').html(newHtml)


      })
    },
    error : function(errorMsg) {
      console.log(errorMsg)
    }
  })
}
