const handleBlue = () => {
    document.getElementById("cir").style.backgroundColor = "blue"
}

const handleRed = () => {
    document.getElementById("cir").style.backgroundColor = "red"
}

const handleGreen = () => {
    document.getElementById("cir").style.backgroundColor = "green"
}

const handleReset = () => {
    document.getElementById("cir").style.backgroundColor = "white"
    document.getElementById("cir").style.borderRadius = "50%"
    document.getElementById("cir").style.height = "350px"
    document.getElementById("cir").style.width = "350px"
}

const handleColor = () => {
    const color = document.getElementById("color").value
    document.getElementById("cir").style.backgroundColor = color
}

const handleSquare = () => {
    document.getElementById("cir").style.borderRadius = "0%"
}

const handleRectangle = () => {
    document.getElementById("cir").style.borderRadius = "0%"
    document.getElementById("cir").style.width = "600px" 
}

const handleTraingle = () => {
    document.getElementById("cir").style.width = "600px"
    document.getElementById("cir").style.borderRadius = "50%"
}
