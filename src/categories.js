export const categories = [
    {
        name: 'trending',
        title: 'Em alta',
        path: `trending/all/week?language=pt-BR&api_key=`,
        isLarge: true
    },
    {
        name: 'action',
        title: 'Ação',
        path: `discover/movie?with_genres=28?language=pt-BR&api_key=`,
        isLarge: false
    },
    {
        name: 'comedy',
        title: 'Comédia',
        path: `discover/movie?with_genres=35?language=pt-BR&api_key=`,
        isLarge: false
    },
    {
        name: 'romance',
        title: 'Romance',
        path: `discover/movie?with_genres=10749?language=pt-BR&api_key=`,
        isLarge: false
    },
    {
        name: 'horror',
        title: 'Terror',
        path: `discover/movie?with_genres=27?language=pt-BR&api_key=`,
        isLarge: false
    }
]