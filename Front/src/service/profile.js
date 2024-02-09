/**
 * 
 * @param {string} JWT 
 * @returns {object}
 */
export const userProfile = async (JWT) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + JWT,
                'Content-Type': 'application/json;charset=UTF-8'
            },
        });
        const profilData = await response.json();

        return profilData.body;
    } catch (error) {
        console.log(error);
        return null;
    }
}