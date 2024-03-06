// LogicContext.js
import { createContext, useState } from "react";

const MobileMenuContext = createContext();

export function MobileMenuProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </MobileMenuContext.Provider>
    );
}

export default MobileMenuContext;