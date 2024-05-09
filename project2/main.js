
var viewer = document.querySelector('.viewer'),
    frame_count = 23,
    offset_value = 200;


var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0,
        reverse: true
    }
});


new ScrollMagic.Scene({
    triggerElement: '#sticky',
    duration: (frame_count * offset_value) + 'px',
    reverse: true
})
    .setPin('#sticky')
    //.addIndicators()
    .addTo(controller);


for (var i = 1, l = frame_count; i <= l; i++) {
    new ScrollMagic.Scene({
        triggerElement: '#sticky',
        offset: i * offset_value
    })
        .setClassToggle(viewer, 'frame' + i)
        //.addIndicators()
        .addTo(controller);
}