import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FormComponent from "../components/FormComponent";
import { ValorProvider } from "../contexts/valorContext";
import { BrowserRouter as Router } from "react-router-dom";

describe("FormComponent", () => {
    it("renders the form fields correctly", () => {
        render(
            <ValorProvider>
                <Router>
                    <FormComponent />
                </Router>
            </ValorProvider>
        );

        expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/cpf/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/número do cartão/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/vencimento/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/cvv/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/parcelas/i)).toBeInTheDocument();
    });

    it("displays validation errors on submit with empty fields", async () => {
        render(
            <ValorProvider>
                <FormComponent />
            </ValorProvider>
        );

        fireEvent.click(screen.getByRole("button", { name: /pagar/i }));

        await waitFor(() => {
            expect(
                screen.getByText(/nome completo é obrigatório/i)
            ).toBeInTheDocument();
            expect(screen.getByText(/cpf é obrigatório/i)).toBeInTheDocument();
            expect(
                screen.getByText(/número do cartão é obrigatório/i)
            ).toBeInTheDocument();
            expect(
                screen.getByText(/data de vencimento é obrigatória/i)
            ).toBeInTheDocument();
            expect(screen.getByText(/cvv é obrigatório/i)).toBeInTheDocument();
            expect(
                screen.getByText(/selecione o número de parcelas/i)
            ).toBeInTheDocument();
        });
    });

    it("submits the form with valid data", async () => {
        render(
            <ValorProvider>
                <FormComponent />
            </ValorProvider>
        );

        fireEvent.change(screen.getByLabelText(/nome completo/i), {
            target: { value: "João da Silva" },
        });
        fireEvent.change(screen.getByLabelText(/cpf/i), {
            target: { value: "123.456.789-00" },
        });
        fireEvent.change(screen.getByLabelText(/número do cartão/i), {
            target: { value: "1234 5678 9012 3456" },
        });
        fireEvent.change(screen.getByLabelText(/vencimento/i), {
            target: { value: "12/2024" },
        });
        fireEvent.change(screen.getByLabelText(/cvv/i), {
            target: { value: "123" },
        });
        fireEvent.change(screen.getByLabelText(/parcelas/i), {
            target: { value: "2x" },
        });

        fireEvent.click(screen.getByRole("button", { name: /pagar/i }));

        await waitFor(() => {
            expect(
                screen.queryByText(/nome completo é obrigatório/i)
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText(/cpf é obrigatório/i)
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText(/número do cartão é obrigatório/i)
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText(/data de vencimento é obrigatória/i)
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText(/cvv é obrigatório/i)
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText(/selecione o número de parcelas/i)
            ).not.toBeInTheDocument();
        });
    });
});
