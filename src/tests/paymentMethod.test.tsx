import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import PaymentMethod from "../routes/paymentMethod"

describe("paymentMethod", () => {
    test("Should render 'Pagamento 100% seguro via:' text", () => {
        const {getByTestId} = render(<PaymentMethod/>)

        const seguroBox = getByTestId("seguro-box");
        expect(seguroBox).toBeInTheDocument();
    })
})