function filterSkills() {
    var input = document.getElementById("filter")
    var filter = input.value.toUpperCase()
    var ul = document.getElementById("my-UL")
    var list = ul.getElementsByTagName("li")

      for (var i=0; i < list.length; i++) {
        var text = list[i].getElementsByTagName("p")[0];
        var textValue = text.textContent || text.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          list[i].style.display = 'block'
        } else {
          list[i].style.display = 'none'
        }
      }
  }
