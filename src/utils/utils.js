//Return user object form local storage
export const getLocalUser = () => {
    return { ...JSON.parse(localStorage.getItem("dinnerPokerUser")) }
}
