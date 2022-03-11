import { useEffect, useState } from "react"

function Dashboard() {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)

    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json()
            setDashboardData(data)
            setIsLoading(false)
        }
        fetchDashboardData()
    }, [])
    
    if(isLoading) {
        return <h2>Loading..</h2>
    }
    return (
        <>
            <h2>Dashboard</h2>
            <h2>Posts - {dashboardData.posts}</h2>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Likes - {dashboardData.followers}</h2>
            <h2>Likes - {dashboardData.following}</h2>
        </>
    )
}

export default Dashboard