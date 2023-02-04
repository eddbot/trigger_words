let triggered = false
const triggerWords = ["World of Warcraft", "world of warcraft", "WoW"]

window.addEventListener('load', (e) => {
    checkContent(document)

    if (triggered) {
        const proceed = confirm("this page potentially contains triggering content, press OK to proceed or Cancel to redirect to your safe site")

        if (!proceed) {
            window.location.replace("https://www.google.com")
        }
    }
})

const checkContent = (element) => {

    if (element === null) {
        return false
    }
    const content = element.innerHTML;
    triggerWords.forEach(word => {
        const triggering = content?.includes(word);

        if (triggering) {
            triggered = true
        }

    });

    [...element.children].forEach(c => checkContent(c))
}
