import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20"  {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M3.7513 5.83268H8.95964V7.91602H3.7513V16.2493H12.0846V11.041H14.168V16.2493C14.168 16.8019 13.9485 17.3318 13.5578 17.7225C13.1671 18.1132 12.6372 18.3327 12.0846 18.3327H3.7513C3.19877 18.3327 2.66886 18.1132 2.27816 17.7225C1.88746 17.3318 1.66797 16.8019 1.66797 16.2493V7.91602C1.66797 7.36348 1.88746 6.83358 2.27816 6.44288C2.66886 6.05218 3.19877 5.83268 3.7513 5.83268ZM14.8076 3.74935H10.0013V1.66602H18.3346V9.99935H16.2513V5.25143L10.693 10.8098L9.22005 9.33685L14.8076 3.74935Z"/>
    </Svg>
  );
};

export default Icon;
