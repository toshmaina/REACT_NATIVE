import { Client, Account, ID, Databases } from 'react-native-appwrite';


const config = {
    databaseId: "67b1977e002d22d0987b",
    projectId:"67935cb50010bdb0d973",
    endpoint:"https://cloud.appwrite.io/v1",
    platform:"com.mitosh.expensimplify",
    userCollectionId:"67b1983200217920cf27",
} 

const {databaseId,endpoint,platform,projectId,userCollectionId} = config;

const client = new Client()
    .setProject(projectId)
    .setEndpoint(endpoint) 
    .setPlatform(platform)
    

const account = new Account(client);
const databases = new Databases(client);

export const createUser = async(email: string, password: string, username:string) =>{

    try {
        const newAccount = await account.create(
            ID.unique(), 
            email ,
           password,
           username
        );
        if(!newAccount) throw  new Error;
     const session =  await signIn(email,password);
      const newUser = await databases.createDocument(databaseId,userCollectionId,ID.unique(),{
        accountId: newAccount.$id,
        email,
        password
      })
        return {newUser,session};
    } catch (error) {
        console.error(error)
    }
 
}
export async function signIn(email:string,password:string){

    try {
        const signInSession  = await account.createEmailPasswordSession(email, password);
        if(!signInSession ) throw new Error;
        return signInSession;
        
    } catch (error) {
        console.error(error)
    }




} 

   
    