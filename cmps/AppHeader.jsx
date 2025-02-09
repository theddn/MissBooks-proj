export function AppHeader({ onSetPage }) {
    return (
        <header className="app-header full  main-layout">
            <section>
                <nav className="app-nav">
                    <h1>Book Store</h1>
                    <a href="#" onClick={() => onSetPage('home')}>
                        Home
                    </a>
                    <a href="#" onClick={() => onSetPage('book')}>
                        Book
                    </a>
                    <a href="#" onClick={() => onSetPage('about')}>
                        About
                    </a>
                </nav>
            </section>
        </header>
    )
}
