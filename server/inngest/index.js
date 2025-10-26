import { Inngest } from "inngest";
import User from "../model/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });

//inngest functions to save user data to MongoDB

const syncUserCreation = inngest.createFunction(
    {id: 'sync-user-from-clerk'},
    {event: 'clerk/user.created'},
    async ({event}) => {
        const{id,first_name, email_addresses, image_url} = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
    await User.create (userData);
    }
)
//inngest fuinctino to delete user data from MongoDB when user is deleted from Clerk
const syncUserDeletion = inngest.createFunction(
    {id: 'dlete-user-with-clerk'},
    {event: 'clerk/user.deleted'},
    async ({event}) => {
        const{id} = event.data
        await User.findByIdAndDelete(id);
    }
 )


//inngest functions to update user data in MongoDB when user is updated in Clerk
 const syncUserUpdation = inngest.createFunction(
    {id: 'update-user-with-clerk'},
    {event: 'clerk/user.updated'},
    async ({event}) => {
        const{id,first_name, email_addresses, image_url} = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
    await User.findByIdAndUpdate(id, userData);
    }
 )
export const functions = [syncUserCreation, syncUserDeletion, syncUserUpdation];

