

$.ajax({
  url : 'https://mdgarciaaguilar.github.io/lab3/data/grammys.json',
  type : 'GET',
  dataType : 'json',
  success: function(data) {
    let newHtml = ''

    for( let i = 0; i < data.fields.length; i++) {
      newHtml += `
        <option value = "${data.fields[i].field_id - 1}">
          ${data.fields[i].field}
        </option>
      `
    }
    $('#category_types').append(newHtml)

  },
  error : function(errorMsg) {
    console.log(errorMsg)
  }
})
