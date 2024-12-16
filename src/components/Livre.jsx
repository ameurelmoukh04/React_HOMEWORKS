import React, { Component } from 'react'
import LivreImg from './innerComposants/LivreImg'
import LivrePrice from './innerComposants/LivrePrice'
import LivreTitle from './innerComposants/LivreTitle'
import ListLivre from './ListLivre'
export default class Livre extends Component {
    
    render() {
        return (
          <div>
            <ListLivre />
          </div>
        )
    }
}
