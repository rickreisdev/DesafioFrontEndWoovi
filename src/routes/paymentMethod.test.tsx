import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import PaymentMethod from "./paymentMethod"

describe("paymentMethod", () => {
    test("Should be able to render", () => {
        const {getByText} = render(<PaymentMethod/>)

        expect(getByText("Pagamento 100% seguro via"))
    })
})