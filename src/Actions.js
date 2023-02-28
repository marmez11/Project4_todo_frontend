import { redirect } from "react-router-dom"

const URL = "https://project-4-backend-weapons2.onrender.com/weapons/"
//const URL = "https://coverletter-backend.onrender.com/coverletters/"

export const createAction = async ({request}) => {
    // get the form data
    const formData = await request.formData()

    // construct request body
    const weapons = {
        weapon_name : formData.get("weapon_name"),
        weapon_type : formData.get("weapon_type"),
        weapon_serial_number : formData.get("weapon_serial_number"),
        weapon_origin_country : formData.get("weapon_origin_country"),
        weapon_caliber : formData.get("weapon_caliber"),
        weapon_description : formData.get("weapon_description"),
        weapon_state : formData.get("weapon_state")
    }

    // construct request body
    /*const newLetter = {
        name: formData.get("name"),
        position: formData.get("position"),
        date: formData.get("date"),
        company: formData.get("company"),
        yoe: formData.get("yoe"),
        skill: formData.get("skill"),
        expertise: formData.get("expertise"),
        passion: formData.get("passion"),
        products: formData.get("products")
    }*/

    // send request to backend
    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(weapons)
    })

    // redirect back to the index page
    return redirect("/weapons")
}

export const updateAction = async ({request, params}) => {
    // get the form data
    const formData = await request.formData()

    // get the cover letters id
    const id = params.id

    // construct request body
    const updatedweapons = {
        weapon_name : formData.get("weapon_name"),
        weapon_type : formData.get("weapon_type"),
        weapon_serial_number : formData.get("weapon_serial_number"),
        weapon_origin_country : formData.get("weapon_origin_country"),
        weapon_caliber : formData.get("weapon_caliber"),
        weapon_description : formData.get("weapon_description"),
        weapon_state : formData.get("weapon_state")
    }

    // construct request body
    /*const updatedLetter = {
        name: formData.get("name"),
        position: formData.get("position"),
        date: formData.get("date"),
        company: formData.get("company"),
        yoe: formData.get("yoe"),
        skill: formData.get("skill"),
        expertise: formData.get("expertise"),
        passion: formData.get("passion"),
        products: formData.get("products")
    }*/

    // send request to backend
    await fetch(URL + `${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedweapons)
    })

    // redirect back to the show page
    return redirect(`/weapons/${id}`)
}

export const deleteAction = async ({params}) => {
    // get the cover letters id
    const id = params.id

    // send request to backend
    await fetch(URL + `${id}/`, {
        method: "delete",
    })

    // redirect back to the index page
    return redirect(`/weapons`)
}