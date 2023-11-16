import React,{ Component } from "react";

// [17.45] aún no tiene datos


export class Display extends Component {

    formatValue = (data) => Array.isArray(data) ? data.join(", ") : data.toString();
    render() {
        {/* determina qué le ha venido [array] ó [string] */ }
        let keys = Object.keys(this.props.data);
        if (keys.length === 0) {
            {/* Si no vienen datos */ }
            return <div className="bg-secondary p-2 text-white">No data</div>
        } else {
            {/* Si vienen datos */ }
            return (
                <div className="container-fluid bg-secondary p-2">
                    {keys.map(key =>
                        <div key={key} className="row h5 text-white">
                            <div className="col">{key}</div>
                            <div className="col">{this.formatValue(this.props.data[key])}</div>
                        </div>
                    )}
                </div>
            )
        }
    }


}


/*
    var arr = ['a','b','c']
    console.log(Object.keys(arr)) --> ['0','1','2']
*/