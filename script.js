gsap.to("#main-bottle",{
    rotate: "-15deg",
    scrollTrigger:{
    trigger: "#main-bottle",
    start : "top 0%",
    }
})

gsap.to("#main-bottle",{
    scrollTrigger:{
        trigger: "#main-bottle",
        // scroller : "#main",
        Start : "top 50%",
        end : "bottom -300%",
        scrub : 3,
        pin: true
    },
    ease : Expo.easeInOut,
})

gsap.to("#main-bottle",{
    scrollTrigger:{
        trigger:"#page5",
        start : "bottom 90%",
        end :"bottom 80%",
        scrub : 3,
        pin:true,
    },
    duration : 3,
    height : "280px",
    width : "150px",
    // pin : true,
})

gsap.from("#p2-left , #p2-right",{
    opacity : 0,
    y: 100,
    duration : 2,
    scrollTrigger:{
        trigger: "#p2-left , #p2-right", 
        start : "top 50%",
    },
    ease : Expo.easeInOut,

})
gsap.from("#page3 h1",{
    opacity : 0,
    y: 100,
    scrollTrigger:{
        trigger: "#page3 h1",
        start : "top 50%"
    },
    ease : Expo.easeInOut,
    duration : 1,
})
gsap.from("#p3-bleft" ,{
    opacity : 0,
    x: -100,
    scrollTrigger:{
        trigger: "#p3-bleft", 
        start : "top 50%"
    },
    ease : Expo.easeInOut,
    duration : 1.5,
})
gsap.from("#p3-bright",{
    opacity : 0,
    x: 100,
    scrollTrigger:{
        trigger: "#p3-bright",
        start : "top 50%"
    },
    ease : Expo.easeInOut,
    duration : 1.5,
})

gsap.from("#p4-img2,#p4-img1,#p4-img3,#p4-img4",{
    opacity : 0,
    y: 100,
    stagger : 0.5,
    scrollTrigger:{
        trigger: "#page4",
        start : "top 50%"
    },
    ease : Expo.easeInOut,
    duration : 1,
})

gsap.from("#p5-box .bottle",{
    opacity : 0,
    y: 100,
    scrollTrigger:{
        trigger: "#p5-box",
        start : "top 50%"
    },
    stagger :.8,
    ease : Expo.easeInOut,
    duration : 2,
})

gsap.from("#p6-left" ,{
    opacity : 0,
    x: -100,
    scrollTrigger:{
        trigger: "#p6-left",
        start : "top 50%"
    },
    ease : Expo.easeInOut,
    duration : 1.5,
})
gsap.from("#p6-right",{
    opacity : 0,
    x: 100,
    scrollTrigger:{
        trigger: "#p6-right",
        start : "top 50%"
    },
    ease : Expo.easeInOut,
    duration : 1.5,
})

gsap.from("#page1 h1",{
    scale : 0,
    opacity : 0,
    duration : 2,
    ease : Expo.easeInOut
})