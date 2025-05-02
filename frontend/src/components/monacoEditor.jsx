import Editor from '@monaco-editor/react'

export default function MonacoEditor({language ="JavaScript",value}) {
    console.log(language)
    const editorCode = (value) => {
        console.log(value)
        // console.log(language)
    }

    return (
        <div className='h-full'>
            <Editor
                height="100%"
                language={language}
                defaultValue= "// Start typing your code .."
                theme= "vs-dark"
                onChange= {editorCode}
                value={value}
            />

        </div>
    )
}