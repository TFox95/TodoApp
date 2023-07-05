
const handleLearnButtonScroll: () => void = () => {
    document.querySelector(`.main`)?.scrollIntoView({
        behavior: "smooth"
    })
}

export {
    handleLearnButtonScroll,
}