// import self from "../img/self.png"
import self2 from "../img/self2.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,100,100)", "rgb(255,255,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Justin",
    lastName: "DeWitt",
    initials: "JCD", // the example uses first and last, but feel free to use three or more if you like.
    position: "And I'm Interested In",
    selfPortrait: self2, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(110deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '✔',
            text: 'Machine Learning'
        },
        {
            emoji: '✔',
            text: 'Artificial Intelligence'
        },
        {
            emoji: "✔",
            text: "Computer Vision"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/justin.dewittt/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/jcdw99?tab=repositories",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/justin-de-witt-547026243/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ],

    pages: [
        {
            field:"Artificial Intelligence",
            work:[
                {
                    name:"Velocity Clamping in PSO",
                    desc:"The Particle Swarm Optimization (PSO) metaheuristic is a commonly used, nature-inspired optimizer. It is shown by Poli and Broomhead that the swarm is guaranteed to reach eventual convergence if the heuristic's control parameters are chosen to satisfy a set of stability conditions. Velocity clamping has longly been used as a means to mitigate initial velocity explosion, and help the swarm reach convergence. This paper explores if there is still merit in using velocity clamping as a convergence mechanism, rather than the Poli stability conditions.",
                    link:"https://drive.google.com/file/d/1GPXVnaIDTQL2i03o20v_uzCC-kdQim94/preview",
                    tags: ["PSO", "Velocity Clamping", "Poli-Stability", "Single Objective Optimization"]

                },
                {
                    name:"AI2",
                    desc:"Artificial Intellegence Assignment 2",
                    link:"https://drive.google.com/file/d/1NjFV-hHmLRbal1ap955a-BVYFqVaXPV2/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

                },
                {
                    name:"AI3",
                    desc:"Artificial Intellegence Assignment 3",
                    link:"https://drive.google.com/file/d/1vwPgPoixEqq5ZTaZEYHKLxOMwIaj89Et/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

                }
            ]
    
        },
        {
            field:"Machine Learning",
            work:[
                {
                    name:"ML2",
                    desc:"Machine Learning Assignment 2",
                    link:"https://drive.google.com/file/d/1B0_83Ms3R4oGqj4dKgYUhYWoIBPZm4Yr/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

                }
            ]
        },
        {
            field:"Computer Vision",
            work:[
                {
                    name:"CompVis1",
                    desc:"Computer Vision Assignment 1",
                    link:"https://drive.google.com/file/d/1LPSprBzTrOKcBd4cKjzAMaWH7svdeD_L/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]
                }
                ,
                {
                    name:"CompVis2",
                    desc:"Computer Vision Assignment 2",
                    link:"https://drive.google.com/file/d/1dr6QmDbi4YB7qCnINluGL0NFZ_CNS66d/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]
                },
                {
                    name:"CompVis3",
                    desc:"Computer Vision Assignment 3",
                    link:"https://drive.google.com/file/d/1y3nr9k5LZb0L0PXiWG3EuAScUyGRUss4/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]
                },
                {
                    name:"CompVis4",
                    desc:"Computer Vision Assignment 4",
                    link:"https://drive.google.com/file/d/1OlPc5mxjbnrcBuZs5QT9X9bsecJfD1aR/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

                },
                {
                    name:"CompVis5",
                    desc:"Computer Vision Assignment 5",
                    link:"https://drive.google.com/file/d/1kEvQGjh25XYd1VXmLIxaxqWEnnAuy9GX/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

                },
                {
                    name:"CompVis6",
                    desc:"Computer Vision Assignment 6",
                    link:"https://drive.google.com/file/d/15aYdj9hnFd8vI1-_ILSy0qGKMJQw4Lao/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]
                }
            ]
        }
        // ,
        // {
        //     field:"Image Processing",
        //     work:[
        //         {
        //             name:"DIP1",
        //             desc:"Digital Image Processing 1",
        //             link:"https://drive.google.com/file/d/1IdBft3db2j7Iob5U5fZ-6S_ElHgmmM8w/preview",
        //             tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

        //         },
        //         {
        //             name:"DIP2",
        //             desc:"Digital Image Processing 2",
        //             link:"https://drive.google.com/file/d/1zs-h8toT_jJexTy7iC-l6apZCP1hymUf/preview",
        //             tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

        //         },
        //         {
        //             name:"DIP3",
        //             desc:"Digital Image Processing 3",
        //             link:"https://drive.google.com/file/d/1vyH97HJl7Y1Hn6kGJnf3oelFRNxTjB7X/preview",
        //             tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

        //         },
        //         {
        //             name:"DIP4",
        //             desc:"Digital Image Processing 4",
        //             link:"https://drive.google.com/file/d/1OlD9Ip7_RiDKwEauHxicPtN53RFXT0s8/preview",
        //             tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

        //         },
        //         {
        //             name:"DIP5",
        //             desc:"Digital Image Processing 5",
        //             link:"https://drive.google.com/file/d/1jK8bryA4Ht-ZDORqqj8FntohF7vVy6-5/preview",
        //             tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

        //         },
        //         {
        //             name:"DIP6",
        //             desc:"Digital Image Processing 6",
        //             link:"https://drive.google.com/file/d/1jJQeI5Zgs6G2r7OcBfqs15X9QkUa2gEF/preview",
        //             tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

        //         }
                
        //     ]
        // }
    ]
}