import Editor from '@monaco-editor/react'

export default function MonacoEditor({language}) {
    console.log(language)
    const editorCode = (value) => {
        console.log(value)
        // console.log(language)
    }

    return (
        <div className='h-full'>
            <Editor
                height="100%"
                defaultLanguage={language}
                defaultValue= "// Start typing your code .."
                theme= "vs-dark"
                onChange= {editorCode}
            />

        </div>
    )
}