// import self from "../img/self.png"
// import self2 from "../img/self2.png"
import self3 from "../img/self3.png"
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
    selfPortrait: self3, // don't change this unless you want to name your self-portrait in the "img" folder something else!
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
    bio: "Hi",
    skills:
        {
            proficientWith: ['I', 'am', 'good'],
            exposedTo: ['at', 'everything']
        }
    ,
    hobbies: [
        {
            label: 'one',
            emoji: '✔'
        },
        {
            label: 'two',
            emoji: '✔'
        },
        {
            label: 'three',
            emoji: '✔'
        },
        {
            label: 'four',
            emoji: '✔'
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
                    name:"Nature Inspired Metaheuristics",
                    desc:"In this paper I've implemented three metaheuristics, as well as a novel adaptation of big-bang big-crunch optimization. It is shown that my adaption outperforms standard big-bang big-crunch, as well as particle swarm optimization against a host of benchmark functions. Differential evolution performed the best on the evaluation suite implemented in this paper. All algorithms are implemented in Java, according to their initial publication specifications.",
                    link:"https://drive.google.com/file/d/1vwPgPoixEqq5ZTaZEYHKLxOMwIaj89Et/preview",
                    tags: ["Differential Evolution", "PSO", "Big-Bang Big-Crunsh", "Metaheuristics"],
                    github: "https://github.com/jcdw99/AI_Assignment_3"
                },
                {
                    name:"Multi-Objective PSO",
                    desc:"In some scenarious we need to optimize with respect to potentially conflicting objectives. In this paper I explored the merits of multi-guided particle swarm optimization, and a speciation-based equivalent. There does not exist a function which values the rate-of-substitution between the conflicting objectives, so a set of Pareto-optimal solutions is maintained during the search procedure. ",
                    link:"https://drive.google.com/file/d/1NjFV-hHmLRbal1ap955a-BVYFqVaXPV2/preview",
                    tags: ["Multi-Guided PSO", "Speciation PSO", "Pareto Optimal Front", "Multi-Objective Optimization"],
                    github: "https://github.com/jcdw99/AI_Assignment_2"

                },
                {
                    name:"Velocity Clamping in PSO",
                    desc:"The Particle Swarm Optimization (PSO) metaheuristic is a commonly used, nature-inspired optimizer. It is shown by Poli and Broomhead that the swarm is guaranteed to reach eventual convergence if the heuristic's control parameters are chosen to satisfy a set of stability conditions. Velocity clamping has longly been used as a means to mitigate initial velocity explosion, and help the swarm reach convergence. This paper explores if there is still merit in using velocity clamping as a convergence mechanism, rather than the Poli stability conditions.",
                    link:"https://drive.google.com/file/d/1GPXVnaIDTQL2i03o20v_uzCC-kdQim94/preview",
                    tags: ["PSO", "Velocity Clamping", "Poli-Stability", "Single Objective Optimization"],
                    github: "https://github.com/jcdw99/AI_Assignment_1"

                }
            ]
    
        },
        {
            field:"Machine Learning",
            work:[
                {
                    name:"A Java Neural Network Library",
                    desc:"It has been shown that using mini-batching as a training optimization transforms the optimization landscape into a dynamic environment. It may be more suitable to use a minimizer suitable for optimizing in the dynamic context, to train the neural network. In this paper I explore this hypothesis by using a quantum adaptation to PSO as a neural network trainer. Standard PSO and stochastic gradient decent are also implemented as control algorithms. Furthermore, I have implemented a Java visualization interface to graphically display the decision boundaries of the network, throughout the training procedure.",
                    link:"https://drive.google.com/file/d/1B0_83Ms3R4oGqj4dKgYUhYWoIBPZm4Yr/preview",
                    tags: ["PSO as NN Trainers", "Quantum PSO as NN Trainers", "Stochastic Gradient Decent", "Minibatch Training", "Dynamic Optimization Environment"],
                    github: "https://github.com/jcdw99/ML_Assignment_2"
                },
                {
                    name:"Comparison of Classifiers on a Breast Tumor Dataset",
                    desc:"In this paper I present an analysis on the merits of two popular classification algorithms: Decision Trees, and K-Nearest Neighbors. Both algorithms are implemented in Python, instead of \"From Scratch\" as I tradiitonally do. This is to familiarize myself with SkLearn in preperation for a future analysis on Ensemble-based methods.",
                    link:"https://drive.google.com/file/d/1q2LfsuTk0yzYT7cosebo-eWCsyveWxQC/preview",
                    tags: ["Decision Trees", "K-Nearest Neighbors", "Breast Tumor Classification", "Bilinear Interpolation", "SIFT Matching"]
                },
                {
                    name:"Comparison of Hetero. and Homo. Ensemble Methods",
                    desc:"In this paper I compare the successes of homogeneous and heterogeneous ensembles in the context of breast tumor classification. To ensure sufficient diversity between members of the homogenous ensemble, I have implemented bootstrap aggregation techniques (Bagging), to train each member on a different subset of datapoints from the training dataset. The heterogeneous ensemble is composed from sufficiently diverse classification members, including: Naive Bayes, Support Vector Machines, K-Nearest Neighbors, Random Forest, and Decision Trees. Model tuning is accomplished via a gridsearch of the parameter space, for both ensemble methods. ",
                    link:"https://drive.google.com/file/d/1dWMECQ4t2LBfB3YknkdsFT-n25k72-Zp/preview",
                    tags: ["Heterogeneous Ensemble", "Homogeneous Ensemble", "Bagging", "Naive-Bayes", "Support Vector Machines", "Random Forest"]
                }
            ]



        },
        {
            field:"Computer Vision",
            work:[
                {
                    name:"CompVis5",
                    desc:"Computer Vision Assignment 5",
                    link:"https://drive.google.com/file/d/1kEvQGjh25XYd1VXmLIxaxqWEnnAuy9GX/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

                },
                {
                    name:"CompVis4",
                    desc:"Computer Vision Assignment 4",
                    link:"https://drive.google.com/file/d/1OlPc5mxjbnrcBuZs5QT9X9bsecJfD1aR/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

                },
                {
                    name:"CompVis3",
                    desc:"Computer Vision Assignment 3",
                    link:"https://drive.google.com/file/d/1y3nr9k5LZb0L0PXiWG3EuAScUyGRUss4/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]
                },
                {
                    name:"CompVis2",
                    desc:"Computer Vision Assignment 2",
                    link:"https://drive.google.com/file/d/1dr6QmDbi4YB7qCnINluGL0NFZ_CNS66d/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]
                },
                {
                    name:"CompVis1",
                    desc:"Computer Vision Assignment 1",
                    link:"https://drive.google.com/file/d/1LPSprBzTrOKcBd4cKjzAMaWH7svdeD_L/preview",
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