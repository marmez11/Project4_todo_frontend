const URL = "https://project-4-backend-weapons2.onrender.com/weapons/"
//const URL = "https://coverletter-backend.onrender.com/coverletters/"

export const WeaponsLoader = async () => {
    const response = await fetch(URL)
    const weapon = await response.json()
    return weapon

}

export const WeaponsShowLoader = async ({params}) => {
    const response = await fetch(URL + `${params.id}/`)
    const weaponindex = await response.json()
    return weaponindex
}