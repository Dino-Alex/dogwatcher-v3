import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
        <path d="M5.83398 14.1775L9.51148 14.165L17.5381 6.21502C17.8532 5.90002 18.0265 5.48169 18.0265 5.03669C18.0265 4.59169 17.8532 4.17335 17.5381 3.85835L16.2165 2.53669C15.5865 1.90669 14.4873 1.91002 13.8623 2.53419L5.83398 10.4859V14.1775ZM15.0381 3.71502L16.3623 5.03419L15.0315 6.35252L13.7098 5.03169L15.0381 3.71502ZM7.50065 11.1809L12.5257 6.20335L13.8473 7.52502L8.82315 12.5009L7.50065 12.505V11.1809Z" fillOpacity="0.6"/>
        <path d="M4.16667 17.5H15.8333C16.7525 17.5 17.5 16.7525 17.5 15.8333V8.61L15.8333 10.2767V15.8333H6.79833C6.77667 15.8333 6.75417 15.8417 6.7325 15.8417C6.705 15.8417 6.6775 15.8342 6.64917 15.8333H4.16667V4.16667H9.8725L11.5392 2.5H4.16667C3.2475 2.5 2.5 3.2475 2.5 4.16667V15.8333C2.5 16.7525 3.2475 17.5 4.16667 17.5Z" fillOpacity="0.6"/>    
   </Svg>
  );
};

export default Icon;
