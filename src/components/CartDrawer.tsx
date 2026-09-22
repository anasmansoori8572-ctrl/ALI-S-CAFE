import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutComplete, setCheckoutComplete] = React.useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutComplete(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-300">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-[#161616] border-l border-[#262626] p-6 sm:p-8 overflow-y-auto z-10 flex flex-col justify-between animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#222]">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#c7a17a]" />
              <span className="font-oswald text-lg font-bold tracking-[0.15em] text-white uppercase">
                YOUR ROASTERY CART
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#888] hover:text-[#c7a17a] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          {checkoutComplete ? (
            <div className="py-16 text-center space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-14 h-14 bg-[#c7a17a]/20 text-[#c7a17a] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-oswald text-xl text-white font-bold tracking-wide uppercase">
                ORDER RECEIVED!
              </h3>
              <p className="text-xs text-[#8c8c8c] font-sans max-w-xs mx-auto">
                Your fresh artisan beans and coffee gear are being prepared by our Ali's Cafe team.
              </p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#333] mx-auto" />
              <p className="font-oswald text-sm tracking-wider text-[#888] uppercase">
                Your cart is currently empty
              </p>
              <p className="text-xs text-[#555]">
                Explore our online roastery shop to order whole beans & equipment.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#222] py-4 space-y-4">
              {cartItems.map((item) => (
                <div key={item.product.id} className="pt-4 flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-contain bg-black/40 p-2 border border-[#262626] rounded-sm shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-oswald text-sm text-white tracking-wide truncate">
                      {item.product.name}
                    </h4>
                    <p className="font-oswald text-xs text-[#c7a17a] mt-0.5">
                      ${item.product.price.toFixed(2)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="w-6 h-6 bg-[#222] hover:bg-[#333] text-white flex items-center justify-center rounded-sm text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-oswald text-xs px-2 text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="w-6 h-6 bg-[#222] hover:bg-[#333] text-white flex items-center justify-center rounded-sm text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-[#666] hover:text-red-400 p-1 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Total & Checkout */}
        {cartItems.length > 0 && !checkoutComplete && (
          <div className="pt-6 border-t border-[#222] space-y-4">
            <div className="flex justify-between items-center text-sm font-oswald">
              <span className="text-[#a0a0a0] uppercase tracking-wider">SUBTOTAL</span>
              <span className="text-white text-lg font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-[#666]">
              Shipping & taxes calculated at checkout. Free local pickup available.
            </p>
            <button
              onClick={handleCheckout}
              className="w-full py-3.5 px-6 bg-[#c7a17a] hover:bg-[#b08d66] text-[#141414] font-oswald text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
