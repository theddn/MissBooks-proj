import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'

// Basic Data Model
// {
//     "id": "OXeMG8wNskc",
//     "title": "metus hendrerit",
//     "description": "placerat nisi sodales suscipit tellus",
//     "thumbnail": "http://ca.org/books-photos/20.jpg",
//     "listPrice": {
//     "amount": 109,
//     "currencyCode": "EUR",
//     "isOnSale": false
//     }
//     }

function _createBooks() {
    let books = loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = [_createBook( '', price: 0 )]
        saveToStorage(BOOK_KEY, books)
    }
}

function getDefaultFilter() {
    return { title: '', price: 0 }
}

function _createBook() {
    return {
        id: utilService.makeId(),
        title: 'metus hendrerit',
        description: 'placerat nisi sodales suscipit tellus',
        thumbnail: 'http://ca.org/books-photos/20.jpg',
        listPrice: {
            amount: 109,
            currencyCode: 'EUR',
            isOnSale: false,
        },
    }
}

