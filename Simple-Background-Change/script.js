function change()
{
    let random_value = Math.round(Math.random() * 10000000).toString(16)
    document.body.style.backgroundColor="#"+random_value
}