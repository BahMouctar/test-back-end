import { existsSync, mkdirSync } from "fs";

//GET GENERATED NUMBER
export const getCode =()=>{
    return (Math.random().toString(36).substr(2, 9)).toUpperCase();
}

//GET CREATE FOLDER
export const newFolder =(dir)=>{
    if (!existsSync(dir)){
        mkdirSync(dir, {recursive: true});
    }
    return dir;
}
