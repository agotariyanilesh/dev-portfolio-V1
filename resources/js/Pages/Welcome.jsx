import AboutMe from "@/Components/Leven/AboutMe";
import LevenFooter from "@/Layouts/LevenFooter";
import LevenLayout from "@/Layouts/LevenLayout";
import { Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="Nilesh Agotariya - Software Developer" />

            <LevenLayout />

            <AboutMe />

            <LevenFooter />
             
        </>
    );
}
