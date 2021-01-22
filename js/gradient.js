// blendingMode either hard-light or color

var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#eeb3af', '#fdb470'],
                ['#7476a6', '#ad8db4'],
                ['#fea69a', '#c6a6bd'],
                ['#ffe4aa', '#fecf63']
            ],
            transitionSpeed: 14000
        }
    }
});