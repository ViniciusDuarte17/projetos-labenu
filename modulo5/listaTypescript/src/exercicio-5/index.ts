
type Email = {
    name:string,
    email:string,
    role:string
}

const emails: Email[]=  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const buscaPorAdmin = (email: Email[]) => {
  const newEmail =  email.filter( 
        (item) => {
            return item.role === "admin"
        }
    ).map(
        (item) => {
            return item
        }
    )
    return newEmail
}
console.log(buscaPorAdmin(emails))