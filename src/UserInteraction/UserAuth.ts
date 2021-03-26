export const UserAuth = (token:string) => {
    localStorage.setItem("token", token);
}