$("#save").on("click", function() {
    localStorage.setItem("theme", $("#theme").val());
    updateTheme();

    /*if (isInIframe()) {
        parent.updateTheme();
    }*/
});

$("#settings-form").submit(function(event) {
    event.preventDefault();
});

$(window).on('load', function() {
    var theme = localStorage.getItem("theme");
    $("#theme").find('option[value="' + theme + '"]').attr('selected', 'selected');
});
