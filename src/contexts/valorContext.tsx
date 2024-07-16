import React, { createContext, useContext, useState } from 'react';

interface ValorContextType {
    valorEntrada: string;
    atualizarValorEntrada: (valor: string) => void;
    valorTotal: string;
    atualizarValorTotal: (valor: string) => void;
}

const ValorContext = createContext<ValorContextType | undefined>(undefined);

export const useValorContext = () => {
    const context = useContext(ValorContext);
    if (!context) {
        throw new Error('useValorContext must be used within a ValorProvider');
    }
    return context;
};

export const ValorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [valorEntrada, setValorEntrada] = useState("1x");
    const [valorTotal, setValorTotal] = useState("30.000,00");

    const atualizarValorEntrada = (valor: string) => {
        setValorEntrada(valor);
    };

    const atualizarValorTotal = (valor: string) => {
        setValorTotal(valor);
    };

    return (
        <ValorContext.Provider value={{ valorEntrada, atualizarValorEntrada, valorTotal, atualizarValorTotal }}>
            {children}
        </ValorContext.Provider>
    );
};
