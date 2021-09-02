function addUpdateDeleteButton() {
    const dataDetailForm = document.querySelector('#data-detail-form .button')
    dataDetailForm.addEventListener('click', (event) => {
        console.log(event.target)
    })
}