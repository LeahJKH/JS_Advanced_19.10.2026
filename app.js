
// function start(callback) {
    
//     callback(last)
// }
// function middle(callback) {
    // callback()
    // }
    // function last () {
        
    // }
    // start(middle)
    
    async function vent(apiData) {  
        try {
            fetch(apiData)
            .then(res => res.json())
            .then(data => displayData(data))
            .finally(console.log("ferdig lasta"))
        } catch (err) {
            console.error(err)
        }
        let api = await fetch(url)
       console.log(api)
    }
    
    const url = "https://raw.githubusercontent.com/LeahJKH/MikuApi/refs/heads/main/json/mikuFacts.json"
    const JsonObj = "./data.json"
    const baseUrl = "https://ghibliapi.vercel.app"
    let urlWithEndpoint = baseUrl + "/films"
vent(urlWithEndpoint)

const cont = document.querySelector("#contain")

const obj = {
    data: "hei",
    alder: 23
}


function displayData(arr1) {
    arr1.forEach(e => {
        const p = document.createElement("p")
        const pText = document.createTextNode(e.title)
        // p.textContent = e
        const img = document.createElement("img")
        img.src = e.image

        p.append(pText)
        cont.append(p, img)
    });
}