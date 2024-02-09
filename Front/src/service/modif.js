/**
 * 
 * @param {string} username 
 * @param {string} lastname 
 * @param {string} JWT 
 * @returns {object} 
 */
export const userPut = async (username, lastname, JWT) => {

    const body = {
        firstName: username,
        lastName: lastname
    }

    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + JWT,
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(body)
        });
        const userData = await response.json();

        return userData;
    } catch (error) {
        console.log(error);
        return 'REFUSED'
    }
}