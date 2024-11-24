import '../globals.css';
import Router, { useRouter } from 'next/router';
import Home from '../components/Home';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function MyGarden({ Component, pageProps }) {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    return (
        <>
            <header>
                <meta charSet="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
     
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'></link>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="styles.css"></link>

                <title>Alignment Journey</title>

            </header>

            <main>
                {isHomePage && <Header />}
                {isHomePage && <About />}
                {isHomePage && <Navigation />}
                <Component {...pageProps} />
                <Footer isHomePage={isHomePage} />
            </main>
        </>
    );
}

export default MyGarden;