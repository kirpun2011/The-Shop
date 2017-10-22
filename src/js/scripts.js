Your code here...
$(".color_one").on("click", function () {
    $(this).toggleClass("active")
    $(".color_two").removeClass("active")
    $(".color_three").removeClass("active")
    $(".photo_one").toggleClass("photo_one")
    $(".photo_two_invisible").removeClass("photo_two")
    $(".photo_three_invisible").removeClass("photo_three")
});


$(".color_two").on("click", function () {
    $(this).toggleClass("active")
    $(".color_one").removeClass("active")
    $(".color_three").removeClass("active")
    $(".photo_one").toggleClass("photo_one_invisible")
    $(".photo_two_invisible").toggleClass("photo_two")
    $(".photo_three_invisible").removeClass("photo_three")
});

$(".color_three").on("click", function () {
    $(this).toggleClass("active")
    $(".color_one").removeClass("active")
    $(".color_two").removeClass("active")
    $(".photo_three_invisible").toggleClass("photo_three")
    $(".photo_one").toggleClass("photo_one_invisible")
    $(".photo_two_invisible").removeClass("photo_two")
});
