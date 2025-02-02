window.onload = () => {
    main()
}

function main() {
    
    const root = document.getElementById('root');
    const btn = document.getElementById('changeBtn');
    btn.addEventListener('click', ()=> {
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
        document.getElementById('colorCode').innerHTML = bgColor;
    })
}

function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgb = `rgb(${red}, ${green}, ${blue})`
    
    return rgb;
}