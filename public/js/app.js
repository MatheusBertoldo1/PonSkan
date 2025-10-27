
const EnableUpdateData = (element_id) => {
    const btnEditData = document.getElementById(element_id)

    if (btnEditData.id ==  'confirm-edit1') {
        inputs = document.querySelectorAll('.personal-info')
    }
    else if(btnEditData.id ==  'confirm-edit2'){
        inputs = document.querySelectorAll('.account-info')   
    }
    
    inputs.forEach(element => {
        element.style.pointerEvents= 'all'
        element.style.cursor= 'pointer'
        element.style.backgroundColor= '#fff'
        element.style.color= '#394552'
        element.style.border= '1px solid #394552'
    });

    btnEditData.style.opacity = 1
    btnEditData.style.pointerEvents = "all"
}

const DisableThisElement = (element) => {

    element.style.opacity = 0
    element.style.pointerEvents = "none"
}