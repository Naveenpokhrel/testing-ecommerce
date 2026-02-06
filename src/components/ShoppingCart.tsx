import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
    isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();

    return (
        <Offcanvas
            show={isOpen}
            onHide={closeCart}
            placement="end"
            className="shadow-lg"
        >
            <Offcanvas.Header
                closeButton
                className="border-bottom"
            >
                <Offcanvas.Title className="fw-semibold fs-5">
                    🛒 Your Cart
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="px-3 py-4">
                <Stack gap={3}>
                    {cartItems.length === 0 && (
                        <div className="text-center text-muted py-5">
                            Your cart is empty
                        </div>
                    )}

                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}

                    <div
                        className="ms-auto mt-3 px-3 py-2 rounded"
                        style={{
                            background: "#f8f9fa",
                            fontWeight: 600,
                            fontSize: "1.1rem",
                        }}
                    >
                        Total:{" "}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(
                                    i => i.id === cartItem.id
                                );
                                return (
                                    total +
                                    (item?.price || 0) * cartItem.quantity
                                );
                            }, 0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
