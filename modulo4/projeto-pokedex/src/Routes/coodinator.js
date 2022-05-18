export const goToHome = (navigate) => {
    navigate('/')
}

export const goToPokedex = (navigate) => {
    navigate('/pokedex')
}

export const goToDetails = (navigate, id) => {
navigate(`/details/${id}`)
  
}

export const goToBack = (navigate) => {
    navigate(-1)
}