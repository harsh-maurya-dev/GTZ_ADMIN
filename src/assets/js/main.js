const profile = document.querySelector('.profile');
const menu = document.querySelector('.menu');
const addMoreFeature = $('#addMoreFeature');

// profile.onClick = function () {
//     menu.classList.toggle('active');
// }

const contentPart = $('.content-part');

contentPart.on('scroll', function () {
    const header = document.getElementById("header");
    if (contentPart.scrollTop() > 0) {
        header.classList.add("fixed-header");
    } else {
        header.classList.remove("fixed-header");
    }
})

function addNoteList() {
    const noteSend = $('.note-send');
    noteSend.toggleClass("show");
}
function addPropAccount() {
    const PropAccount = $('.Prop-Account');
    PropAccount.toggleClass("show");
}
function addPurchaseProp() {
    const PurchaseAccount = $('.Purchase-Account');
    PurchaseAccount.toggleClass("show");
}
function addBlockLister() {
    const PurchaseAccount = $('.Block-lister');
    PurchaseAccount.toggleClass("show");
}
function addEditAffiliate() {
    const PurchaseAccount = $('.Make-Affiliate');
    PurchaseAccount.toggleClass("show");
}

function addMoreFeatureBtn() {
    addMoreFeature.append(`
         <div class="col-6">
            <div class="form-group">
                <label for="" class="form-label">Feature Deatils</label>
                <input type="text" class="form-control">
            </div>
        </div>
        `)
}
// Change Background Color Theme

const setDataStorage = localStorage.getItem("theme");
const changeColorBtn = $(".color-radio");
const lightColorRadio = $('.light-color-radio')
const darkColorRadio = $(".dark-color-radio")
const mainDisplay = $('.main-display');
const Body = $("body")

mainDisplay.removeClass("light-blue-white-color yellow-color gray-color").addClass(setDataStorage);
Body.removeClass("light-blue-white-color yellow-color danger-color success-color gray-color").addClass(setDataStorage);

if (setDataStorage === "light-blue-white-color") {

    $('input[value="light-blue-white-color"]').prop('checked', true);
    // console.log("Checked:", $('input[value="light-blue-white-color"]').prop('checked'));

} else if (setDataStorage === "yellow-color") {

    $('input[value="yellow-color"]').prop('checked', true);

} else if (setDataStorage === "danger-color") {

    $('input[value="danger-color"]').prop('checked', true);

}
else if (setDataStorage === "success-color") {

    $('input[value="success-color"]').prop('checked', true);

} else if (setDataStorage === "gray-color") {

    $('input[value="gray-color"]').prop('checked', true);

}
changeColorBtn.on("click", function () {
    const colorValue = $(this).val();
    mainDisplay.removeClass("light-blue-white-color yellow-color danger-color success-color gray-color").addClass(colorValue);
    Body.removeClass("light-blue-white-color yellow-color danger-color success-color gray-color").addClass(colorValue);
    localStorage.setItem("theme", colorValue)
})


function addMoreBundle() {
    const addMoreBundle = $("#addMoreBundle");
    addMoreBundle.append(`
        <div class="col-6">
            <div class="form-group">
                <label for="" class="form-label">Bundle</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="col-4">
            <div class="form-group">
                <label for="" class="form-label">Price</label>
                <input type="text" class="form-control">
            </div>
        </div>
        <div class="col-2 mt-3">
            <button class="table-icon bg-danger mt-4">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `)
}
const commanAccordin = $(".comman-accordin");

commanAccordin.on("click", function () {
    let element = $(this).closest(".comman-design2").find(".comman-design-body");
    const height = element.prop("scrollHeight");

    element.toggleClass("p-0");
    console.log(height)
    if (element.hasClass("p-0")) {
        element.css("height", 0);
        $(this).closest(commanAccordin).removeClass("show");
    } else {
        element.css("height", height + 40 + "px");
        $(this).closest(commanAccordin).addClass("show");
    }
});
function addAmountFieldBtn() {
    const addAmountField = $("#addAmountField");
    addAmountField.append(`
         <div class="col-6 mb-4">
         <input type="text" class="form-control"
        id="targetCustomerId" placeholder="">
        </div>
        `)
}