/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {string} token
 */
export const userLogin = async (email, password) => {

    const body = {
        email: email,
        password: password
    }

    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            return '400'
        }
        const userData = await response.json();

        return userData.body.token;
    } catch (error) {
        console.log(error);
        return 'REFUSED'
    }
}