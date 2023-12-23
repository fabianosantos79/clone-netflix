const API_BASE = "https://api.themoviedb.org/3/"
const API_KEY = "0a9464bc7728f9404e3a5da964e1c741"

export async function getMovies(path) {
    try {
        const url = `${API_BASE}${path}${API_KEY}`;
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("Erro: " + error);
    }
}