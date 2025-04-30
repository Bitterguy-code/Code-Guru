import Editor from '@monaco-editor/react'

export default  function MonacoEditor() {
    const editorCode = (value) => {
        console.log(value)
    }

    return (
        <div className='h-full'>
            <Editor
                height="100%"
                defaultLanguage= "javascript"
                defaultValue= "// Start typing your code .."
                theme= "vs-dark"
                onChange= {editorCode}
            />

        </div>
    )
}