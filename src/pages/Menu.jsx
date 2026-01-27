import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { Star, X, Flame, Plus } from 'lucide-react';

function Menu() {
  const { theme: colors } = useContext(ThemeContext);
  const [selectedCuisine, setSelectedCuisine] = useState('indian');
  const [selectedCategory, setSelectedCategory] = useState('desserts');
  const [customizingItem, setCustomizingItem] = useState(null);

  const cuisines = [
    { id: 'indian', name: 'Indian', emoji: '🇮🇳', color: '#FF9933' },
    { id: 'chinese', name: 'Chinese', emoji: '🇨🇳', color: '#DE2910' },
    { id: 'italian', name: 'Italian', emoji: '🇮🇹', color: '#009246' }
  ];

  const categories = ['Desserts', 'Starters', 'Beverages', 'Main Menu', 'Specials', 'Snacks'];

  const menuItems = {
    indian: {
      desserts: [
        { 
          name: 'Gulab Jamun', 
          price: '₹89', 
          desc: 'Sweet milk dumplings in syrup', 
          chefSpecial: true,
          image: 'https://img.freepik.com/premium-photo/indian-dessert-gulab-jamun_988987-26262.jpg'
        },
        { 
          name: 'Rasgulla', 
          price: '₹79', 
          desc: 'Soft cottage cheese balls',
          image: 'https://img-cdn.thepublive.com/filters:format(webp)/local-samosal/media/media_files/HrQaDQk5NaKjRawunHIx.png'
        },
        { 
          name: 'Kheer', 
          price: '₹99', 
          desc: 'Rice pudding with nuts',
          image: 'https://tse4.mm.bing.net/th/id/OIP.Fq61CviMLm3Qgg-grvKLegHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3'
        },
        { 
          name: 'Jalebi', 
          price: '₹69', 
          desc: 'Crispy sweet spirals',
          image: 'https://thatdeliciousdish.com/wp-content/uploads/2018/09/Thumbnail-Jalebi-and-Rabri-recipe-scaled.jpg'
        }
      ],
      starters: [
        { 
          name: 'Paneer Tikka', 
          price: '₹199', 
          desc: 'Grilled cottage cheese', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop'
        },
        { 
          name: 'Samosa', 
          price: '₹49', 
          desc: 'Crispy pastry with potato',
          image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
        },
        { 
          name: 'Aloo Tikki', 
          price: '₹59', 
          desc: 'Potato patties',
          image: 'https://sinfullyspicy.com/wp-content/uploads/2023/03/1-2-768x1152.jpg'
        },
        { 
          name: 'Pakora Platter', 
          price: '₹129', 
          desc: 'Mixed fritters',
          image: 'https://cookwithrenu.com/wp-content/uploads/2020/09/Tea-Time-Pakora-Platter_1.jpg.webp'
        }
      ],
      beverages: [
        { 
          name: 'Masala Chai', 
          price: '₹39', 
          desc: 'Spiced Indian tea', 
          chefSpecial: true,
          image: 'https://tse4.mm.bing.net/th/id/OIP.Y2sPxHdr_5R0WsDYkPTaTAHaE7?w=2000&h=1333&rs=1&pid=ImgDetMain&o=7&rm=3'
        },
        { 
          name: 'Sweet Lassi', 
          price: '₹69', 
          desc: 'Yogurt drink',
          image: 'https://www.ohmyveg.co.uk/wp-content/webp-express/webp-images/uploads/2024/09/Piyush-Drink-1-1200x1200.jpg.webp'
        },
        { 
          name: 'Mango Lassi', 
          price: '₹89', 
          desc: 'Mango yogurt smoothie',
          image: 'https://img.freepik.com/premium-photo/fresh-mango-coconut-smoothie-generative-ai_893571-4073.jpg'
        }
      ],
      'main menu': [
        { 
          name: 'Butter Chicken', 
          price: '₹299', 
          desc: 'Creamy tomato curry', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop'
        },
        { 
          name: 'Dal Makhani', 
          price: '₹189', 
          desc: 'Black lentils in gravy',
          image: 'https://as1.ftcdn.net/v2/jpg/07/27/71/80/1000_F_727718045_xUOkLyWBCJpHXQHgsMHHzJmYuUW0izRf.jpg'
        },
        { 
          name: 'Paneer Butter Masala', 
          price: '₹229', 
          desc: 'Cottage cheese curry',
          image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop'
        }
      ],
      specials: [
        { 
          name: 'Hyderabadi Biryani', 
          price: '₹349', 
          desc: 'Aromatic rice dish', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop'
        },
        { 
          name: 'Thali Special', 
          price: '₹299', 
          desc: 'Complete meal platter',
          image: 'https://www.marhaba.qa/wp-content/uploads/2018/09/Marharaja-Thali-cover-photo-1.jpg'
        }
      ],
      snacks: [
        { 
          name: 'Pav Bhaji', 
          price: '₹129', 
          desc: 'Spiced vegetables with bread', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop'
        },
        { 
          name: 'Vada Pav', 
          price: '₹49', 
          desc: 'Potato fritter sandwich',
          image: 'https://img.freepik.com/premium-photo/vada-pav-traditional-indian-thali_1179130-112679.jpg'
        },
        { 
          name: 'Bhel Puri', 
          price: '₹69', 
          desc: 'Puffed rice salad',
          image: 'https://tse1.mm.bing.net/th/id/OIP.LSdm5Mx2rLfxTv3XdbVGvQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3'
        }
      ]
    },
    chinese: {
      desserts: [
        { 
          name: 'Honey Noodles', 
          price: '₹129', 
          desc: 'Crispy noodles', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop'
        },
        { 
          name: 'Date Pancakes', 
          price: '₹149', 
          desc: 'Sweet pancakes',
          image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop'
        }
      ],
      starters: [
        { 
          name: 'Spring Rolls', 
          price: '₹159', 
          desc: 'Crispy vegetable rolls', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop'
        },
        { 
          name: 'Veg Momos', 
          price: '₹129', 
          desc: 'Steamed dumplings',
          image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop'
        },
        { 
          name: 'Manchurian', 
          price: '₹179', 
          desc: 'Fried balls in sauce',
          image: 'https://img.freepik.com/premium-photo/gobi-manchurian-with-crispy-edges-photo_1036998-351286.jpg'
        }
      ],
      beverages: [
        { 
          name: 'Green Tea', 
          price: '₹59', 
          desc: 'Traditional Chinese tea', 
          chefSpecial: true,
          image: 'https://gimmerecipe.com/wp-content/uploads/2024/07/0ce13005-7acb-4bb2-a783-238fc9e6d75d.webp'
        },
        { 
          name: 'Jasmine Tea', 
          price: '₹69', 
          desc: 'Fragrant floral tea',
          image: 'https://img.freepik.com/premium-photo/jasmine-tea-with-jasmine-flowers_844495-82.jpg?w=2000'
        }
      ],
      'main menu': [
        { 
          name: 'Hakka Noodles', 
          price: '₹189', 
          desc: 'Stir-fried noodles', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop'
        },
        { 
          name: 'Fried Rice', 
          price: '₹179', 
          desc: 'Wok-tossed rice',
          image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop'
        },
        { 
          name: 'Chow Mein', 
          price: '₹199', 
          desc: 'Pan-fried noodles',
          image: 'https://tse3.mm.bing.net/th/id/OIP.MpuxIyXPj9ab4c3ynRRmQQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3'
        }
      ],
      specials: [
        { 
          name: 'Szechuan Special', 
          price: '₹349', 
          desc: 'Spicy combo', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop'
        }
      ],
      snacks: [
        { 
          name: 'Wonton Soup', 
          price: '₹139', 
          desc: 'Dumplings in broth', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop'
        },
        { 
          name: 'Crispy Corn', 
          price: '₹119', 
          desc: 'Fried corn kernels',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop'
        }
      ]
    },
    italian: {
      desserts: [
        { 
          name: 'Tiramisu', 
          price: '₹199', 
          desc: 'Coffee layered dessert', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop'
        },
        { 
          name: 'Panna Cotta', 
          price: '₹179', 
          desc: 'Creamy vanilla pudding',
          image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop'
        },
        { 
          name: 'Gelato', 
          price: '₹149', 
          desc: 'Italian ice cream',
          image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop'
        }
      ],
      starters: [
        { 
          name: 'Bruschetta', 
          price: '₹169', 
          desc: 'Toasted bread with tomatoes', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop'
        },
        { 
          name: 'Caprese Salad', 
          price: '₹189', 
          desc: 'Mozzarella, tomato, basil',
          image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&h=300&fit=crop'
        }
      ],
      beverages: [
        { 
          name: 'Espresso', 
          price: '₹99', 
          desc: 'Strong Italian coffee', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop'
        },
        { 
          name: 'Cappuccino', 
          price: '₹129', 
          desc: 'Coffee with foam',
          image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop'
        }
      ],
      'main menu': [
        { 
          name: 'Margherita Pizza', 
          price: '₹299', 
          desc: 'Classic cheese pizza', 
          chefSpecial: true,
          image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop'
        },
        { 
          name: 'Pasta Alfredo', 
          price: '₹279', 
          desc: 'Creamy white sauce pasta',
          image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop'
        },
        { 
          name: 'Lasagna', 
          price: '₹329', 
          desc: 'Layered pasta bake',
          image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop'
        }
      ],
      specials: [
        { 
          name: "Chef's Risotto", 
          price: '₹379', 
          desc: 'Creamy Italian rice', 
          chefSpecial: true,
          image: 'https://img.freepik.com/premium-photo/gourmet-presentation-risotto-fine-dining-setting_891336-30118.jpg?w=996'
        }
      ],
      snacks: [
        { 
          name: 'Garlic Bread', 
          price: '₹99', 
          desc: 'Toasted with garlic butter', 
          chefSpecial: true,
          image: 'https://wallpapercave.com/wp/wp3031784.jpg'
        },
        { 
          name: 'Arancini', 
          price: '₹149', 
          desc: 'Fried rice balls',
          image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=400&h=300&fit=crop'
        }
      ]
    }
  };

  const CustomizationModal = ({ item, onClose }) => {
    const [customization, setCustomization] = useState({
      spiceLevel: 'Medium',
      portionSize: 'Regular',
      extraToppings: []
    });

    const spiceLevels = ['Mild', 'Medium', 'Spicy', 'Extra Spicy'];
    const portionSizes = ['Small', 'Regular', 'Large'];
    const toppings = ['Extra Cheese', 'Extra Veggies', 'Extra Sauce', 'Garlic', 'Olives'];

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }} onClick={onClose}>
        <div style={{
          backgroundColor: colors.cardBg,
          borderRadius: '16px',
          padding: '2rem',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative'
        }} onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: colors.text
            }}
          >
            <X size={24} />
          </button>

          <h3 style={{ color: colors.text, fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Customize Your Order
          </h3>
          <h4 style={{ color: colors.text, opacity: 0.7, marginBottom: '2rem' }}>{item.name}</h4>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ color: colors.text, fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
              <Flame size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Spice Level
            </label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {spiceLevels.map(level => (
                <button
                  key={level}
                  onClick={() => setCustomization({ ...customization, spiceLevel: level })}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    border: `2px solid ${colors.border}`,
                    backgroundColor: customization.spiceLevel === level ? colors.accent : colors.cardBg,
                    color: customization.spiceLevel === level ? 'white' : colors.text,
                    cursor: 'pointer',
                    fontWeight: customization.spiceLevel === level ? 'bold' : 'normal'
                  }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ color: colors.text, fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
              Portion Size
            </label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {portionSizes.map(size => (
                <button
                  key={size}
                  onClick={() => setCustomization({ ...customization, portionSize: size })}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    border: `2px solid ${colors.border}`,
                    backgroundColor: customization.portionSize === size ? colors.accent : colors.cardBg,
                    color: customization.portionSize === size ? 'white' : colors.text,
                    cursor: 'pointer',
                    fontWeight: customization.portionSize === size ? 'bold' : 'normal'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ color: colors.text, fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
              <Plus size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Extra Toppings (+₹20 each)
            </label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {toppings.map(topping => (
                <button
                  key={topping}
                  onClick={() => {
                    setCustomization(prev => ({
                      ...prev,
                      extraToppings: prev.extraToppings.includes(topping)
                        ? prev.extraToppings.filter(t => t !== topping)
                        : [...prev.extraToppings, topping]
                    }));
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    border: `2px solid ${colors.border}`,
                    backgroundColor: customization.extraToppings.includes(topping) ? colors.accent : colors.cardBg,
                    color: customization.extraToppings.includes(topping) ? 'white' : colors.text,
                    cursor: 'pointer',
                    fontWeight: customization.extraToppings.includes(topping) ? 'bold' : 'normal'
                  }}
                >
                  {topping}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              alert(`Added to cart!\nSpice: ${customization.spiceLevel}\nSize: ${customization.portionSize}\nToppings: ${customization.extraToppings.join(', ') || 'None'}`);
              onClose();
            }}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: colors.accent,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  const currentItems = menuItems[selectedCuisine][selectedCategory.toLowerCase()] || [];
  const chefSpecialItem = currentItems.find(item => item.chefSpecial);

  return (
    <div style={{ backgroundColor: colors.bg, minHeight: '100vh', paddingBottom: '3rem' }}>
      <div style={{ padding: '3rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: 'Georgia, serif', color: colors.text, fontSize: '3rem', fontWeight: 'bold' }}>
            Our Menu 🍽️
          </h1>
          <p style={{ color: colors.text, opacity: 0.7, fontSize: '1.1rem' }}>
            Explore cuisines from around the world
          </p>
        </div>

        {/* Cuisine Selection */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {cuisines.map(cuisine => (
            <button
              key={cuisine.id}
              onClick={() => {
                setSelectedCuisine(cuisine.id);
                setSelectedCategory('desserts');
              }}
              style={{
                padding: '14px 32px',
                borderRadius: '12px',
                border: `3px solid ${cuisine.color}`,
                backgroundColor: selectedCuisine === cuisine.id ? cuisine.color : colors.cardBg,
                color: selectedCuisine === cuisine.id ? 'white' : colors.text,
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'all 0.3s'
              }}
            >
              <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>{cuisine.emoji}</span>
              {cuisine.name}
            </button>
          ))}
        </div>

        {/* Chef's Special Banner */}
        {chefSpecialItem && (
          <div style={{
            background: `linear-gradient(135deg, ${colors.accent}99, ${colors.secondary}99)`,
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '3rem',
            border: `3px solid ${colors.accent}`,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}>
            <div style={{ flex: '0 0 200px' }}>
              <img 
                src={chefSpecialItem.image} 
                alt={chefSpecialItem.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              />
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Star size={24} style={{ color: '#FFD700' }} fill="#FFD700" />
                <h3 style={{ color: '#FFF', fontWeight: 'bold', margin: 0 }}>Chef's Special</h3>
              </div>
              <h4 style={{ color: '#FFF', marginBottom: '8px' }}>{chefSpecialItem.name}</h4>
              <p style={{ color: '#FFF', opacity: 0.9, marginBottom: '1rem' }}>{chefSpecialItem.desc}</p>
              <p style={{ color: '#FFD700', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>{chefSpecialItem.price}</p>
              <button
                onClick={() => setCustomizingItem(chefSpecialItem)}
                style={{
                  padding: '14px 32px',
                  backgroundColor: '#FFF',
                  color: colors.accent,
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  cursor: 'pointer'
                }}
              >
                Customize & Order
              </button>
            </div>
          </div>
        )}

        {/* Category Tabs */}
        <div style={{
          backgroundColor: colors.cardBg,
          borderRadius: '12px',
          padding: '1rem',
          marginBottom: '2rem',
          border: `2px solid ${colors.border}`,
          overflowX: 'auto'
        }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: selectedCategory === category ? colors.accent : 'transparent',
                  color: selectedCategory === category ? 'white' : colors.text,
                  cursor: 'pointer',
                  fontWeight: selectedCategory === category ? 'bold' : 'normal',
                  whiteSpace: 'nowrap'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items with Images */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {currentItems.map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: colors.cardBg,
              borderRadius: '12px',
              overflow: 'hidden',
              border: `2px solid ${colors.border}`,
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
e.currentTarget.style.borderColor = colors.accent;
}}
onMouseLeave={(e) => {
e.currentTarget.style.transform = 'translateY(0)';
e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
e.currentTarget.style.borderColor = colors.border;
}}>
{/* Item Image */}
<div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
<img
src={item.image}
alt={item.name}
style={{
width: '100%',
height: '100%',
objectFit: 'cover'
}}
/>
{item.chefSpecial && (
<div style={{
position: 'absolute',
top: '1rem',
right: '1rem',
backgroundColor: '#FFD700',
borderRadius: '50%',
padding: '8px',
boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
}}>
<Star size={20} fill="#FFD700" color="#FFF" />
</div>
)}
</div>
{/* Item Details */}
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ color: colors.text, fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  {item.name}
                </h4>
                <p style={{ color: colors.text, opacity: 0.7, fontSize: '0.9rem', marginBottom: '1rem' }}>
                  {item.desc}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#FFD700', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {item.price}
                  </span>
                  <button
                    onClick={() => setCustomizingItem(item)}
                    style={{
                      backgroundColor: colors.accent,
                      color: 'white',
                      border: 'none',
                      padding: '8px 20px',
                      borderRadius: '6px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Customize
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {customizingItem && (
        <CustomizationModal item={customizingItem} onClose={() => setCustomizingItem(null)} />
      )}
    </div>
  );
}

export default Menu;