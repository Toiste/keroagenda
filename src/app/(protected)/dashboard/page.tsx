import { testDatabaseConnection } from "@/actions/login";

export default async function Page(){
    const isConnected = await testDatabaseConnection();
    return <h1>Dashboard</h1>
}