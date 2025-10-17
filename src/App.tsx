import { ImageWithFallback } from './components/figma/ImageWithFallback';
import imgIvory from 'figma:asset/083a1c769f8bd49dbc4ce7de839b9fdc4c352a24.png';
import imgSageFront from 'figma:asset/010c2c6356a80e7b2547de356c9c12e80e7e29fd.png';
import imgSageBack from 'figma:asset/7bd5b11e05573a5539b71cfde796b072372e58b2.png';
import imgForestGreen from 'figma:asset/241cc21a0e4ad50387a21d454bef882ea5a27884.png';
import imgVibrantGreen from 'figma:asset/b3e62da76d176ef3e3f67fc23d95faea676962e5.png';
import imgCoralGradient from 'figma:asset/cdb142026825c08c622d5e063317b7026009bb4c.png';
import imgPowderFront from 'figma:asset/11317b372b093b11a2dbaf75e6ca1d7bf1defd96.png';
import imgPowderBack from 'figma:asset/f07d5b4f23b3015c87615f8c892a5a772255c6fd.png';
import imgTeal from 'figma:asset/09fc894c48e7262e8c291e71b500033742d94761.png';
import imgPowderCardigan from 'figma:asset/943ff8c362746bd205ef39ce40cf49738af97591.png';
import imgCameoCardigan from 'figma:asset/fb96870a4716e5ca712eccd6590081b8e07fc355.png';
import imgBlackBase from 'figma:asset/cddaeb6df1b48baed1cbeca00ec8eece4056c759.png';
import imgLeatherCardigan from 'figma:asset/ff4ce9be86c46a8021fb6d00a5b02516cf710ef9.png';
import imgFootballCardigan from 'figma:asset/d40fbda0d6d493a5eee62142d809f4c608c83287.png';
import imgBlackWideLeg from 'figma:asset/d954e07f23b9ce4c44f70e72512dbf3b36b540c8.png';
import imgIvoryWideLeg from 'figma:asset/c1e55831161d93c3a6965b77a6f8a6b1ae6a591b.png';
import imgPowderStraightLeg from 'figma:asset/9ceb49e596ce5b81a00b5ad2ef96c115503ccf60.png';
import imgPantsModel from 'figma:asset/29a1ea0607124b0e3f26274aec4c400659d786fc.png';
import imgPantsModel2 from 'figma:asset/235bec3da5dd3938fafae1f755db59789fd571fd.png';
import imgLadyPortrait from 'figma:asset/8c65ea7910b84d169525ac6fe6722f378315f26a.png';
import imgFloralRelief from 'figma:asset/9852062dc33b199fc5a0419f7179a84765b0571c.png';
import imgClassicalBust from 'figma:asset/5521f773214b720235b99d0b03abee400424862e.png';
import imgChromeFrame from 'figma:asset/af3a57071e3e767a17c2b7b589c1e24c1fb5f1e7.png';
import imgOrnateFloral from 'figma:asset/402f2982c38f9461c0b48a965ed93d73cfff7754.png';
import imgTulipRelief from 'figma:asset/ab64faf48917e403991f79b371f8fd23ee16b1de.png';
import imgGrecianFigure from 'figma:asset/6f947df5feadb735e518329b5a8f5ee96fe73087.png';
import imgDaisyPin from 'figma:asset/4491c8d427268bccbc03250d6ba2ae84c6855a2b.png';
import { useState, useEffect } from 'react';
import { Heart, Share2, Maximize2, Search, ShoppingCart, User, Menu, X, Plus, Minus, Trash2, ZoomIn, ChevronRight, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from './components/ui/sheet';
import { toast, Toaster } from 'sonner@2.0.3';

interface Product {
  id: number;
  sku: string;
  serial: string;
  title: string;
  name: string;
  subtitle: string;
  price: string;
  imageUrl: string;
  category: string;
  badges: string[];
  color: string;
  colorHex: string;
  shippingNote: string;
  alternateImages?: Array<{ url: string; label: string }>;
}

interface CartItem {
  product: Product;
  quantity: number;
}

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [addedToCart, setAddedToCart] = useState<Set<number>>(new Set());
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  const [isImageZoomed, setIsImageZoomed] = useState<boolean>(false);

  const products: Product[] = [
    {
      id: 1,
      sku: 'LOC-001',
      serial: '001',
      title: 'Ivory Crewneck',
      name: 'Warm ivory, classic fit',
      subtitle: 'Soft handle, double-needle hem, timeless essential. Made in small batches.',
      price: '$119',
      imageUrl: imgIvory,
      category: 'Cardigans',
      badges: ['NEW', 'Bestseller'],
      color: 'Ivory',
      colorHex: '#f4f1e8',
      shippingNote: 'Free shipping over $75'
    },
    {
      id: 2,
      sku: 'LOC-002',
      serial: '002',
      title: 'Sage Crewneck',
      name: 'Soft sage, relaxed fit',
      subtitle: 'Midweight cotton blend, reinforced placket, matte hardware.',
      price: '$139',
      imageUrl: imgSageFront,
      category: 'Cardigans',
      badges: ['Restock'],
      color: 'Sage',
      colorHex: '#8fa888',
      shippingNote: 'Carbon-neutral delivery',
      alternateImages: [
        { url: imgSageBack, label: 'Back' }
      ]
    },
    {
      id: 3,
      sku: 'LOC-003',
      serial: '003',
      title: 'Forest Green Sweater',
      name: 'Deep forest, structured',
      subtitle: 'Merino blend, rib cuffs, reinforced elbows, archival fit.',
      price: '$149',
      imageUrl: imgForestGreen,
      category: 'Cardigans',
      badges: ['Limited'],
      color: 'Forest',
      colorHex: '#2d5a3d',
      shippingNote: 'Free returns within 30 days'
    },
    {
      id: 4,
      sku: 'LOC-004',
      serial: '004',
      title: 'Vibrant Green Crewneck',
      name: 'Bright green, modern fit',
      subtitle: 'Fine gauge knit, contemporary styling, bold color.',
      price: '$149',
      imageUrl: imgVibrantGreen,
      category: 'Cardigans',
      badges: ['NEW'],
      color: 'Vibrant Green',
      colorHex: '#4CAF50',
      shippingNote: 'Express shipping available'
    },
    {
      id: 5,
      sku: 'LOC-005',
      serial: '005',
      title: 'Coral Gradient Sweater',
      name: 'Gradient coral, unique dye',
      subtitle: 'Premium merino, artisan dyed, designed for layering.',
      price: '$169',
      imageUrl: imgCoralGradient,
      category: 'Cardigans',
      badges: ['Premium'],
      color: 'Coral',
      colorHex: '#FF7F50',
      shippingNote: 'Gift wrapping included'
    },
    {
      id: 6,
      sku: 'LOC-006',
      serial: '006',
      title: 'Powder Blue Crewneck',
      name: 'Light powder blue, oversized',
      subtitle: 'Heavy gauge cotton, dropped shoulders, roomy pockets.',
      price: '$149',
      imageUrl: imgPowderFront,
      category: 'Cardigans',
      badges: ['Bestseller'],
      color: 'Powder Blue',
      colorHex: '#ADC7EA',
      shippingNote: 'Limited stock remaining',
      alternateImages: [
        { url: imgPowderBack, label: 'Back' }
      ]
    },
    {
      id: 7,
      sku: 'LOC-007',
      serial: '007',
      title: 'Teal Crewneck',
      name: 'Rich teal, slim fit',
      subtitle: 'Superfine merino, seamless construction, modern color.',
      price: '$159',
      imageUrl: imgTeal,
      category: 'Cardigans',
      badges: ['NEW', 'Premium'],
      color: 'Teal',
      colorHex: '#008080',
      shippingNote: 'Made to order'
    },
    {
      id: 8,
      sku: 'LOC-008',
      serial: '008',
      title: 'Powder Blue Cardigan',
      name: 'Sky blue, button-front cardigan',
      subtitle: 'Heirloom quality, hand-finished, classic cardigan style.',
      price: '$179',
      imageUrl: imgPowderCardigan,
      category: 'Cardigans',
      badges: ['Limited', 'Heritage'],
      color: 'Sky Blue',
      colorHex: '#87CEEB',
      shippingNote: 'Artisan crafted'
    },
    {
      id: 9,
      sku: 'LOC-009',
      serial: '009',
      title: 'Cameo Cardigan',
      name: 'Slate blue, cameo detail',
      subtitle: 'Organic cotton, enzyme washed, vintage-inspired cameo.',
      price: '$189',
      imageUrl: imgCameoCardigan,
      category: 'Cardigans',
      badges: ['Sustainable'],
      color: 'Slate',
      colorHex: '#6B7B8C',
      shippingNote: 'Eco-friendly packaging'
    },
    {
      id: 10,
      sku: 'LOC-010',
      serial: '010',
      title: 'Black Base Cardigan',
      name: 'Midnight black, textured knit',
      subtitle: 'Alpaca blend, ribbed collar, contemporary silhouette.',
      price: '$199',
      imageUrl: imgBlackBase,
      category: 'Cardigans',
      badges: ['Premium', 'NEW'],
      color: 'Black',
      colorHex: '#1a1a1a',
      shippingNote: 'Luxury packaging'
    },
    {
      id: 11,
      sku: 'LOC-011',
      serial: '011',
      title: 'Leather "C" Cardigan',
      name: 'Black with leather patch, varsity',
      subtitle: 'Wool blend, genuine leather C patch, athletic heritage.',
      price: '$249',
      imageUrl: imgLeatherCardigan,
      category: 'Cardigans',
      badges: ['Bestseller', 'Heritage'],
      color: 'Black',
      colorHex: '#1a1a1a',
      shippingNote: 'Handcrafted details'
    },
    {
      id: 12,
      sku: 'LOC-012',
      serial: '012',
      title: 'Football Patch Cardigan',
      name: 'Tan with textured C patch',
      subtitle: 'Football-textured leather patch, vintage-inspired design.',
      price: '$259',
      imageUrl: imgFootballCardigan,
      category: 'Cardigans',
      badges: ['Limited', 'Bestseller'],
      color: 'Tan',
      colorHex: '#d2b48c',
      shippingNote: 'Collector\'s edition'
    },
    {
      id: 13,
      sku: 'LOC-013',
      serial: '013',
      title: 'Black Wide Leg',
      name: 'Deep black, relaxed fit',
      subtitle: 'High waist, flowing silhouette, premium wool blend. Perfect drape.',
      price: '$159',
      imageUrl: imgBlackWideLeg,
      category: 'Pants',
      badges: ['NEW', 'Essential'],
      color: 'Black',
      colorHex: '#0f0f10',
      shippingNote: 'Ready to ship',
      alternateImages: [
        { url: imgPantsModel, label: 'Styled' }
      ]
    },
    {
      id: 14,
      sku: 'LOC-014',
      serial: '014',
      title: 'Ivory Wide Leg',
      name: 'Warm ivory, wide silhouette',
      subtitle: 'Elegant wide leg, clean lines, structured yet comfortable.',
      price: '$159',
      imageUrl: imgIvoryWideLeg,
      category: 'Pants',
      badges: ['Bestseller', 'Essential'],
      color: 'Ivory',
      colorHex: '#f5f0e8',
      shippingNote: 'Fast shipping',
      alternateImages: [
        { url: imgPantsModel2, label: 'Styled' }
      ]
    },
    {
      id: 15,
      sku: 'LOC-015',
      serial: '015',
      title: 'Powder Straight Leg',
      name: 'Soft powder blue, tailored',
      subtitle: 'Classic straight cut, refined details, versatile everyday piece.',
      price: '$149',
      imageUrl: imgPowderStraightLeg,
      category: 'Pants',
      badges: ['NEW', 'Limited'],
      color: 'Powder Blue',
      colorHex: '#ADC7EA',
      shippingNote: 'Ships in 2-3 days'
    },
    {
      id: 16,
      sku: 'LOC-016',
      serial: '016',
      title: 'Lady Portrait No.001',
      name: 'Ivory cameo, classic portrait',
      subtitle: 'Handcrafted excellence since 1975. Each piece meticulously crafted with timeless elegance.',
      price: '$245',
      imageUrl: imgLadyPortrait,
      category: 'Cameos',
      badges: ['Bestseller', 'Heritage'],
      color: 'Ivory',
      colorHex: '#f4f1e8',
      shippingNote: 'Artisan crafted'
    },
    {
      id: 17,
      sku: 'LOC-017',
      serial: '017',
      title: 'Floral Relief No.002',
      name: 'Classic ivory, botanical relief',
      subtitle: 'Delicate floral detailing, raised relief technique, vintage-inspired artistry.',
      price: '$195',
      imageUrl: imgFloralRelief,
      category: 'Cameos',
      badges: ['NEW'],
      color: 'Classic Ivory',
      colorHex: '#faf9f6',
      shippingNote: 'Ships in 3-5 days'
    },
    {
      id: 18,
      sku: 'LOC-018',
      serial: '018',
      title: 'Classical Bust No.004',
      name: 'Aged ivory, Greco-Roman bust',
      subtitle: 'Museum-quality reproduction, classical proportions, heirloom-grade craftsmanship.',
      price: '$325',
      imageUrl: imgClassicalBust,
      category: 'Cameos',
      badges: ['Premium', 'Limited'],
      color: 'Aged Ivory',
      colorHex: '#e8e4d8',
      shippingNote: 'Luxury packaging'
    },
    {
      id: 19,
      sku: 'LOC-019',
      serial: '019',
      title: 'Chrome Frame No.005',
      name: 'Polished chrome, modern frame',
      subtitle: 'Contemporary metalwork meets classic cameo art. Bold statement piece.',
      price: '$345',
      imageUrl: imgChromeFrame,
      category: 'Cameos',
      badges: ['Premium', 'NEW'],
      color: 'Polished Chrome',
      colorHex: '#c0c0c0',
      shippingNote: 'Free shipping'
    },
    {
      id: 20,
      sku: 'LOC-020',
      serial: '020',
      title: 'Ornate Floral No.006',
      name: 'Antique white, baroque floral',
      subtitle: 'Intricate baroque-inspired florals, ornamental detailing, museum archival.',
      price: '$215',
      imageUrl: imgOrnateFloral,
      category: 'Cameos',
      badges: ['Bestseller'],
      color: 'Antique White',
      colorHex: '#faebd7',
      shippingNote: 'Gift wrapping included'
    },
    {
      id: 21,
      sku: 'LOC-021',
      serial: '021',
      title: 'Tulip Relief No.007',
      name: 'Classic ivory, Dutch tulip motif',
      subtitle: 'Dutch-inspired tulip design, subtle relief work, elegant simplicity.',
      price: '$185',
      imageUrl: imgTulipRelief,
      category: 'Cameos',
      badges: ['NEW', 'Essential'],
      color: 'Classic Ivory',
      colorHex: '#faf9f6',
      shippingNote: 'Ready to ship'
    },
    {
      id: 22,
      sku: 'LOC-022',
      serial: '022',
      title: 'Grecian Figure No.008',
      name: 'Vintage white, neoclassical figure',
      subtitle: 'Neoclassical sculpture motif, vintage patina, collector\'s piece.',
      price: '$295',
      imageUrl: imgGrecianFigure,
      category: 'Cameos',
      badges: ['Premium', 'Heritage'],
      color: 'Vintage White',
      colorHex: '#f5f5dc',
      shippingNote: 'Collector\'s edition'
    },
    {
      id: 23,
      sku: 'LOC-023',
      serial: '023',
      title: 'Daisy Pin No.009',
      name: 'Gold plated, daisy brooch',
      subtitle: 'Delicate daisy design, 18k gold plating, wearable art piece.',
      price: '$165',
      imageUrl: imgDaisyPin,
      category: 'Cameos',
      badges: ['NEW', 'Bestseller'],
      color: 'Gold Plated',
      colorHex: '#ffd700',
      shippingNote: 'Fast shipping'
    }
  ];

  const filteredProducts = selectedFilter === 'All' 
    ? products 
    : products.filter(p => p.category === selectedFilter);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const cartSubtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.product.price.replace('$', ''));
    return sum + (price * item.quantity);
  }, 0);

  const handleAddToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setAddedToCart(prev => new Set(prev).add(productId));
    
    const existingItem = cartItems.find(item => item.product.id === productId);
    
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === productId);
      if (existing) {
        return prev.map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    // Toast notification
    toast.success(existingItem ? 'Quantity updated!' : 'Added to cart!', {
      description: `${product.title} • ${product.price}`,
      duration: 2000,
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        letterSpacing: '0.02em',
      }
    });

    setTimeout(() => {
      setAddedToCart(prev => {
        const newSet = new Set(prev);
        newSet.delete(productId);
        return newSet;
      });
    }, 900);
  };

  const handleUpdateQuantity = (productId: number, change: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.product.id === productId) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    
    if (product) {
      toast.info('Removed from cart', {
        description: product.title,
        duration: 2000,
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          letterSpacing: '0.02em',
        }
      });
    }
  };

  const toggleProductImage = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product?.alternateImages || product.alternateImages.length === 0) return;

    setCurrentImageIndex(prev => {
      const current = prev[productId] || 0;
      const maxIndex = product.alternateImages!.length;
      return {
        ...prev,
        [productId]: (current + 1) % (maxIndex + 1)
      };
    });
  };

  const getCurrentImage = (product: Product) => {
    const index = currentImageIndex[product.id] || 0;
    if (index === 0) return product.imageUrl;
    return product.alternateImages?.[index - 1]?.url || product.imageUrl;
  };

  const getCurrentImageLabel = (product: Product) => {
    const index = currentImageIndex[product.id] || 0;
    if (index === 0) return 'Product';
    return product.alternateImages?.[index - 1]?.label || 'Product';
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F2F0EF',
      color: '#0f0f10'
    }}>
      {/* Global Header */}
      <header style={{
        background: '#1a1a1a',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(8px)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: '40px',
            padding: '20px 0'
          }}>
            {/* Left Navigation */}
            <nav style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center'
            }}>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#f1f1f1',
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  padding: 0
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#f1f1f1'}
              >
                Home
              </button>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#f1f1f1',
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  padding: 0
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#f1f1f1'}
              >
                New Arrival
              </button>
            </nav>

            {/* Center - Brand Name */}
            <div style={{ textAlign: 'center' }}>
              <h1 style={{
                margin: 0,
                fontFamily: 'var(--font-mono)',
                fontWeight: '700',
                fontSize: '32px',
                lineHeight: '1',
                letterSpacing: '0.08em',
                color: '#ffffff',
                textShadow: '0 2px 8px rgba(173, 199, 234, 0.15)'
              }}>
                AUSTIN CARSON
              </h1>
            </div>

            {/* Right Navigation + Utilities */}
            <div style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#f1f1f1',
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  padding: 0
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#f1f1f1'}
              >
                About
              </button>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#f1f1f1',
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  padding: 0
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#f1f1f1'}
              >
                Contact
              </button>
              
              {/* Icon Utilities */}
              <div style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                paddingLeft: '16px',
                borderLeft: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#f1f1f1',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#f1f1f1'}
                  aria-label="Search"
                >
                  <Search size={20} strokeWidth={1.5} />
                </button>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#f1f1f1',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#f1f1f1'}
                  aria-label="Account"
                >
                  <User size={20} strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => setIsCartOpen(true)}
                  style={{
                    position: 'relative',
                    background: 'none',
                    border: 'none',
                    color: cartCount > 0 ? '#ADC7EA' : '#f1f1f1',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                  onMouseLeave={(e) => {
                    if (cartCount === 0) {
                      e.currentTarget.style.color = '#f1f1f1';
                    }
                  }}
                  aria-label={`Shopping cart with ${cartCount} items`}
                >
                  <ShoppingCart size={20} strokeWidth={1.5} />
                  {cartCount > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      minWidth: '18px',
                      height: '18px',
                      background: '#ADC7EA',
                      color: '#1a1a1a',
                      borderRadius: '0',
                      display: 'grid',
                      placeItems: 'center',
                      fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                      fontSize: '9px',
                      fontWeight: '800',
                      lineHeight: '1',
                      padding: '0 4px'
                    }}>
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main style={{
        maxWidth: '1180px',
        margin: '28px auto 80px',
        padding: '0 16px'
      }}>
        {/* Subheader */}
        <header style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'end',
          color: '#0f0f10',
          marginBottom: '18px',
          paddingTop: '16px'
        }}>
          <h1 style={{
            margin: 0,
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '1.1',
            letterSpacing: '0.18em',
            textTransform: 'uppercase'
          }}>
            Product Registry // Mockup Design
          </h1>
          <nav style={{ display: 'flex', gap: '8px' }}>
            {['All', 'Cardigans', 'Pants', 'Cameos', 'Shirts'].map((filter) => {
              const isActive = selectedFilter === filter;
              const isAvailable = filter === 'All' || filter === 'Cardigans' || filter === 'Pants' || filter === 'Cameos';
              
              return (
                <button
                  key={filter}
                  onClick={() => isAvailable && setSelectedFilter(filter)}
                  disabled={!isAvailable}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    height: '32px',
                    padding: '0 14px',
                    border: isActive ? '2px solid #ADC7EA' : '1px solid rgba(0,0,0,0.15)',
                    color: isActive ? '#0f0f10' : '#666',
                    background: isActive ? '#ADC7EA' : 'transparent',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: '700',
                    fontSize: '11px',
                    lineHeight: '1',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    cursor: isAvailable ? 'pointer' : 'not-allowed',
                    opacity: isAvailable ? 1 : 0.5,
                    transition: 'all var(--transition-fast)',
                    boxShadow: isActive ? '0 2px 6px rgba(173, 199, 234, 0.3)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isAvailable && !isActive) {
                      e.currentTarget.style.borderColor = 'rgba(173, 199, 234, 0.8)';
                      e.currentTarget.style.color = '#0f0f10';
                      e.currentTarget.style.background = 'rgba(173, 199, 234, 0.15)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
                      e.currentTarget.style.color = '#666';
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </nav>
        </header>

        {/* Product Grid */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: '16px'
        }}>
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              style={{
                background: '#ffffff',
                border: '1px solid #e6e6e6',
                borderRadius: '0',
                boxShadow: '0 2px 0 rgba(0,0,0,0.04)',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateRows: 'auto 1fr auto'
              }}
            >
              {/* Header */}
              <header style={{
                display: 'grid',
                gridTemplateColumns: '62px 1fr auto',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                borderBottom: '1px solid #e6e6e6',
                background: '#ffffff'
              }}>
                <div style={{
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontWeight: '700',
                  fontSize: '11px',
                  lineHeight: '1',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#666'
                }}>
                  {product.serial}
                </div>
                <h2 style={{
                  margin: 0,
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontWeight: '800',
                  fontSize: '12px',
                  lineHeight: '1.1',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: '#0f0f10'
                }}>
                  {product.title}
                </h2>
                <div style={{
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontWeight: '800',
                  fontSize: '20px',
                  lineHeight: '1',
                  color: '#0f0f10'
                }}>
                  {product.price}
                </div>
              </header>

              {/* Body */}
              <section style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 380px) 56px',
                minHeight: '340px'
              }}
              className="pc-body-responsive">
                {/* Text */}
                <div style={{
                  borderRight: '1px solid #e6e6e6',
                  padding: '18px 14px',
                  display: 'grid',
                  alignContent: 'start',
                  gap: '14px',
                  background: '#ffffff'
                }}>
                  <h3 style={{
                    margin: 0,
                    fontFamily: 'var(--font-mono)',
                    fontWeight: '700',
                    fontSize: '22px',
                    lineHeight: '1.15',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                    color: '#0f0f10'
                  }}>
                    {product.name}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: '#666',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: '400'
                  }}>
                    {product.subtitle}
                  </p>

                  {/* Meta */}
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    alignItems: 'center'
                  }}>
                    {product.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          height: '24px',
                          padding: '0 10px',
                          border: badge === 'NEW' || badge === 'Bestseller' ? '1px solid #ADC7EA' : '1px solid #e6e6e6',
                          borderRadius: '0',
                          background: badge === 'NEW' || badge === 'Bestseller' ? '#ADC7EA' : '#ffffff',
                          fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                          fontWeight: '800',
                          fontSize: '11px',
                          lineHeight: '1',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: badge === 'NEW' || badge === 'Bestseller' ? '#0a0e12' : '#0f0f10'
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#666',
                      fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                      fontWeight: '600',
                      fontSize: '12px',
                      lineHeight: '1'
                    }}>
                      <span style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: product.colorHex,
                        border: '1px solid #d9e3f2',
                        boxShadow: 'inset 0 0 0 2px #fff'
                      }} />
                      {product.color}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <figure 
                  onClick={() => setQuickViewProduct(product)}
                  style={{
                    margin: 0,
                    borderLeft: '1px solid #e6e6e6',
                    borderRight: '1px solid #e6e6e6',
                    background: '#f5f5f5',
                    display: 'grid',
                    placeItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}>
                  <ImageWithFallback
                    src={getCurrentImage(product)}
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '20px'
                    }}
                  />
                  {product.alternateImages && product.alternateImages.length > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleProductImage(product.id);
                      }}
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        appearance: 'none',
                        border: '1px solid #e6e6e6',
                        background: '#ffffff',
                        color: '#0f0f10',
                        fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                        fontWeight: '700',
                        fontSize: '10px',
                        lineHeight: '1',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '8px 10px',
                        borderRadius: '0',
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#ADC7EA';
                        e.currentTarget.style.color = '#ADC7EA';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#e6e6e6';
                        e.currentTarget.style.color = '#0f0f10';
                      }}
                    >
                      View: {getCurrentImageLabel(product)}
                      <ChevronRight size={14} strokeWidth={2.5} />
                    </button>
                  )}
                </figure>

                {/* Actions */}
                <div style={{
                  borderLeft: '1px solid #e6e6e6',
                  display: 'grid',
                  alignContent: 'start',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 0',
                  background: '#ffffff'
                }}
                className="pc-actions-responsive">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    title={addedToCart.has(product.id) ? "Added to cart!" : "Add to cart"}
                    style={{
                      appearance: 'none',
                      width: '42px',
                      height: '42px',
                      border: addedToCart.has(product.id) ? '2px solid #4CAF50' : '2px solid #0f0f10',
                      background: addedToCart.has(product.id) ? '#4CAF50' : '#0f0f10',
                      color: '#ffffff',
                      borderRadius: '0',
                      cursor: 'pointer',
                      display: 'grid',
                      placeItems: 'center',
                      transition: 'all 0.15s',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      if (!addedToCart.has(product.id)) {
                        e.currentTarget.style.background = '#ADC7EA';
                        e.currentTarget.style.borderColor = '#ADC7EA';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!addedToCart.has(product.id)) {
                        e.currentTarget.style.background = '#0f0f10';
                        e.currentTarget.style.borderColor = '#0f0f10';
                      }
                    }}
                    aria-label="Add to cart"
                  >
                    <ShoppingCart size={18} strokeWidth={2} />
                  </button>
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    style={{
                      appearance: 'none',
                      width: '42px',
                      height: '42px',
                      border: '2px solid #e6e6e6',
                      background: '#ffffff',
                      color: '#0f0f10',
                      borderRadius: '0',
                      cursor: 'pointer',
                      display: 'grid',
                      placeItems: 'center',
                      transition: 'all 0.15s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#ADC7EA';
                      e.currentTarget.style.color = '#ADC7EA';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e6e6e6';
                      e.currentTarget.style.color = '#0f0f10';
                    }}
                    aria-label="Quick view"
                  >
                    <Maximize2 size={18} strokeWidth={2} />
                  </button>
                </div>
              </section>

              {/* Footer */}
              <footer style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                padding: '10px 14px',
                borderTop: '1px solid #e6e6e6',
                background: '#fafafa',
                fontSize: '11px',
                lineHeight: '1.2',
                color: '#666'
              }}>
                <div style={{
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontWeight: '700',
                  fontSize: '11px',
                  lineHeight: '1',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase'
                }}>
                  SN {product.sku}
                </div>
                <div style={{
                  fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
                }}>
                  {product.shippingNote}
                </div>
              </footer>
            </article>
          ))}
        </section>
      </main>

      {/* Quick View Modal */}
      <Dialog open={quickViewProduct !== null} onOpenChange={(open) => {
        if (!open) {
          setQuickViewProduct(null);
          setIsImageZoomed(false);
        }
      }}>
        <DialogContent 
          className="max-w-[96vw] w-[1400px] border-0 p-0"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '0',
            border: '2px solid #0f0f10',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          <DialogTitle className="sr-only">Quick View: {quickViewProduct?.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Quick view of {quickViewProduct?.name}
          </DialogDescription>
          {quickViewProduct && (
            <div style={{
              display: 'grid',
              gridTemplateRows: 'auto 1fr',
              maxHeight: '92vh'
            }}>
              {/* Modal Header */}
              <header style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto auto',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 28px',
                borderBottom: '2px solid #0f0f10',
                background: '#ffffff'
              }}>
                <div style={{
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontWeight: '800',
                  fontSize: '12px',
                  lineHeight: '1',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#666'
                }}>
                  {quickViewProduct.serial}
                </div>
                <h2 style={{
                  margin: 0,
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontWeight: '800',
                  fontSize: '16px',
                  lineHeight: '1.1',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: '#0f0f10'
                }}>
                  {quickViewProduct.title}
                </h2>
                <div style={{
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontWeight: '800',
                  fontSize: '24px',
                  lineHeight: '1',
                  color: '#0f0f10'
                }}>
                  {quickViewProduct.price}
                </div>
              </header>

              {/* Modal Body */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.3fr 1fr',
                overflow: 'auto'
              }}
              className="quick-view-body">
                {/* Left - Image */}
                <div 
                  onClick={() => setIsImageZoomed(true)}
                  style={{
                    background: '#f5f5f5',
                    display: 'grid',
                    placeItems: 'center',
                    padding: '40px',
                    borderRight: '1px solid #e6e6e6',
                    cursor: 'zoom-in',
                    position: 'relative',
                    minHeight: '650px'
                  }}>
                  <ImageWithFallback
                    src={getCurrentImage(quickViewProduct)}
                    alt={quickViewProduct.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '750px',
                      objectFit: 'contain',
                      transition: 'transform 0.2s'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: '#ffffff',
                    padding: '8px 12px',
                    borderRadius: '0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    pointerEvents: 'none'
                  }}>
                    <ZoomIn size={14} />
                    Click to Zoom
                  </div>
                  {quickViewProduct.alternateImages && quickViewProduct.alternateImages.length > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleProductImage(quickViewProduct.id);
                      }}
                      style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '16px',
                        appearance: 'none',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        background: 'rgba(255, 255, 255, 0.95)',
                        color: '#0f0f10',
                        fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                        fontWeight: '700',
                        fontSize: '11px',
                        lineHeight: '1',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '10px 14px',
                        borderRadius: '0',
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        pointerEvents: 'auto'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#ADC7EA';
                        e.currentTarget.style.borderColor = '#ADC7EA';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                      }}
                    >
                      View: {getCurrentImageLabel(quickViewProduct)}
                      <ChevronRight size={14} strokeWidth={2.5} />
                    </button>
                  )}
                </div>

                {/* Right - Details */}
                <div style={{
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}>
                  <div>
                    <h3 style={{
                      margin: '0 0 12px 0',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                      fontWeight: '800',
                      fontSize: '28px',
                      lineHeight: '1.15',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      color: '#0f0f10'
                    }}>
                      {quickViewProduct.name}
                    </h3>
                    <p style={{
                      margin: 0,
                      color: '#666',
                      fontSize: '15px',
                      lineHeight: '1.5',
                      fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
                    }}>
                      {quickViewProduct.subtitle}
                    </p>
                  </div>

                  {/* Meta */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap'
                    }}>
                      {quickViewProduct.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            height: '26px',
                            padding: '0 12px',
                            border: badge === 'NEW' || badge === 'Bestseller' ? '1px solid #ADC7EA' : '1px solid #e6e6e6',
                            borderRadius: '0',
                            background: badge === 'NEW' || badge === 'Bestseller' ? '#ADC7EA' : '#ffffff',
                            fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                            fontWeight: '800',
                            fontSize: '11px',
                            lineHeight: '1',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: badge === 'NEW' || badge === 'Bestseller' ? '#0a0e12' : '#0f0f10'
                          }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: '#666',
                      fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                      fontWeight: '600',
                      fontSize: '13px',
                      lineHeight: '1'
                    }}>
                      <span style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: quickViewProduct.colorHex,
                        border: '1px solid #d9e3f2',
                        boxShadow: 'inset 0 0 0 2px #fff'
                      }} />
                      {quickViewProduct.color}
                    </span>
                  </div>

                  {/* Actions */}
                  <div style={{
                    display: 'grid',
                    gap: '12px',
                    marginTop: '16px'
                  }}>
                    <button
                      onClick={() => {
                        handleAddToCart(quickViewProduct.id);
                        setQuickViewProduct(null);
                      }}
                      style={{
                        appearance: 'none',
                        border: '2px solid #0f0f10',
                        background: '#0f0f10',
                        color: '#ffffff',
                        fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                        fontWeight: '800',
                        fontSize: '13px',
                        lineHeight: '1',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '16px 20px',
                        borderRadius: '0',
                        cursor: 'pointer',
                        transition: 'all 0.15s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#ADC7EA';
                        e.currentTarget.style.borderColor = '#ADC7EA';
                        e.currentTarget.style.color = '#0b1116';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#0f0f10';
                        e.currentTarget.style.borderColor = '#0f0f10';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                    >
                      Add to Cart
                    </button>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px'
                    }}>
                      <button
                        style={{
                          appearance: 'none',
                          border: '2px solid #e6e6e6',
                          background: '#ffffff',
                          color: '#0f0f10',
                          fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                          fontWeight: '700',
                          fontSize: '12px',
                          lineHeight: '1',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          padding: '14px 16px',
                          borderRadius: '0',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#0f0f10';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#e6e6e6';
                        }}
                      >
                        <Heart size={14} /> Favorite
                      </button>
                      <button
                        style={{
                          appearance: 'none',
                          border: '2px solid #e6e6e6',
                          background: '#ffffff',
                          color: '#0f0f10',
                          fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                          fontWeight: '700',
                          fontSize: '12px',
                          lineHeight: '1',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          padding: '14px 16px',
                          borderRadius: '0',
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#0f0f10';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#e6e6e6';
                        }}
                      >
                        <Share2 size={14} /> Share
                      </button>
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div style={{
                    marginTop: '24px',
                    padding: '16px',
                    background: '#f9f9f9',
                    border: '1px solid #e6e6e6'
                  }}>
                    <div style={{
                      fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                      fontWeight: '700',
                      fontSize: '10px',
                      lineHeight: '1',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#666',
                      marginBottom: '8px'
                    }}>
                      SN {quickViewProduct.sku}
                    </div>
                    <div style={{
                      fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                      fontSize: '13px',
                      color: '#666'
                    }}>
                      {quickViewProduct.shippingNote}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Cart Drawer */}
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent 
          side="right"
          className="w-full sm:w-[480px] p-0 border-0"
          style={{
            background: '#0a0b0c',
            borderLeft: '2px solid #ADC7EA'
          }}
        >
          <SheetTitle className="sr-only">Shopping Cart</SheetTitle>
          <SheetDescription className="sr-only">
            View and manage items in your shopping cart
          </SheetDescription>
          <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header */}
            <div style={{
              padding: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h2 style={{
                margin: 0,
                fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                fontWeight: '800',
                fontSize: '14px',
                lineHeight: '1',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#ffffff'
              }}>
                Shopping Cart ({cartCount})
              </h2>
            </div>

            {/* Cart Items */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px'
            }}>
              {cartItems.length === 0 ? (
                <div style={{
                  display: 'grid',
                  placeItems: 'center',
                  height: '100%',
                  textAlign: 'center',
                  color: '#888',
                  fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                  fontSize: '14px'
                }}>
                  Your cart is empty
                </div>
              ) : (
                <div style={{
                  display: 'grid',
                  gap: '12px'
                }}>
                  {cartItems.map((item) => (
                    <article
                      key={item.product.id}
                      style={{
                        background: '#ffffff',
                        border: '1px solid #e6e6e6',
                        borderRadius: '0',
                        overflow: 'hidden'
                      }}
                    >
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '80px 1fr auto',
                        gap: '12px',
                        padding: '12px'
                      }}>
                        {/* Product Image */}
                        <div style={{
                          width: '80px',
                          height: '80px',
                          background: '#f5f5f5',
                          display: 'grid',
                          placeItems: 'center',
                          border: '1px solid #e6e6e6'
                        }}>
                          <ImageWithFallback
                            src={item.product.imageUrl}
                            alt={item.product.title}
                            style={{
                              width: '70px',
                              height: '70px',
                              objectFit: 'contain'
                            }}
                          />
                        </div>

                        {/* Product Info */}
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px'
                        }}>
                          <h3 style={{
                            margin: 0,
                            fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                            fontWeight: '800',
                            fontSize: '12px',
                            lineHeight: '1.2',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            color: '#0f0f10'
                          }}>
                            {item.product.title}
                          </h3>
                          <div style={{
                            fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                            fontSize: '11px',
                            color: '#666',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}>
                            <span style={{
                              width: '12px',
                              height: '12px',
                              borderRadius: '50%',
                              background: item.product.colorHex,
                              border: '1px solid #d9e3f2'
                            }} />
                            {item.product.color}
                          </div>
                          <div style={{
                            fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                            fontWeight: '800',
                            fontSize: '14px',
                            color: '#0f0f10'
                          }}>
                            {item.product.price}
                          </div>
                        </div>

                        {/* Quantity & Remove */}
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          alignItems: 'flex-end'
                        }}>
                          <button
                            onClick={() => handleRemoveFromCart(item.product.id)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#999',
                              cursor: 'pointer',
                              padding: '4px',
                              display: 'flex',
                              alignItems: 'center',
                              transition: 'color 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#ff4444'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0',
                            border: '1px solid #e6e6e6',
                            background: '#ffffff'
                          }}>
                            <button
                              onClick={() => handleUpdateQuantity(item.product.id, -1)}
                              disabled={item.quantity <= 1}
                              style={{
                                background: 'none',
                                border: 'none',
                                borderRight: '1px solid #e6e6e6',
                                color: item.quantity <= 1 ? '#ccc' : '#0f0f10',
                                cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer',
                                padding: '6px 8px',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'background 0.15s'
                              }}
                              onMouseEnter={(e) => {
                                if (item.quantity > 1) {
                                  e.currentTarget.style.background = '#f5f5f5';
                                }
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'none';
                              }}
                            >
                              <Minus size={14} />
                            </button>
                            <span style={{
                              fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                              fontWeight: '700',
                              fontSize: '13px',
                              minWidth: '32px',
                              textAlign: 'center',
                              color: '#0f0f10'
                            }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateQuantity(item.product.id, 1)}
                              style={{
                                background: 'none',
                                border: 'none',
                                borderLeft: '1px solid #e6e6e6',
                                color: '#0f0f10',
                                cursor: 'pointer',
                                padding: '6px 8px',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'background 0.15s'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#f5f5f5';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'none';
                              }}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '24px',
                background: '#0a0b0c'
              }}>
                {/* Subtotal */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <span style={{
                    fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                    fontWeight: '600',
                    fontSize: '12px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#ffffff'
                  }}>
                    Subtotal
                  </span>
                  <span style={{
                    fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                    fontWeight: '800',
                    fontSize: '20px',
                    color: '#ADC7EA'
                  }}>
                    ${cartSubtotal.toFixed(2)}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  style={{
                    width: '100%',
                    appearance: 'none',
                    border: '2px solid #ADC7EA',
                    background: '#ADC7EA',
                    color: '#0a0b0c',
                    fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                    fontWeight: '800',
                    fontSize: '13px',
                    lineHeight: '1',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    padding: '18px 20px',
                    borderRadius: '0',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    marginBottom: '12px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.borderColor = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ADC7EA';
                    e.currentTarget.style.borderColor = '#ADC7EA';
                  }}
                >
                  Proceed to Checkout
                </button>

                <div style={{
                  fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                  fontSize: '12px',
                  textAlign: 'center',
                  color: '#888'
                }}>
                  Shipping & taxes calculated at checkout
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>

      {/* Image Zoom Overlay */}
      <Dialog open={isImageZoomed} onOpenChange={setIsImageZoomed}>
        <DialogContent 
          className="max-w-[98vw] max-h-[98vh] w-auto h-auto border-0 p-0 zoom-overlay-dialog"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            borderRadius: '0',
            border: 'none'
          }}
        >
          <DialogTitle className="sr-only">Zoomed Product Image</DialogTitle>
          <DialogDescription className="sr-only">
            Full size view of product image
          </DialogDescription>
          {quickViewProduct && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              maxHeight: '95vh',
              maxWidth: '95vw'
            }}>
              <ImageWithFallback
                src={getCurrentImage(quickViewProduct)}
                alt={quickViewProduct.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                  cursor: 'zoom-out'
                }}
                onClick={() => setIsImageZoomed(false)}
              />
              <button
                onClick={() => setIsImageZoomed(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: '#ffffff',
                  border: 'none',
                  color: '#0f0f10',
                  width: '40px',
                  height: '40px',
                  display: 'grid',
                  placeItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ADC7EA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                }}
                aria-label="Close zoom"
              >
                <X size={20} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer style={{
        background: '#1a1a1a',
        borderTop: '2px solid #ADC7EA',
        color: '#f1f1f1',
        marginTop: '80px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '60px 40px 40px'
        }}>
          {/* Main Footer Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '48px'
          }}>
            {/* Brand Column */}
            <div>
              <h3 style={{
                margin: '0 0 20px 0',
                fontFamily: '"Courier New", Courier, monospace',
                fontWeight: '400',
                fontSize: '24px',
                lineHeight: '1',
                letterSpacing: '0.02em',
                color: '#ffffff'
              }}>
                AUSTIN CARSON
              </h3>
              <p style={{
                margin: '0 0 16px 0',
                fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#999'
              }}>
                Premium clothing mockups and artisan pieces. Images and page crafted using Sora and Figma since 2025.
              </p>
              <div style={{
                fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#ADC7EA',
                fontWeight: '700'
              }}>
                Est. 2025
              </div>
            </div>

            {/* Shop Column */}
            <div>
              <h4 style={{
                margin: '0 0 20px 0',
                fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                fontWeight: '700',
                fontSize: '12px',
                lineHeight: '1',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#ffffff'
              }}>
                Shop
              </h4>
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {['All Products', 'Cardigans', 'Pants', 'Cameos', 'New Arrivals', 'Bestsellers'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                      fontSize: '14px',
                      color: '#999',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* About Column */}
            <div>
              <h4 style={{
                margin: '0 0 20px 0',
                fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                fontWeight: '700',
                fontSize: '12px',
                lineHeight: '1',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#ffffff'
              }}>
                About
              </h4>
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {['Our Story', 'Craftsmanship', 'Sustainability', 'Contact Us', 'Stores'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                      fontSize: '14px',
                      color: '#999',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Customer Service Column */}
            <div>
              <h4 style={{
                margin: '0 0 20px 0',
                fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                fontWeight: '700',
                fontSize: '12px',
                lineHeight: '1',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#ffffff'
              }}>
                Customer Service
              </h4>
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {['Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ', 'Track Order'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                      fontSize: '14px',
                      color: '#999',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Newsletter Section */}
          <div style={{
            padding: '32px',
            background: '#0f0f10',
            border: '1px solid #333',
            marginBottom: '48px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '24px',
              alignItems: 'center'
            }}
            className="newsletter-responsive">
              <div>
                <h4 style={{
                  margin: '0 0 8px 0',
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontWeight: '700',
                  fontSize: '13px',
                  lineHeight: '1',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#ffffff'
                }}>
                  Join Our Newsletter
                </h4>
                <p style={{
                  margin: 0,
                  fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                  fontSize: '14px',
                  color: '#999'
                }}>
                  Subscribe for exclusive offers and product updates
                </p>
              </div>
              <div style={{
                display: 'flex',
                gap: '0',
                minWidth: '320px'
              }}
              className="newsletter-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    flex: 1,
                    padding: '14px 16px',
                    border: '1px solid #333',
                    borderRight: 'none',
                    background: '#1a1a1a',
                    color: '#ffffff',
                    fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
                <button
                  style={{
                    padding: '14px 24px',
                    border: '1px solid #ADC7EA',
                    background: '#ADC7EA',
                    color: '#0a0b0c',
                    fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                    fontWeight: '800',
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.borderColor = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ADC7EA';
                    e.currentTarget.style.borderColor = '#ADC7EA';
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '24px',
            alignItems: 'center',
            paddingTop: '32px',
            borderTop: '1px solid #333'
          }}
          className="footer-bottom">
            <div style={{
              fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
              fontSize: '11px',
              color: '#666',
              letterSpacing: '0.08em'
            }}>
              © 2025 AUSTIN CARSON. All rights reserved. Handcrafted with care.
            </div>
            <div style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center'
            }}>
              <a
                href="#"
                style={{
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontSize: '11px',
                  color: '#999',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
              >
                Privacy
              </a>
              <a
                href="#"
                style={{
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontSize: '11px',
                  color: '#999',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
              >
                Terms
              </a>
              <a
                href="#"
                style={{
                  fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                  fontSize: '11px',
                  color: '#999',
                  textDecoration: 'none',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ADC7EA'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        /* Hide default dialog close buttons - we provide custom ones */
        [data-slot="dialog-content"] > button[data-slot="dialog-close"] {
          display: none;
        }
        
        /* Hide default close button on zoom overlay only */
        .zoom-overlay-dialog > button[data-slot="dialog-close"] {
          display: none !important;
        }
        
        @media (max-width: 980px) {
          .pc-body-responsive {
            grid-template-columns: 1fr !important;
          }
          .pc-body-responsive > div:first-child {
            border-right: none !important;
          }
          .pc-body-responsive > figure {
            min-height: 300px;
            border-left: none !important;
            border-top: 1px solid #e6e6e6;
          }
          .pc-actions-responsive {
            border-left: none !important;
            grid-auto-flow: column !important;
            grid-auto-columns: 42px !important;
            justify-content: start !important;
          }
          .quick-view-body {
            grid-template-columns: 1fr !important;
          }
          .quick-view-body > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid #e6e6e6;
          }
          .newsletter-responsive {
            grid-template-columns: 1fr !important;
          }
          .newsletter-form {
            min-width: auto !important;
          }
          .footer-bottom {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-bottom > div:last-child {
            justify-content: center;
          }
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
      
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0f0f10',
            color: '#ffffff',
            border: '1px solid #333',
            borderRadius: '0',
            padding: '14px 18px',
          },
        }}
        closeButton
      />
    </div>
  );
}
