async function getData() {
    const response = await fetch('https://api.restful-api.dev/objects');
    const data = await response.json();
    console.log(response)
    // console.log(data);

    const container = document.getElementById('container');
    data.forEach(item => {
        const div = domManipulation(item.id, item.name);
        container.appendChild(div);
    });
}

getData();

function domManipulation(id, name) {
    const div = document.createElement('div');
    div.textContent = `${id} - ${name}`;
    return div;
}