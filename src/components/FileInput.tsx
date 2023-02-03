import React, { useRef } from "react";

interface Props {
  files:any,
  setFiles:Function,
  buttonName?:string,
  buttonRemoveContainer?:any,
  iconRemove?:any
}

const FileInput: React.FC<Props> = ({ files, setFiles, buttonName, buttonRemoveContainer, iconRemove }) => {
    const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  
  };
  
  const handleRemove = (index: number) => {
    if (!files) return;
  
  
    const newFiles = [...files];
    newFiles.splice(index, 1);
    const dataTransfer = new DataTransfer();
    newFiles.forEach(file => dataTransfer.items.add(file));
    const fileList = dataTransfer.files;
    setFiles(fileList);
    if(inputRef.current){
    inputRef.current.value = ''
    }
  };

  return (
    <>
      <input ref={inputRef} name={"Files"} placeholder={'Anexar Nota Fiscal'} type="file" onChange={e=>handleChange(e)} multiple style={{ display: "none" }}/>
      <a onClick={e=>inputRef.current?.click()}>{buttonName}</a>
      <div style={{display:'flex', flexDirection:'column'}}>
      {files &&
          Array.from(files).map((file:any, index) => (
            <div key={file.name} style={{display:'flex', flexDirection:'row'}}>
              <div onClick={e=>handleRemove(index)} {...buttonRemoveContainer}><img {...iconRemove}/></div>
              <p>{file.name}</p>
            </div>
          ))}
        
      </div>
       
    </>
  );
};

export default FileInput;