//     img {
//         width: 100%;
//         max-width: 600px;
//         display: block;
//         margin: 20px auto;
//         opacity: 0;
//         filter: blur(10px);
//         transition: opacity 2s ease-in-out, filter 2s ease;
//     }

//     img.loaded {
//         opacity: 1;
//         filter: blur(0);
//     }

// <img src="./slide1.jpg" data-src="./slide1.jpg" alt="img-one" loading="lazy">
// <img src="./slide2.jpg" data-src="./slide2.jpg" alt="img-two" loading="lazy">
// <img src="./slide1.jpg" data-src="./slide1.jpg" alt="img-three" loading="lazy">

document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });
});




import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function App() {
  let image={
    alt:'',
    height:400,
    width:600,
    src:'https://images.unsplash.com/photo-1595206133361-b1fe343e5e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=610&q=80'
  }
  return (
    <div className="App">
      <LazyLoadImage
      alt={image.alt}
      height={image.height}
      delayTime="2000"
      effect="blur"
      src={image.src} // use normal <img> attributes as props
      width={image.width} />
    </div>
  );
}
//Note:image lazy loading
//<img src="image.jpg" alt="..." loading="lazy" />


//code spliting with react with React.lazy,delaying to display child component
//its also called  asynchronous import /"code splitting" or "dynamic import"
//lazy function is supposed to return a promise
//Note:prefetching for better navigation with suspence and lazy
//technique used to load JavaScript modules or components asynchronously at runtime, rather than including them in the initial bundle
//type 1
import { lazy, Suspense } from "react";
const Dropdown = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./DropDown")), 3000);
  });
});
export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Dropdown />
      </Suspense>
    </div>
  );
}
//type 2
import { useEffect, useState } from "react";

export default function App() {
  const [state, setState] = useState();
  useEffect(() => {
    const importComponent = async () => {
      const module = await import("./DropDown");
      const DropDown = module.default;
      setState(<DropDown />);
    };

    importComponent();
  }, []);
  return <div className="App">{state}</div>;
}

//Note: in all route use that logic
//Note: always import in App.js like const Home = lazy(() => import('./path/Home')) then wrapped App with <Suspense fallback={<div>Loading...</div>}> performance wise its geeting better



//Intersection Observer:
//The Intersection Observer API is a browser API that allows developers to monitor the visibility of DOM elements. It allows developers to detect when an element is visible or not 
//and also to detect when an element enters or leaves the viewport. The Intersection Observer API can be used to trigger events when elements enter or leave the viewport. For example, 
//a developer can use the Intersection Observer API to detect when a user scrolls to the bottom of a page and then trigger an event, such as an animation or a message.
//For example, you could use the API to create a carousel that only loads the images that are currently visible in the viewport, or lazy-load images when a user scrolls down the page
import "./styles.css";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("in-view", entry.isIntersecting);
      });
    });
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("isVisible");
        } else {
          entry.target.classList.remove("isVisible");
        }
      });
    });

    observer.observe(document.querySelector("section#one", { treshold: 1 }));
    observer.observe(document.querySelector("section#two", { treshold: 1 }));
    observer.observe(document.querySelector("section#three", { treshold: 1 }));
    observer2.observe(
      document.querySelector(".box", { rootMargin: "0px", treshold: 0.5 })
    );
  }, []);

  return (
    <div className="App">
      <main>
        <section id="one">
          <div>
            <p>TEXT 1</p>
          </div>
        </section>
        <section id="two">
          <div>
            <p>TEXT 2</p>
          </div>
        </section>
        <div class="box">
          <h2>Above the 3rd div</h2>
        </div>
        <section id="three">
          <div>
            <p>TEXT 3</p>
          </div>
        </section>
      </main>
    </div>
  );
}

// main {
//   display: flex;
//   flex-direction: column;
//   padding: 30px;
//   align-items: flex-end;
// }
// section {
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: flex-end;
// }
// section > div {
//   height: 125px;
//   line-height: 125px;
//   width: 80%;
//   font-size: 20px;
//   color: #fff;
//   text-align: center;
//   background: #ec6f72;
//   box-shadow: 0px 7px 24px 3px rgba(0, 0, 0, 0.25);
//   transform: translateX(100vw);
//   transition: transform 0.4s;
// }
// section.in-view > div {
//   transform: translateX(0);
// }
// section#two > div {
//   width: 55%;
//   color: #fff;
//   background: #ffb94d;
// }
// section#three > div {
//   width: 40%;
//   color: #fff;
//   background: #3c51aa;
// }
// .box {
//   width: 50vw;
//   height: 20vh;
//   opacity: 0;
//   transform: translateY(40px);
//   transition: all 1s ease-in-out;
// }
// .box.isVisible {
//   width: 50vw;
//   height: 20vh;
//   opacity: 1;
//   transform: translateY(0);
// }