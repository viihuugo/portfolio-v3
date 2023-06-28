import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(CustomEase);
CustomEase.create("ease", "0.6, 0.01, -0.05, 0.9"); 
CustomEase.create("ease2", "0.62,0.05,0.01,0.99");

export function fromDivToSpan(txt, className) {
  txt.innerHTML = txt.textContent.replace(
    /(\S|\s)/g, "<span class='" + className + "'>$&</span>"
  );

  gsap.from(txt.querySelectorAll("span." + className), {
    scrollTrigger: txt,
    y: 200,
    duration: 1,
    delay: 0.5,
    ease: "ease",
    stagger: {
      amount: .5,
    },
  });
}

export function fromDivToSpanWithSpace(txt) {
  txt.innerHTML = txt.textContent.replace(
    /(\S|\s)/g,
    "<span class='space'>$&</span>").replace(
    /(<span class='space'>\s<\/span>)/g,
    "<span class='space' style='width: 20px;'>$&</span>"
);   
  gsap.from(txt.querySelectorAll(".space"), {
    scrollTrigger: txt,
    y: 200,
    duration: 1,
    delay: 0.05,
    ease: "ease",
    stagger: {
      amount: .5,
    },
  });
}

export const fadeInHero = (node)=>{
  gsap.from(node, {
      opacity: 0 ,  
      duration: .5,
      delay: 2,   
  });
};

export const staggerReveal = (node1, node2, node3) => {
  gsap.fromTo([node1, node2, node3], {
    y: 100,
    opacity: 0,  
    skewY: 2,  
  },
  {
    scrollTrigger: node1,  
    delay: .2,
    y: 0,
    skewY: 0, 
    opacity: 1,
    duration: 0.8,    
    ease: "power3.inOut",
    stagger: {
      amount: 0.5
    }
  });
};

export const fadeIn = (node1, node2)=>{
  gsap.fromTo([node1, node2], {      
      opacity: 0,     
  },
  {
    scrollTrigger: node1,
    duration: 1,
    delay: .5,
    opacity: 1,
    stagger: {
        amount: .05,
    }
  });
};

export const fadeInProject = (node1, node2)=>{
  gsap.from([node1, node2], {
      opacity: 0,
      duration: 1,
      delay: 1.5,
      stagger: {
          amount: .05,
      }
  });
};

export const scrollDownIcon = ()=>{
  gsap.from(".scrollDown", {
    scrollTrigger: ".scrollDown",
    scale: 0,
    ease: "power4.out",
    delay: 2.5,
  });
  
  gsap.to(".scrollDown", {
    scrollTrigger: ".scrollDown",
    rotation: "360",
    ease: "none",
    duration: 20,
    repeat: -1,
    opacity: 1
  });
}

export const picReveal = (photo)=>{
  gsap.to(photo, {
    scrollTrigger: photo,
    delay: 1,
    clipPath: "inset(0 100% 0 0)",
    ease: "power4.inOut",
  });
}

export const picRevealProject = (photo)=>{
  gsap.to(photo, {
    scrollTrigger: photo,
    delay: 1.5,
    clipPath: "inset(100% 0 0 0)",
    ease: "power3.inOut",
  });
}

export const lineReveal = (node1, node2, node3, node4)=>{
  gsap.to([node1, node2, node3, node4], {
    scrollTrigger: node1,
    delay: 1,
    clipPath: "inset(100% 0 0 0)",
    ease: "power4.inOut",
    stagger: {
      amount: .2,
    }
  });
}

export const revealMenu = (node)=>{
  gsap.fromTo(node, {
    x: 500,
    ease: "ease",
    duration: 1
  },
  {
    x: 0,
    ease: "ease",
    duration: 1
  }
);
  gsap.to(node, {
    css: { display: 'block'},
  });
}

export const closeMenu = (node)=>{
  gsap.fromTo(node, {
      x: 0,
      ease: "ease",
      duration: 1
    },
    {
      x: 600,
      ease: "ease",
      duration: 1
    }
  );
  gsap.to(node, {
    duration: 1,
    css: { display: 'none' }
  });
}

export const revealNavbar = (node)=>{
  gsap.fromTo(node, {
    opacity: 0,
  },  
  {
  opacity: 1,
  duration: 1,
  delay: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: node,
    start: "top+=200",
    end: "bottom-=200",
    scrub: true
  }
  });
}

export const fadeDown = ()=>{
  gsap.from(".projectNav" , {
    y: -300,
    delay: .5,
    duration: 1,
    ease: "ease",
    stagger: {
      amount: .2,
    }
  })
}

export const pageTransition = () => {
  gsap.from(".background", {
    duration: 1,
    height: 0,
    transformOrigin: 'right bottom',
    ease: 'power3.inOut',
    stagger: {
      amount: .1
    }
  });
  gsap.to(".background", {
    opacity: 1,
    zIndex: 100
  })
};

export const hideItem = (node)=>{
  gsap.fromTo(node, {
    opacity: 0,
  },
  {
    opacity: 1,
    delay: 1,
    duration: .1
  })
}

export const onPageEnter = (element)=>{
  gsap.fromTo(element, {  
    opacity: 0,
    ease: "Power3.out"
  },
  {
    opacity: 1,
    delay: .5,
    ease: "Power3.out"
  })
}

export const showContent = ()=>{
  gsap.to(".content", {
    opacity: 1,
    delay: 6,
    duration: .1
  })
}

