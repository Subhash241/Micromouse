function allowobstacles() {
    let a = $("#rows").val();
    let b = $("#columns").val();
    let totalObstacles = (a * b) / 15;
    for (let i = 0; i < totalObstacles; i++) {
        let start_a = Math.floor(Math.random() * a);
        let start_b = Math.floor(Math.random() * b);
        let end_a = Math.floor(Math.random() * a);
        let end_b = Math.floor(Math.random() * b);
        // console.log(start_a, start_b);
        $(`#cell-${start_a}-${start_b}`).toggleClass("obstacle");
        // $(`#cell-${end_a}-${end_b}`).addClass("end");
    }

    // $(".cell").on("click", (e) => {
    //     $("#" + e.target.id).toggleClass("obstacle");
    // });
}

$(() => {
    $("#randomObstacles").on("click", (e) => {
        allowobstacles();
    });
});