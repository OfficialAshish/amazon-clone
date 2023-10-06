// Function to generate random data for a product
const generateRandomProduct = () => {
    const titles = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    const ratings = [4.5, 3.8, 4.2, 4.7, 3.9];
    const ratingCounts = [150, 230, 100, 400, 50];
    const prices = ['$20.99', '$15.49', '$32.99', '$42.99', '$9.99'];
    const availabilities = ['In Stock', 'Out of Stock', 'Limited Stock'];
    const discounts = ['10% off', '20% off', '30% off', 'Free Shipping'];

    const randomIndex = Math.floor(Math.random() * titles.length);

    return {
        title: titles[randomIndex],
        image: images[randomIndex],
        rating: ratings[randomIndex],
        ratingCount: ratingCounts[randomIndex],
        price: prices[randomIndex],
        availability: availabilities[randomIndex],
        discount: discounts[randomIndex],
    };
};

// Function to generate an array of random products
const generateRandomProducts = (count) => {
    const products = [];

    for (let i = 0; i < count; i++) {
        const product = generateRandomProduct();
        products.push(product);
    }

    return products;
};

export { generateRandomProducts };
