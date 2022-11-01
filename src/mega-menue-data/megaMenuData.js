import { LaptopOutlined, DingtalkOutlined } from "@ant-design/icons";
export const routeMenu = (category, header, title, brand) => {
  let link = "";
  if (category && header && title && !brand) {
    link = `local/${category}/${header}/${title}`;
  } else if (category && !header && !title && !brand) {
    link = `local/${category}`;
  } else if (category && header && !title && !brand) {
    link = `local/${category}/${header}`;
  } else {
    link = `local/${category}/${header}/${title}/${brand}`;
  }

  return link;
};
export const MenuData = [
  {
    key: "Digital",
    antd: <LaptopOutlined />,
    title: "Digital",
    link: routeMenu("digital"),
    menu: [
      {
        title: "Labtop and Accessories",
        key: "lobtopandAccessory",
        header: "lobtopandAccessory",
        link: routeMenu("digital", "lobtopandAccessory"),
        submenu: [
          {
            title: "Asus",
            link: routeMenu("Digital", "lobtopandAccessory", "labtop", "asus"),
            category: "lobtopandAccessory",
            key: "asus",
            brand: "asus",
          },
          {
            title: "Apple",
            link: routeMenu("Digital", "lobtopandAccessory", "labtop", "apple"),
            category: "lobtopandAccessory",
            key: "apple",
            brand: "apple",
          },
          {
            title: "Dell",
            link: routeMenu("Digital", "lobtopandAccessory", "labtop", "dell"),
            category: "lobtopandAccessory",
            key: "dell",
            brand: "dell",
          },
          {
            title: "Lenovo",
            link: routeMenu(
              "Digital",
              "lobtopandAccessory",
              "labtop",
              "lenovo"
            ),
            category: "lobtopandAccessory",
            key: "lenovo",
            brand: "lenovo",
          },
          {
            title: "Samsung",
            link: routeMenu(
              "Digital",
              "lobtopandAccessory",
              "labtop",
              "samsung"
            ),
            category: "lobtopandAccessory",
            key: "samsung",
            brand: "samsung",
          },
          {
            title: "HP",
            link: routeMenu("Digital", "lobtopandAccessory", "labtop", "hp"),
            category: "lobtopandAccessory",
            key: "hp",
            brand: "hp",
          },
          {
            title: "HUAWEI",
            link: routeMenu(
              "Digital",
              "lobtopandAccessory",
              "labtop",
              "huawei"
            ),
            category: "lobtopandAccessory",
            Key: "huawei",
            brand: "huawei",
          },
          {
            title: "Acer",
            link: routeMenu("Digital", "lobtopandAccessory", "labtop", "accer"),
            category: "lobtopandAccessory",
            key: "acer",
            brand: "acer",
          },
          {
            title: "MSI",
            link: routeMenu("Digital", "lobtopandAccessory", "labtop", "msi"),
            category: "lobtopandAccessory",
            key: "msi",
            brand: "msi",
          },
        ],
      },

      {
        title: "Mobile and Accessories",
        key: "MobileandAccessory",
        header: "MobileandAccessory",
        link: routeMenu("digital", "mobileandAccessory"),
        submenu: [
          {
            title: "Samsung",
            link: routeMenu(
              "Digital",
              "MobileandAccessory",
              "mobile",
              "samsung"
            ),
            category: "MobileandAccessory",
            key: "samsung",
            brand: "samsung",
          },
          {
            title: "Apple",
            link: routeMenu(
              "Digital",
              "MobileandAccessory",
              "mobile",
              "iphone"
            ),
            category: "MobileandAccessory",
            key: "iphone",
            brand: "iphone",
          },
          {
            title: "Nokia",
            link: routeMenu("Digital", "MobileandAccessory", "mobile", "nolia"),
            category: "MobileandAccessory",
            key: "nokia",
            brand: "nokia",
          },
          {
            title: "Xiaomi",
            link: routeMenu(
              "Digital",
              "MobileandAccessory",
              "mobile",
              "xiaomi"
            ),
            category: "MobileandAccessory",
            key: "xiaomi",
          },
          {
            title: "Motorolla",
            link: routeMenu(
              "Digital",
              "MobileandAccessory",
              "mobile",
              "motorolla"
            ),
            category: "MobileandAccessory",
            key: "Motorolla",
            brand: "motorolla",
          },
          {
            title: "LG",
            link: routeMenu("Digital", "MobileandAccessory", "mobile", "lg"),
            category: "MobileandAccessory",
            key: "LG",
            brand: "lg",
          },
          {
            title: "Sony",
            link: routeMenu("Digital", "MobileandAccessory", "mobile", "sony"),
            category: "MobileandAccessory",
            key: "Sony",
            brand: "sony",
          },
        ],
      },

      {
        title: "Computer and Accessories",
        key: "ComputerAndAccessory",
        header: "ComputerAndAccessory",
        link: routeMenu("digital", "ComputerAndAccessory"),
        submenu: [
          {
            title: "Monitor",
            link: routeMenu("Digital", "ComputerandAccessories", "monitor"),
            key: "Monitor",
            type: "monitor",
          },
          {
            title: "Mouse",
            link: routeMenu("Digital", "ComputerandAccessories", "mouse"),
            key: "Mouse",
            type: "mouse",
          },
          {
            title: "Keyboard",
            link: routeMenu("Digital", "ComputerandAccessories", "keyboard"),
            key: "Keyboard",
            type: "keyboard",
          },
        ],
      },
    ],
  },

  {
    key: "FashionAccessory",
    antd: <DingtalkOutlined />,
    title: "Fashion and Closthes",
    link: routeMenu("fashion"),
    menu: [
      {
        title: "Womens Fashion",
        key: "WomensFashion",
        link: "",
        submenu: [
          { title: "Dress", link: "", key: "dress" },
          { title: "Skirt", link: "", key: "Skirt" },
          { title: "Jeans", link: "", key: "FJeans" },
          { title: "Pants", link: "", key: "FPants" },
          { title: "T-Shirt", link: "", key: "Ftshirt" },
          { title: "Shoes", link: "", key: "Fshoes" },
          { title: "Scarf", link: "", key: "scarf" },
        ],
      },

      {
        title: "Mens Fashion",
        link: "",
        key: "MensFashion",
        submenu: [
          { title: "Shirt", link: "", key: "Shirt" },
          { title: "Pants", link: "", key: "pants" },
          { title: "Tie", link: "", key: "tie" },
          { title: "ShirT-shirt", link: "", key: "tshirt" },
          { title: "Shoes", link: "", key: "shoes" },
          { title: "Jeans", link: "", key: "jeans" },
        ],
      },

      {
        title: "Childs Fashion",
        key: "Childs-Fashion",
        link: "",
        submenu: [
          { title: "Overals", link: "", key: "overals" },
          { title: "Mittens", link: "", key: "mittens" },
          { title: "Baby Opron", link: "", key: "opron" },
          { title: "Shoes", link: "", key: "shoes" },
          { title: "T-shirts", link: "", key: "Tshirts" },
        ],
      },
    ],
  },
];
