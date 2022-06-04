export const goToFeed = (navigate) => {
    navigate('/')
}

export const goToRestaurant = (navigate, id) => {
    navigate(`/restaurante/${id}`)
}

export const goToProfile = (navigate) => {
    navigate(`/perfil`)
}

export const goToLogin = (navigate) => {
    navigate('/login')
}
export const goToEdit = (navigate) => {
    navigate('/editar')
}


export const goToRegister = (navigate) => {
    navigate('/cadastro')
}

export const goToRegisterAddress = (navigate) => {
    navigate('/cadastroAddress')
}
export const goToAddAndress = (navigate) => {
    navigate('/addAdress')
}

export const goToCart = (navigate) => {
    navigate('/cart')
}

export const goToBack = (navigate) => {
    navigate(-1)
}