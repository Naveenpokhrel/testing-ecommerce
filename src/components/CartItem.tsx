import { Button, Stack, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Card className="border-0 shadow-sm mb-3">
            <Card.Body className="p-3">
                <Stack direction="horizontal" gap={3}>
                    <img
                        src={item.imgUrl}
                        style={{
                            width: "90px",
                            height: "90px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }}
                    />

                    <div className="me-auto">
                        <h6 className="mb-1 fw-semibold">
                            {item.name}
                            {quantity > 1 && (
                                <span className="text-muted ms-2" style={{ fontSize: "0.8rem" }}>
                                    ×{quantity}
                                </span>
                            )}
                        </h6>

                        <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                            {formatCurrency(item.price)}
                        </div>
                    </div>

                    <div className="fw-semibold">
                        {formatCurrency(item.price * quantity)}
                    </div>

                    <Button
                        variant="outline-danger"
                        size="sm"
                        className="rounded-circle"
                        onClick={() => removeFromCart(item.id)}
                        style={{ width: "32px", height: "32px" }}
                    >
                        ×
                    </Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}
