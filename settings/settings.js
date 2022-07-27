$("#save").on("click", function() {
    console.log($("#theme").val());
    localStorage.setItem("theme", $("#theme").val());
    updateTheme();
});

$("#settings-form").submit(function(event) {
    event.preventDefault();
});