const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import your existing models (Verify paths match your project structure)
const Product = require('./models/Product'); 
const User = require('./models/User');

const seedData = async () => {
  try {
    // 1. Connect to the database using your updated Port/URI configuration
    await mongoose.connect(process.env.MONGO_URI);
    console.log('🌌 Connected to MongoDB for custom seeding...');

    // 2. Clear out the old tutorial data entirely
    await Product.deleteMany({});
    await User.deleteMany({});
    console.log('🗑️ Old e-commerce data wiped clean.');

    // 3. Create encrypted passwords for your new accounts
    const salt = await bcrypt.genSalt(10);
    const hashedAdminPassword = await bcrypt.hash('Admin@Astro2026', salt);
    const hashedUserPassword = await bcrypt.hash('DiscoverStars99', salt);

    // 4. Seed unique User and Admin accounts
    const users = await User.insertMany([
      {
        name: 'Alpha Astronomer',
        email: 'admin@stellarspace.com',
        password: hashedAdminPassword,
        role: 'admin',
        isVerified: true
      },
      {
        name: 'Rudra Pratap',
        email: 'rudra@stargaze.com',
        password: hashedUserPassword,
        role: 'user',
        isVerified: true
      }
    ]);
    console.log('👥 Custom accounts initialized (Admin & User created).');

    // 5. Seed premium, highly specific technical products
    const astronomyProducts = [
      {
        name: 'ApertureX 130mm Newtonian Reflector Telescope',
        description: 'A premium parabolic mirror telescope designed for deep-sky observation. Perfect for capturing high-clarity views of nebulae, star clusters, and distant galaxies. Includes a sturdy alt-azimuth mount and dual slow-motion control cables.',
        price: 42999,
        category: 'Telescopes',
        stock: 12,
        imageUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'StarTracker Pro Equatorial Tracking Mount',
        description: 'An ultra-precise, motorized equatorial mount built for long-exposure astrophotography. Features automated celestial tracking, an integrated polar alignment scope, and a payload capacity of up to 15kg for heavy camera rigs.',
        price: 34500,
        category: 'Mounts & Trackers',
        stock: 8,
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'NebulaCam 4K Thermoelectric Astrophotography Camera',
        description: 'A dedicated cooled CMOS camera featuring ultra-low readout noise and a high-quantum-efficiency sensor. The integrated thermoelectric cooling grid reduces thermal artifacts, delivering crystal-clear images of dim deep-space structures.',
        price: 58900,
        category: 'Cameras & Optics',
        stock: 5,
        imageUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'Zenith Premium 82-Degree Eyepiece Kit (9mm & 15mm)',
        description: 'A pair of ultra-wide-angle eyepieces using multi-coated lanthanum glass elements. Delivers an immersive, edge-to-correct view of planetary fields and moon craters without chromatic aberration.',
        price: 11200,
        category: 'Accessories',
        stock: 25,
        imageUrl: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?q=80&w=600&auto=format&fit=crop'
      }
    ];

    await Product.insertMany(astronomyProducts);
    console.log('🔭 Premium astronomy catalog seeded successfully!');

    // Print out the clear login mapping for easy testing
    console.log('\n==================================================');
    console.log('🚀 READY TO TEST LOCAL LOGIN:');
    console.log('👨‍💼 ADMIN LOGIN: admin@stellarspace.com / Admin@Astro2026');
    console.log('👤 USER LOGIN:  rudra@stargaze.com / DiscoverStars99');
    console.log('==================================================');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error during data execution:', error);
    process.exit(1);
  }
};

seedData();