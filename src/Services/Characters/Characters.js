/**
 * @desc Obtenedor de los personajes
 * 
 * @return { Promise<Object> }
 */
export const GetCharacters = async () => {

    // Realizamos la solicitud
    const request = await fetch( "https://swapi.dev/api/people/" );

    // Datos de la solicitud
    const data = await request.json();

    return data;

}