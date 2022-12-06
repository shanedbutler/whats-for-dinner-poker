//Module handles API fetches set-up for development use with JSON Server

const API = "http://localhost:8088"

export const fetchUsers = (resource = "", options = {}) => {
    const endPoint = "/users"
    return fetch(`${API}${endPoint}${resource}`, options)
    .then(response => response.json())
}

export const fetchDecks = (resource = "", options = {}) => {
  const endPoint = "/decks"
    return fetch(`${API}${endPoint}${resource}`, options)
    .then(response => response.json())
}

export const fetchSuits = (resource = "", options = {}) => {
  const endPoint = "/suits"
    return fetch(`${API}${endPoint}${resource}`, options)
    .then(response => response.json())
}

export const fetchCards = (resource = "", options = {}) => {
  const endPoint = "/cards"
    return fetch(`${API}${endPoint}${resource}`, options)
    .then(response => response.json())
}

export const fetchHistory = (resource = "", options = {}) => {
  const endPoint = "/gameHistory"
    return fetch(`${API}${endPoint}${resource}`, options)
    .then(response => response.json())
}

export const postOption = (bodyContent) => {
    const post = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyContent),
      }
  return post
}

export const putOption = (bodyContent) => {
    const put = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyContent),
      }
    return put
  }

  export const deleteOption = () => {
    const deleteOpt = {
        method: "DELETE",
    }
    return deleteOpt
  }
