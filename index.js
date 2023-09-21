console.log("Hello World")

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked")
    resultCont.innerHTML = '<img src="Images/loading.svg" alt="The Loading Image">'

    let key = "ema_live_mtsAjWzqJzMwXhbAljGhqXur53Qi6YCKnwHXx85L"
    let email = document.getElementById("email").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ` `
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key] !== " ")
        str = str + `<div>${key} : ${result[key]}</div>`
    }

    console.log(str)
    resultCont.innerHTML = str

})

