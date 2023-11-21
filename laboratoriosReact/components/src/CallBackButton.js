import { SimpleButton } from "./SimpleButton";
 
export function CallBackButton(props) {
    let { theme, ...childProps } = props;
    return (
<SimpleButton {...childProps} className={ `btn btn-${theme} btn btn-sm m-1`} />
    )
}