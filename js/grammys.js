

$.ajax({
  url : 'https://github.io/mdgarciaaguilar/Web-labs/blob/master/labs_completos/grammys/data/grammys.json,
  type : 'GET',
  dataType : 'json',
  success: function(data) {
    let newHtml = ''

    for( let i = 0; i < data.length; i++) {
      newHtml += `
        <option value = "${data[i].identifier}">
          ${data[i].state}
        </option>
      `
    }
    $('#category_types').append(newHtml)

  },
  error : function(errorMsg) {
    console.log(errorMsg)
  }
})
