
import self4 from "../img/self4.jpg"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,100,100)", "rgb(255,255,255)"];

export const info = {
    firstName: "Justin",
    lastName: "DeWitt",
    initials: "JCD", // the example uses first and last, but feel free to use three or more if you like.
    position: "And I'm Interested In",
    selfPortrait: self4,
    gradient: `-webkit-linear-gradient(110deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
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
        },
        {
            emoji: "✔",
            text: "Linear Algebra"
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
    ],
    portfolio: [
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
                    desc:"In some scenarious we need to optimize with respect to potentially conflicting objectives. In this paper I explored the merits of multi-guided particle swarm optimization, and a speciation-based equivalent. In this context, there does not exist a function that specifies the rate-of-substitution between the conflicting objectives, so a set of Pareto-optimal solutions is maintained during the search procedure. ",
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
                    name:"Facial Rec Using PCA and Bag-Of-Words",
                    desc:"In this paper we implement a facial recognition system by decomposing each image in \"Face-Space\" to a low(er) dimensional representation. We thereafter find a eigenbasis for this space, and represent each face as its coordinate combination. In the subsequent section of the paper, we implement a scene classifier using bag-of-words dimension reduction techniques, and an array of one-to-one support vector machines.",
                    link:"https://drive.google.com/file/d/1NsMC5BychJoneRbsoUqSt74LSTy4RC-V/preview",
                    tags: ["Principle Component Analysis", "Support Vector Machines", "K-Nearest Neighbors", "Eigenfaces", "Bag-Of-Words"],
                    github: "https://github.com/jcdw99/CV_Assignment_5"

                },
                {
                    name:"Calibration of a Stereo Camera System",
                    desc:"In this paper we configure a stereo camera system using a set of SIFT feature matches between two images taken from different perspectives. After RANSAC methods are applied to filter incorrect SIFT pairs, each point can be triangulated to obtain a 3D rendering of the image content. Thereafter, we perform image rectification to match the perspectives of both images, to facilitate fast subsequent feature matches by traversing the corresponding epipolar lines. ",
                    link:"https://drive.google.com/file/d/160auyNxBDX4OanV7_074cGNqLmUze8rn/preview",
                    tags: ["RANSAC", "Image Rectification", "Homography", "Epipolar Lines"]

                },
                {
                    name:"Epipolar Geometry from Point Correspondences",
                    desc:"In this paper we use the known dimensions of a single lego brick to determine the intrinsic and extrinsic properties of the camera used to take the two photos. From these properties we estimate the XYZ location of the structure, as well as the camera positions at the time of taking the photos. We may use the estimated real-world coordinates to build a 3D rendering of the photo content, and the cameras.",
                    link:"https://drive.google.com/file/d/1UglezP07QbzAifhtfGZbw8MpDIKnbm-j/preview",
                    tags: ["Camera Calibration", "Epipolar Lines"]
                },
                {
                    name:"Perspective Distortion Using Homographies",
                    desc:"In this paper we apply basic linear algebra concepts to distort images. Thereafter, we use two photos and a set of static correspondences to estimate a homography that unifies the perspective between the images. Once the image perspectives agree, we can stitch the photos together to extend the frame of view, similar to a panaramic setup.",
                    link:"https://drive.google.com/file/d/1LKuMQgCtB7mxM3FczHYz5xOXlKV2nXBa/preview",
                    tags: ["Homographies", "SIFT", "Image Stitching"]
                },
                {
                    name:"Correction and Feature Detection",
                    desc:"In this paper I've implemented popular image alteration methods like contrast stretching based off of a hyperbolic tangent function, median filteration for salt-and-pepper noise, and image sharpening through unsharp masking. Thereafter we implement image resizing using bilinear interpolation. Finally, we introduce feature matching using SIFT.",
                    link:"https://drive.google.com/file/d/1nxeBmZmAjlO-Sv-0spHWop4iYtVXI5t9/preview",
                    tags: ["Contrast Stretching", "Median Filteration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]
                },      
                {
                    name:"CNN: Fresh and with Transfer Learning",
                    desc:"In this paper we implement a convolution neural network using the popular PyTorch library. We are attempting to classify a set of images with nine classes. We find that the model quickly overfits, which is somewhat mitigated thereafter using random dropout and data augmentation. ",
                    link:"https://drive.google.com/file/d/171YWAXLhoE7M95yoxN4k7cvqZTe8dOjU/preview",
                    tags: ["CNN", "Transfer Learning", "Regularization", "Image Classification"]
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