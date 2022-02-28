function add(...nums) {
    let total = nums.reduce((x, y) =>
        x + y
    )
    console.log(total);
}
add(9, 20, 19)