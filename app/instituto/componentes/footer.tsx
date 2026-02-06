'use client';

import { LogosFooter } from "./logo";

export default function Footer() {
    return (
        <footer className="container-fluid bg-light py-4 border-top mt-5">
            <>
                <LogosFooter imagen="/facebook.png" enlace="https://www.facebook.com"></LogosFooter>
                <LogosFooter imagen="/instagram.png" enlace="https://www.instagram.com"></LogosFooter>
                <LogosFooter imagen="/twitter.png" enlace="https://www.twitter.com"></LogosFooter>
            </>
        </footer>
    );
}