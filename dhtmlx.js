const popup = new dhx.Popup({
    css: "dhx_widget--bordered"
});

popup.attachHTML("<div style='padding: 16px; text-align: center'>Hi there, <br/> welcome to DHTMLX popup samples</div>");
document.querySelector("#show").addEventListener("click", function () {
    popup.show("show");
});