document.addEventListener("DOMContentLoaded", () => {
  // Array de productos (agrega la propiedad "category" si en el futuro implementas filtros)
  const products = [
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Mini",
      price: "320000",
      description:
        "El iPhone 16 Mini es compacto, potente y muy eficiente para su tamaño.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Mini",
      price: "320000",
      description:
        "El iPhone 16 Mini es compacto, potente y muy eficiente para su tamaño.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Mini",
      price: "320000",
      description:
        "El iPhone 16 Mini es compacto, potente y muy eficiente para su tamaño.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Mini",
      price: "320000",
      description:
        "El iPhone 16 Mini es compacto, potente y muy eficiente para su tamaño.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Mini",
      price: "320000",
      description:
        "El iPhone 16 Mini es compacto, potente y muy eficiente para su tamaño.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Mini",
      price: "320000",
      description:
        "El iPhone 16 Mini es compacto, potente y muy eficiente para su tamaño.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Mini",
      price: "320000",
      description:
        "El iPhone 16 Mini es compacto, potente y muy eficiente para su tamaño.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Mini",
      price: "320000",
      description:
        "El iPhone 16 Mini es compacto, potente y muy eficiente para su tamaño.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Mini",
      price: "320000",
      description:
        "El iPhone 16 Mini es compacto, potente y muy eficiente para su tamaño.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Mini",
      price: "320000",
      description:
        "El iPhone 16 Mini es compacto, potente y muy eficiente para su tamaño.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Mini",
      price: "320000",
      description:
        "El iPhone 16 Mini es compacto, potente y muy eficiente para su tamaño.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50",
      price: "300000",
      description:
        "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21",
      price: "250000",
      description:
        "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro",
      price: "400000",
      description:
        "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Plus",
      price: "320000",
      description:
        "La versión Plus del Huawei P50 mejora la cámara y el rendimiento general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Ultra",
      price: "280000",
      description:
        "El Samsung S21 Ultra destaca por su sistema de cámaras y gran pantalla.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Pro Max",
      price: "450000",
      description:
        "El iPhone 16 Pro Max ofrece una experiencia premium y excelente calidad en cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Lite",
      price: "180000",
      description:
        "El Huawei P50 Lite es una opción económica con buenas prestaciones.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 FE",
      price: "230000",
      description:
        "El Samsung S21 FE equilibra precio y rendimiento, ideal para el día a día.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16",
      price: "350000",
      description:
        "El iPhone 16 mejora la eficiencia y la experiencia del usuario en general.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/HuaweiP50.png",
      title: "Huawei P50 Nova",
      price: "310000",
      description:
        "El Huawei P50 Nova combina un diseño elegante con buena cámara.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/SamsungS21.png",
      title: "Samsung S21 Plus",
      price: "270000",
      description:
        "El Samsung S21 Plus es ideal para quienes buscan calidad premium a un precio razonable.",
      link: "product.html",
      category: "celulares",
    },
    {
      image: "images/Iphone16Pro.png",
      title: "iPhone 16 Mini",
      price: "320000",
      description:
        "El iPhone 16 Mini es compacto, potente y muy eficiente para su tamaño.",
      link: "product.html",
      category: "celulares",
    },
    
  ];

  // Configuración de paginación
  const itemsPerPage = 6;
  let currentPage = 1;
  let filteredProducts = products;

  // Función para mostrar los productos de la página actual
  function displayProducts() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToDisplay = filteredProducts.slice(start, end);

    const container = document.getElementById("product-container");
    container.innerHTML = "";

    const innerContainer = document.createElement("div");
    innerContainer.className = "container";
    container.appendChild(innerContainer);

    const row = document.createElement("div");
    row.className = "row";
    innerContainer.appendChild(row);

    productsToDisplay.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-sm-12 col-lg-4 mb-5";
      row.appendChild(col);

      const bestPhoneDiv = document.createElement("div");
      bestPhoneDiv.className = "best_phone";
      col.appendChild(bestPhoneDiv);

      const img = document.createElement("img");
      img.className = "phone-img";
      img.src = product.image;
      bestPhoneDiv.appendChild(img);

      if (product.title) {
        const h2 = document.createElement("h2");
        h2.className = "phone_title";
        h2.textContent = product.title;
        bestPhoneDiv.appendChild(h2);
      }

      const priceSpan = document.createElement("span");
      priceSpan.className = "phone_price";
      priceSpan.innerHTML = `$ <span style="color: #7ad01e">${product.price}</span>`;
      bestPhoneDiv.appendChild(priceSpan);

      const p = document.createElement("p");
      p.className = "phone_description";
      p.textContent = product.description;
      bestPhoneDiv.appendChild(p);

      const a = document.createElement("a");
      a.href = product.link;
      a.className = "buy_phone";
      a.textContent = "Comprar";
      bestPhoneDiv.appendChild(a);
    });
  }

// Función para generar la lista de páginas numéricas
function createPaginationNumbers(totalPages, currentPage) {
  const pages = [];
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push({ type: 'page', page: i });
    }
  } else {
    if (currentPage <= 4) {
      //cerca del inicio
      for (let i = 1; i <= 5; i++) {
        pages.push({ type: 'page', page: i });
      }
      pages.push({ type: 'ellipsis' });
      pages.push({ type: 'page', page: totalPages });
    } else if (currentPage > 4 && currentPage < totalPages - 3) {
      //en el medio
      pages.push({ type: 'page', page: 1 });
      pages.push({ type: 'page', page: currentPage - 1 });
      pages.push({ type: 'page', page: currentPage });
      pages.push({ type: 'page', page: currentPage + 1 });
      pages.push({ type: 'ellipsis' });
      pages.push({ type: 'page', page: totalPages });
    } else {
      //cerca del final
      pages.push({ type: 'page', page: 1 });
      pages.push({ type: 'ellipsis' });
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push({ type: 'page', page: i });
      }
    }
  }
  return pages;
}

// Función para renderizar los controles de paginación
function displayPagination() {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const pageNumbers = createPaginationNumbers(totalPages, currentPage);

   const wrapper = document.createElement("div");
  wrapper.className = "pagination-wrapper";
  paginationContainer.appendChild(wrapper);

  // Botón "Anterior"
  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = "&laquo;";
  prevBtn.className = "page-btn btn btn-secondary mx-1";
  prevBtn.disabled = (currentPage === 1);
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayProducts();
      displayPagination();
    }
  });
  wrapper.appendChild(prevBtn);

  // Botones numéricos y "..."
  pageNumbers.forEach(item => {
    let btn = document.createElement("button");
    if (item.type === "page") {
      btn.textContent = item.page;
      btn.className = "page-btn btn btn-secondary mx-1";
      if (item.page === currentPage) {
        btn.classList.add("active");
      }
      btn.addEventListener("click", () => {
        currentPage = item.page;
        displayProducts();
        displayPagination();
      });
    } else if (item.type === "ellipsis") {
      btn.textContent = "...";
      btn.className = "page-btn ellipsis mx-1";
      btn.disabled = true;
    }
    wrapper.appendChild(btn);
  });

  // Botón "Siguiente"
  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "&raquo;";
  nextBtn.className = "page-btn btn btn-secondary mx-1";
  nextBtn.disabled = (currentPage === totalPages);
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayProducts();
      displayPagination();
    }
  });
  wrapper.appendChild(nextBtn);
}

// Inicializa la visualización de productos y paginación
displayProducts();
displayPagination();
});