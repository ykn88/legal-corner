import React, { createContext, useState } from 'react';

export const EditorContext = createContext()

const EditorContextProvider = (props) => {
    const [edit, setEdit] = useState({})

    function loadData (value) {
        setEdit(value)
    }

    return(
        <EditorContext.Provider value={{edit, setEdit, loadData}}>
            {props.children}
        </EditorContext.Provider>
    )
}

export default EditorContextProvider