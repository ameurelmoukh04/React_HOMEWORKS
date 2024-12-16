import React, { Component } from 'react'
import LivreImg from './innerComposants/LivreImg'
import LivreTitle from './innerComposants/LivreTitle'
import LivrePrice from './innerComposants/LivrePrice'
export default class ListLivre extends Component {
  data = [
    {
      "title": "1984", "author": "George Orwell", "publicationYear":
        1949, "genre": "Dystopian", "rating": 4.8
    },
    { "title": "To Kill a Mockingbird", "author": "Harper Lee", "publicationYear": 1960, "genre": "Classic", "rating": 4.9 },
    { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "publicationYear": 1925, "genre": "Classic", "rating": 4.4 },
    {
      "title": "Pride and Prejudice", "author": "Jane Austen", "publicationYear":
        1813, "genre": "Romance", "rating": 4.7
    },
    {
      "title": "Moby-Dick", "author": "Herman Melville", "publicationYear":
        1851, "genre": "Adventure", "rating": 4.1
    },
    {
      "title": "War and Peace", "author": "Leo Tolstoy", "publicationYear":
        1869, "genre": "Historical Fiction", "rating": 4.5
    },
    {
      "title": "The Alchemist", "author": "Paulo Coelho", "publicationYear":
        1988, "genre": "Philosophical Fiction", "rating": 4.7
    }
  ]
  render() {
    return (
      <div>

        {this.data.map((livre) => (
          <div key={livre.title}>

            <LivreImg />
            <LivreTitle title={livre.title} />
            <LivrePrice author={livre.author} />

          </div>
        ))}
        </div>

        
    )
  }
}
