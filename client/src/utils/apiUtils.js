//Module handles API fetches set-up for development use with JSON Server

const API = "http://localhost:8088"

export const fetchDecks = async (resource = "", options = {}) => {
  const endPoint = "/decks"
    const response = await fetch(`${API}${endPoint}${resource}`, options)
  return await response.json()
}

export const fetchSuits = async (resource = "", options = {}) => {
  const endPoint = "/suits"
    const response = await fetch(`${API}${endPoint}${resource}`, options)
  return await response.json()
}

export const fetchCards = async (resource = "", options = {}) => {
  const endPoint = "/cards"
    const response = await fetch(`${API}${endPoint}${resource}`, options)
  return await response.json()
}
