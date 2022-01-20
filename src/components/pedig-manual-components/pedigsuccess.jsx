import './css_files/pedig.css'

export const PedigSuccess = (props) => {
    return(
        <div className="pedigsuccess_full">
            <h1>Hello world</h1>
            <h1>{props.pedigree.maindog.name} has been 
            successfully created</h1>
        </div>
    )
}