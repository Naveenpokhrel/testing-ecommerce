import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card
      className="h-100 border-0 shadow-sm product-card"
      style={{ borderRadius: "14px", overflow: "hidden" }}
    >
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <Card.Body className="d-flex flex-column p-3">
        <Card.Title className="d-flex justify-content-between align-items-start mb-3">
          <span className="fw-semibold fs-5">{name}</span>
          <span className="text-muted fw-medium">
            {formatCurrency(price)}
          </span>
        </Card.Title>

        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100 fw-medium"
              variant="dark"
              style={{ borderRadius: "10px" }}
              onClick={() => increaseCartQuantity(id)}
            >
              Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: "0.6rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.75rem" }}
              >
                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  −
                </Button>

                <div className="fw-semibold">
                  <span className="fs-5">{quantity}</span> in cart
                </div>

                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>

              <Button
                variant="outline-danger"
                size="sm"
                style={{ borderRadius: "8px" }}
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
