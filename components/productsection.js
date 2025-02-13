    document.addEventListener("DOMContentLoaded", () => {
      const products = [
        {
          image: "images/HuaweiP50.png",
          title: "Huawei P50",
          price: "300000",
          description:
            "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
          link: "product.html",
        },
        {
          image: "images/SamsungS21.png",
          title: "Samsung S21",
          price: "250000",
          description:
            "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
          link: "product.html",
        },
        {
          image: "images/Iphone16Pro.png",
          title: "iPhone 16 Pro",
          price: "400000",
          description:
            "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
          link: "product.html",
        },
        // Segunda fila (reutilizando los mismos datos)
        {
          image: "images/HuaweiP50.png",
          title: "Huawei P50",
          price: "300000",
          description:
            "El Huawei P50 cuenta con una cámara avanzada, pantalla OLED y un rendimiento excepcional.",
          link: "product.html",
        },
        {
          image: "images/SamsungS21.png",
          title: "Samsung S21",
          price: "250000",
          description:
            "El Samsung S21 ofrece una gran experiencia de cámara, pantalla Dynamic AMOLED y un rendimiento potente.",
          link: "product.html",
        },
        {
          image: "images/Iphone16Pro.png",
          title: "iPhone 16 Pro",
          price: "400000",
          description:
            "El iPhone 16 Pro viene con una cámara revolucionaria, pantalla Super Retina XDR y un rendimiento sin igual.",
          link: "product.html",
        },
      ];

      // Creamos el contenedor principal
      const productcontainer = document.getElementById("product-container");
      if (productcontainer) {
        const container = document.createElement("div");
        container.className = "container";
        productcontainer.appendChild(container);

        for (let i = 0; i < products.length; i += 3) {
          const row = document.createElement("div");
          row.className = "row";
          container.appendChild(row);

          for (let j = i; j < i + 3 && j < products.length; j++) {
            const product = products[j];
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

          }
        }
      }
    });
