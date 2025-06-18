
import queryClient from "../queryClient";
import { redirect } from "react-router";

export async function getHistory() {


    return queryClient.fetchQuery({
        queryKey: ['users'],
        queryFn: async function () {
            const response = await fetch("http://localhost:4000/history");
            if (!response.ok) {
                throw new Error({ message: 'Den er helt gal' });
            }
            return response.json();
        }
    });
}
