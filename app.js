let form = document.querySelector('.formbutton');
let input = document.querySelector(".searchbox")
let gifDiv = document.querySelector(".gifs")
let removeBtn = document.querySelector(".remove")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputValue = input.value;
    input.value = "";
    //console.log(inputValue)
    getGif(inputValue);
    
})

async function getGif(searchTerm) {
    try {
        const response = await axios.get("http://api.giphy.com/v1/stickers/search", {params: {api_key:"rrKVWCHk8SG9SWdbfvilHXKLl5ZluRPr", q:searchTerm, limit:1, bundle:'clips_grid_picker'}})
        const gifUrl = response.data.data[0].images.fixed_width.url;
        //console.log(gifUrl);
        appendToHtml(gifUrl);
    } catch(e) {
        alert("Gif not available for term. Please try something else :D")
        return;
    }
}

function appendToHtml(url) {
    const newGif = document.createElement("img");
    newGif.src = url;
    gifDiv.appendChild(newGif);
}

removeBtn.addEventListener("click", function() {
    gifDiv.innerHTML = "";
})


console.log("Let's get this party started!");