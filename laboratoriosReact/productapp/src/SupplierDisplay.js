import React, { Component } from "react";
import { SupplierEditor } from "./SupplierEditor";
import { SupplierTable } from "./SupplierTable";
import { connect } from "react-redux";
import { saveSupplier, deleteSupplier } from "./store"


/**
* 
*  1 - Defino una función que recive el data store y selecciona 
*      la propiedad qeu conecta con el componente con el almacén [store]
*/
const mapStateToProps = (storeData) => ({
    suppliers: storeData.suppliers
})

/**
 * 
 * 2 - Crear un objeto para mapear las {function props}: [saveCallback, deleteCallback]
 */
const mapDispatchToProps = {
    saveCallback: saveSupplier,
    deleteCallback: deleteSupplier
}

/**
 * 
 * 3 - Conectar el componente con el almacén[store]
 * 
 */

const connectFunction = connect(mapStateToProps, mapDispatchToProps);
/**
 * 
 *  4 - Paso final. Pasar el componente a la función devuelta por [connectFunction]
 * 
 */

export const SupplierDisplay = connectFunction(
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                showEditor: false,
                selected: null
            }
        }
        startEditing = (supplier) => {
            this.setState({ showEditor: true, selected: supplier })
        }
        createSupplier = () => {
            this.setState({ showEditor: true, selected: {} })
        }
        cancelEditing = () => {
            this.setState({ showEditor: false, selected: null })
        }
        saveSupplier = (supplier) => {
            this.props.saveCallback(supplier);
            this.setState({ showEditor: false, selected: null })
        }
        render() {
            if (this.state.showEditor) {
                return <SupplierEditor
                    key={this.state.selected.id || -1}
                    supplier={this.state.selected}
                    saveCallback={this.saveSupplier}
                    cancelCallback={this.cancelEditing} />
            } else {
                return <div className="m-2">
                    <SupplierTable suppliers={this.props.suppliers}
                        editCallback={this.startEditing}
                        deleteCallback={this.props.deleteCallback}
                    />
                    <div className="text-center">
                        <button className="btn btn-primary m-1"
                            onClick={this.createSupplier}>
                            Create Supplier
                        </button>
                    </div>
                </div>
            }
        }
    }
)