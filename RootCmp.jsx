import { AppHeader } from './cmps/AppHeader.jsx'

import { AboutUs } from './pages/AboutUs.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { BookIndex } from './pages/BookIndex.jsx'

const { useState } = React

export function App() {
    const [page, setPage] = useState('book')

    function onSetPage(page) {
        setPage(page)
    }

    return (
        <section className="app">
            <header>
                <AppHeader onSetPage={onSetPage} />
            </header>
            <main className="main-layout">
                {page === 'home' && <HomePage />}
                {page === 'about' && <AboutUs />}
                {page === 'book' && <BookIndex />}
            </main>
        </section>
    )
}
