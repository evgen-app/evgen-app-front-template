export const CheckUser = () => {
    return localStorage.getItem("token")?.length
}