let activeItem = null;
let prevItem = null;


$('.click-select-design').mouseenter(() => isActive('.click-select-design'));

$('.click-the-road').mouseenter(() => isActive('.click-the-road'));

$('.click-css-zen').mouseenter(() => isActive('.click-css-zen'));


$('.click-download').mouseenter(() => isActive('.click-download'))


$('.click-select-design').mouseleave(() => isNoneActive('.click-select-design'));

$('.click-the-road').mouseleave(() => isNoneActive('.click-the-road'));

$('.click-css-zen').mouseleave(() => isNoneActive('.click-css-zen'));


$('.click-download').mouseleave(() => isNoneActive('.click-download'))

console.log($('.select-design'))

const isActive = (elem) => {
    // console.log(elem);
    // prevItem = activeItem;
    // activeItem = elem;
    // console.log(activeItem, prevItem)
    $(elem).addClass(' active');
    // isNoneActive(prevItem)
}
const isNoneActive = (elem) => {
    $(elem).removeClass(' active')
}