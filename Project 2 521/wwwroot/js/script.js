var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "fdc49ef654c7479299e5ee6c7ec1eb90");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function changeBackground() {
    document.getElementById("backgroundChange").style.backgroundImage = "url(https://i.pinimg.com/originals/2e/5d/90/2e5d90afa454a6da4d84c7fb7ec32595.jpg)";
}

function callApiSearch() {
    apiSearch();
}

function getTime() {
    var time_now = new Date();
    var formatted_time = time_now.getHours() + ":" + time_now.getMinutes();
    window.confirm(document.getElementById("time").innerHTML = formatted_time);
}