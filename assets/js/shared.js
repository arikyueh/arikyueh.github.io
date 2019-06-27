var parentDivStyle = "display: flex; justify-content: center; align-items: center; height: 100vh; z-index: 100000; position: fixed; background-color: rgba(0,0,0,0.9); top: 0; width: 100vw"

var zoomedFrameStyle = "overflow: visible; -webkit-animation-name: zoom; -webkit-animation-duration: 0.6s; animation-name: zoom; animation-duration: 0.6s; top: 0"

var minimizedFrameStyle = "display: none; min-width: 0px; min-height: 0px"

var closeButtonStyle = "position: absolute; top: 20px; right: 50px; color: #f1f1f1; font-size: 40px; font-weight: bold; transition: 0.3s;"

function closeButtonHoverEffect(id) {
    return '#' + id + ':hover {color: #bbb; text-decoration: none; cursor: pointer; }'
}

function rng() {
    return 'a' + Math.round(Math.random() * Math.pow(10, 10))
}

function showModal(imageSrc) {
    
    var parentDiv = document.createElement('div')
    parentDiv.setAttribute('style', parentDivStyle)
    
    var closeIcon = document.createTextNode('x')
    var closeButton = document.createElement('span')
    closeButton.appendChild(closeIcon)
    closeButtonId = rng()
    closeButton.setAttribute('style', closeButtonStyle)
    closeButton.id = closeButtonId

    var imageEl = document.createElement('img')
    var styleEl = document.createElement('style');
    document.head.appendChild(styleEl);
    var styleSheet = styleEl.sheet;
    styleSheet.insertRule(closeButtonHoverEffect(closeButtonId))

    imageEl.setAttribute('src', imageSrc)
    document.body.appendChild(parentDiv)
    parentDiv.appendChild(closeButton)
    parentDiv.appendChild(imageEl)

    imageEl.setAttribute('style', minimizedFrameStyle)
    setTimeout(() => {
        imageEl.setAttribute('style', zoomedFrameStyle)
    }, 100)
    document.body.style.overflow = 'hidden'

    closeButton.addEventListener('click', function() {
        document.body.removeChild(parentDiv)
        document.body.style.overflow = 'auto'
    })
}

function setImageModal(srcImgUrl) {
    document.querySelectorAll('img[src="' + srcImgUrl + '"]').forEach(function(node){
        node.addEventListener('click', function() {
            showModal(srcImgUrl)
        })
    })
}
