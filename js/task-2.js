const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const galleryListEL = document.querySelector(".gallery");
// const galleryItem = document.createElement("li");
// const imageItem = document.createElement("img");

// const imagesArray = images.map((image) => image.url);
// const imagesAlt = images.map((image) => image.alt);
// for (let i = 0; i < imagesArray.length; i++) {
//   galleryListEL.insertAdjacentHTML(
//     "beforeend",
//     `<li><img class="image" src=${imagesArray[i]} alt="${imagesAlt[i]}"></li>`
//   );
// }

const galleryImagesEl = images.map(image => {
  const galleryItemEl = document.createElement("li");
  const imageEl = document.createElement('img');
  imageEl.classList.add('galleryImage');
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  galleryItemEl.append(imageEl);
  return galleryItemEl;
});
galleryListEL.append(...galleryImagesEl);

galleryListEL.insertAdjacentHTML(
  "beforebegin",
  `<style>
    .gallery {
      list-style-type: none;
        display: flex;  
        flex-wrap: wrap;  
        gap: 10px;}
      .galleryImage {
          max-width: 300px;
          border-radius: 20px;
          height: 100%;
          object-fit: cover;}
       </style>`
);

// const image = document.querySelector(".galleryImage");
// image.setAttribute("width", "300px");
// image.style.borderRadius = "20px";
// image.style.cssText = `
//           height: 100%;
//           object-fit: cover`;
