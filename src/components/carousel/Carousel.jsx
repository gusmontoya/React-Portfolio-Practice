import React from 'react';

import './carousel.scss';

const slides = [
  {

    title: "React Digital Business Card",
    subtitle: "Scrimba",
    description: "A code challenge from scrimba, learning to make components in react",
    image: 
     "https://github.com/gusmontoya/React_Digital_Buisness_Card/blob/main/src/assets/React%20Digital%20Buisness%20Card%20half.png?raw=true",
    Demo: "https://modest-pasteur-925609.netlify.app/",
    Repo: "https://github.com/gusmontoya/React_Digital_Buisness_Card"
  },
  {
    title: "Travel Journal",
    subtitle: "Scrimba",
    description: "A code challenge from scrimba, learning to pass props",
    image: 
      "https://github.com/gusmontoya/Practice-React-Travel-Journal/blob/main/src/Components/assets/snapshot.png?raw=true",
    Demo: "https://gifted-goldwasser-84e902.netlify.app/",
    Repo: "https://github.com/gusmontoya/mini-travel_journal"
  },
  {
    title: "Garrick Yan Realtor site",
    subtitle: "San Francisco",
    description: "A mock realtor site for a close friend. ",
    image:
      "https://github.com/gusmontoya/Garrick_Yan_Group-Realtor/blob/main/assets/images/search%20page.png?raw=true",
    Demo: "",
    Repo: "https://github.com/gusmontoya/Garrick_Yan_Group-Realtor"
  },
  {
    title: "Get out to Nature",
    subtitle: "California",
    description: "Encouragement to reach out to nature",
    image:
      "https://github.com/gusmontoya/Product-landing-page-FCC/blob/main/images/upper_corner-sm.png?raw=true",
    Demo: "https://eloquent-goldstine-8169ff.netlify.app/",
    Repo: "https://github.com/gusmontoya/Product-landing-page-FCC"
  }
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideContainer" />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle" color="linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
          <div className="button-links">
            <a className="demo-button" href={slide.Demo} target="_blank" color="white">
              Demo
            </a>
            <a className="repo-button" href={slide.Repo} target="_blank">
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


function Carousel() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <section className="slidesWrapper">
      <div className="slides">
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div>
    </section>
  );
}

export default Carousel;