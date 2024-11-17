    // interpolacion de la url con  backticks ``
    // encodeURI reemplaza espacios por caracteres
    //async retorna una promesa que contiene las imagenes 
    export const getGifs = async ( category ) => {

        const url = ` https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Yf8KtN3WSgo7LdPx9x4ka0qcRSpqpgkb `;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })


      return gifs;
    }
