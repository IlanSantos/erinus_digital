import db from './index'


export const RegisterContactRequest = async (name, email) => {
    const client = await db.connect()
    try{
        await client.query("INSERT INTO CONTACT_REQUESTS(NAME, EMAIL) VALUES ($1, $2);", [name, email])
        return true
    }catch(error){
        throw error
    }finally{
        client.release()
    }
}