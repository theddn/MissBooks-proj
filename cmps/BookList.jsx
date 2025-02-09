import { BookPreview } from './BookPreview.jsx'

export function BookList({ books }) {
    return (
        <section className="books-lst-container">
            {books.map((book) => (
                <div key={book.id} className="book-card">
                    <BookPreview book={book} />
                </div>
            ))}
        </section>
    )
}
