import Head from "next/head"
import Footer from "@/layout/Footer"

function About() {
    return (
        <>
            <h1 className='content'>About us</h1>
        </>
    )
}
    
export default About

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}
 