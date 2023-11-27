import React, { Component } from 'react';
import { ProductTable } from './ProductTable';
import { ProductEditor } from './ProductEditor';
import { connect } from 'react-redux';
import { saveProduct, deleteProduct } from './store';


/**
* 
*  1 - Defino una funci�n que recive el data store y selecciona 
*      la propiedad qeu conecta con el componente con el almac�n [store]
*/
const mapStateToProps = (storeData) => ({

    products: storeData.products
})

/**
 * 
 * 2 - Crear un objeto para mapear las {function props}: [saveCallback, deleteCallback]
 */
const mapDispatchToProps = {
    saveCallback: saveProduct,
    deleteCallback: deleteProduct

}

/**
 * 
 * 3 - Conectar el componente con el almac�n[store]
 * 
 */
const connectFunction = connect(mapStateToProps, mapDispatchToProps);

/**
 * 
 *  4 - Paso final. Pasar el componente a la funci�n devuelta por [connectFunction]
 * 
 */



export const ProductDisplay = connectFunction(
    class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                showEditor: false,
                selectedProduct: null
            }
        }


        startEditing = (product) => {
            this.setState({ showEditor: true, selectedProduct: product })
        }
        createProduct = () => {
            this.setState({ showEditor: true, selectedProduct: {} })
        }
        cancelEditing = () => {
            this.setState({ showEditor: false, selectedProduct: null })
        }
        saveProduct = (product) => {
            this.props.saveCallback(product);
            this.setState({ showEditor: false, selectedProduct: null })
        }
        render() {
            if (this.state.showEditor) {
                return <ProductEditor
                    key={this.state.selectedProduct.id || -1}
                    product={this.state.selectedProduct}
                    saveCallback={this.saveProduct}
                    cancelCallback={this.cancelEditing} />
            } else {
                return <div className="m-2">
                    <ProductTable products={this.props.products}
                        editCallback={this.startEditing}
                        deleteCallback={this.props.deleteCallback} />
                    <div className="text-center">
                        <button className="btn btn-primary m-1"
                            onClick={this.createProduct}>
                            Create Product
                        </button>
                    </div>
                </div>
            }
        }
    }
)