
import self4 from "../img/self4.jpg"
import proj1 from "../img/project_1.png"
import proj2 from "../img/project_2.png"
import proj3 from "../img/project_3.png"
import proj4 from "../img/project_4.png"
import picOfMe from "../img/about.JPG"
import cv from "../files/JustinDewitt-WebResume.pdf"
import bcom from "../files/JustinDewitt-Bcom.pdf"
import bsc from "../files/JustinDewitt-Bsc.pdf"


export let colors = ["rgb(173,216,230)", "rgb(143,186,200)"];
export let theme = {
    backgroundColor: '#151515',
    textColor: '#ffffff',
    navColor: '#2f2f2f',
    pageNav: '#444444',
    navOpacity: 0.8,
    activeButton:'#888888',
    inactiveButton:'#bbbbbb',
    form:'#e5e5e5'
};
export const info = {
    firstName: "Justin",
    lastName: "Dewitt",
    initials: "JCD", // the example uses first and last, but feel free to use three or more if you like.
    position: "And I'm Interested In",
    selfPortrait: self4,
    gradient: `-webkit-linear-gradient(110deg, ${colors})`, 
    baseColor: colors[0],
    About: {
        aboutMePortrait: picOfMe,
        title: "Passionate About My Work",
        desc: [
            'My university days were a time of self discovery. After moving alone from the United States to South Africa in the pursuit of further education, I suddenly had no friends - no understanding of local culture, and absolute freedom.',
            "It wasn't easy at the start. I decided to pursue a Computer Science degree without any prior coding experience. Over the years, my interest in solving riddle-styled algorithmic problems evolved into something deeper. My work began to feel like something that I wanted to make a career out of. ",
            "During my final year at university I began to discover work that I am truly passionate about. There is something amazingly rewarding about understanding, implementing and improving intelligent computing systems.  A career goal of mine is to work alongside a team of dedicated individuals, collectively pushing the boundaries of what state-of-art models can achieve."
        ],
        downloadLinks: [
            {
                title: "Resumé",
                file_path: cv,
                file_name: "JustinDewitt-WebResume"

            }, 
            {
                title: "Bsc Hons CS",
                file_path: bsc,
                file_name: 'JustinDewitt-Bsc'

            },
            {
                title: "Bcom Math Sci",
                file_path: bcom,
                file_name: "JustinDewitt-Bcom"
            }
        ]

    },
    //I have to add 1 to the index field because /:0 is registered as empty
    miniBio: [ 
        {
            emoji: '✔',
            text: 'Machine Learning',
            pagesIndex:2

        },
        {
            emoji: '✔',
            text: 'Artificial Intelligence',
            pagesIndex:1
        },
        {
            emoji: "✔",
            text: "Computer Vision",
            pagesIndex:3
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

    portfolio: [
        {
            name: "Tea Grading Scorecard",
            image: proj4,
            desc: 'The "Scorecard" application is a paid project financed by the faculty of AgriScience, at Stellenbosch University. The department expressed the need to digitize their research and development pipeline concerning the manufacturing of tea products. The application provides an interface for experts to complete an e-scorecard which is stored directly on the application. Completed scorecards can be either individually or bulk exported to customized PDF or XLSX documents. The application also provides a robust sorting and searching algorithm to identify completed e-scorecards. The project source code can not be made public as this is a paid project, though a viewing may be arranged at the request of a future potential employer.',
            tags: ['tag1', 'tag2']
        },
        {
            name: "Neural Network Library",
            github: "https://github.com/jcdw99/ML_Assignment_2",
            image: proj2,
            desc: 'To truly understand the complexity of Neural Networks, I believe they should be implemented from scratch, without the use of external libraries. In this project I provide a Java library that can be used to create, configure, train, and serialize deep neural networks. To accompany the training process, there is a graphic interface that models the decision boundaries of the classifier throughout the training process. Observing the decision boundaries as the model trains is not only fascinating, but can provide insight on whether the model overfits or underfits. The library also implements nature-inspired metaheuristics as optimizers, which can be used to replace traditional stochastic gradient decent. All model parameters and activation functions can be configured by means of a configuration file.',
            tags: ['tag1', 'tag2']
        },
        {
            name: "MoonBoard Grader",
            github: "https://github.com/jcdw99/MoonBoard-Classifier",
            image: proj1,
            desc: 'The MoonBoard is an standardized indoor rock climbing wall. Members of the international climbing community can use the MoonBoard application to create, or climb, graded routes. This project delivers a homogenous ensemble model that quite accurately predicts the difficulty (grade) of MoonBoard problems. Included in this project is a script used to automatically interact with the MoonBoard application to collect route images. The images are subsequently piped into a morphological processing pipeline to identify which holds form part of the route. Thereafter, the data is used to construct a machine learning model to perform the classification.',
            tags: ['tag1', 'tag2']
        },
        {
            name: "Narrative Action Research",
            github: "https://github.com/jcdw99/NBAR_MERN",
            image: proj3,
            desc: "The Narrative Action Research Tool was created for Dr. John Van Breda, specifically designed to implement the NAR methodology outlined in John's 2022 publication. The web-based application was created using the MERN software stack. The application allows social scientists to design, create, and deploy questionnaires. Respondents may use the application to respond to questionnaires. The responses can thereafter be either collectively or individually analyzed using graphics generated by the application. Van Breda proposes a custom \"polyad\" widget which is also implemented in this project. A 21 page document summarizing this project can be made available upon request.",
            tags: ['tag1', 'tag2']
        }
    ],

    pages: [
        {
            field:"Artificial Intelligence",
            work:[
                {
                    name:"Nature Inspired Metaheuristics",
                    desc:"In this paper I've implemented three metaheuristics, as well as a novel adaptation of big-bang big-crunch optimization. It is shown that my adaption outperforms standard big-bang big-crunch, as well as particle swarm optimization against a host of benchmark functions. Differential evolution performed the best on the evaluation suite implemented in this paper. All algorithms are implemented in Java, according to their initial publication specifications.",
                    encrypt:"https://drive.google.com/file/d/1juF79qb8phkgSWVJqxN3_ebH5fPiJ44u/preview",
                    preview: "https://drive.google.com/file/d/1OpAIAMnq6H8YqlxpE8XFYiqa69oIXDt4/preview",
                    tags: ["Differential Evolution", "PSO", "Big-Bang Big-Crunsh", "Metaheuristics"],
                    // github: "https://github.com/jcdw99/AI_Assignment_3"
                },
                {
                    name:"Multi-Objective PSO",
                    desc:"In some scenarios we need to optimize with respect to potentially conflicting objectives. In this paper I explored the merits of multi-guided particle swarm optimization, and a speciation-based equivalent. In this context, there does not exist a function that specifies the rate-of-substitution between the conflicting objectives, so a set of Pareto-optimal solutions is maintained during the search procedure. ",
                    encrypt:"https://drive.google.com/file/d/1Oi2me0zXaHLdWPt-MXXAN2qypmrMZb7G/preview",
                    preview:"https://drive.google.com/file/d/1XgY0lVP2W4dEyeemoXgmP7W95zjmaAaR/preview",
                    tags: ["Multi-Guided PSO", "Speciation PSO", "Pareto Optimal Front", "Multi-Objective Optimization"],
                    // github: "https://github.com/jcdw99/AI_Assignment_2"

                },
                {
                    name:"Velocity Clamping in PSO",
                    desc:"The Particle Swarm Optimization (PSO) metaheuristic is a commonly used, nature-inspired optimizer. It is shown by Poli and Broomhead that the swarm is guaranteed to reach eventual convergence if the heuristic's control parameters are chosen to satisfy a set of stability conditions. Velocity clamping has longly been used as a means to mitigate initial velocity explosion, and help the swarm reach convergence. This paper explores if there is still merit in using velocity clamping as a convergence mechanism, rather than the Poli stability conditions.",
                    encrypt:"https://drive.google.com/file/d/1UfPJn7R9LdxIpYXSnetvhBqCmF3F-u5H/preview",
                    preview:"https://drive.google.com/file/d/1ZT6_3I-C_J3X6jAnhJZOu5iY-SLAcMlR/preview",
                    tags: ["PSO", "Velocity Clamping", "Poli-Stability", "Single Objective Optimization"],
                    // github: "https://github.com/jcdw99/AI_Assignment_1"

                }
            ]
    
        },
        {
            field:"Machine Learning",
            work:[
                {
                    name:"A Java Neural Network Library",
                    desc:"It has been shown that using mini-batching as a training optimization transforms the optimization landscape into a dynamic environment. It may be more suitable to use a minimizer suitable for optimizing in the dynamic context, to train the neural network. In this paper I explore this hypothesis by using a quantum adaptation to PSO as a neural network trainer. Standard PSO and stochastic gradient descent are also implemented as control algorithms. Furthermore, I have implemented a Java visualization interface to graphically display the decision boundaries of the network, throughout the training procedure.",
                    encrypt:"https://drive.google.com/file/d/14BHzSl1dAAgikP3NEFUsTbRppe3CJq2a/preview",
                    preview:"https://drive.google.com/file/d/1dyWKmDbHId9zfiC90FyWSIAgSwqjmpId/preview",
                    tags: ["PSO as NN Trainers", "Quantum PSO as NN Trainers", "Stochastic Gradient Decent", "Minibatch Training", "Dynamic Optimization Environment"],
                    // github: "https://github.com/jcdw99/ML_Assignment_2"
                },
                {
                    name:"Comparison of Classifiers on a Breast Tumor Dataset",
                    desc:"In this paper I present an analysis on the merits of two popular classification algorithms: Decision Trees, and K-Nearest Neighbors. Both algorithms are implemented in Python, instead my preferred \"From Scratch\" implementation. This is to familiarize myself with SkLearn in preparation for a future analysis on Ensemble-based methods.",
                    encrypt:"https://drive.google.com/file/d/1-Ua8RRDoEM2ZAGW51ShSGAqT2egKHvQk/preview",
                    preview:"https://drive.google.com/file/d/1RX5UWrUf5NiLT7Pk3u4nztk490r75fat/preview",
                    tags: ["Decision Trees", "K-Nearest Neighbors", "Breast Tumor Classification", "Bilinear Interpolation", "SIFT Matching"]
                },
                {
                    name:"Comparison of Hetero. and Homo. Ensemble Methods",
                    desc:"In this paper I compare the successes of homogeneous and heterogeneous ensembles in the context of breast tumor classification. To ensure sufficient diversity between members of the homogenous ensemble, I have implemented bootstrap aggregation techniques (Bagging), to train each member on a different subset of datapoints from the training dataset. The heterogeneous ensemble is composed from sufficiently diverse classification members, including: Naive Bayes, Support Vector Machines, K-Nearest Neighbors, Random Forest, and Decision Trees. Model tuning is accomplished via a gridsearch of the parameter space, for both ensemble methods. ",
                    encrypt:"https://drive.google.com/file/d/1QkJ2SkgSIxsKxccw_-Czg3Oec_2xW_my/preview",
                    preview:"https://drive.google.com/file/d/1Fb5qQ2eclXsXQn2fxAyFCbVT_xSKZLNQ/preview",
                    tags: ["Heterogeneous Ensemble", "Homogeneous Ensemble", "Bagging", "Naive-Bayes", "Support Vector Machines", "Random Forest"]
                }
            ]

        },
        {
            field:"Computer Vision",
            work:[
                {
                    name:"Facial Rec Using PCA and Bag-Of-Words",
                    desc:"In this paper we implement a facial recognition system by decomposing each image in \"Face-Space\" to a low(er) dimensional representation. We thereafter find an eigenbasis for this space, and represent each face as its coordinate combination. In the subsequent section of the paper, we implement a scene classifier using bag-of-words dimension reduction techniques, and an array of one-to-one support vector machines.",
                    encrypt:"https://drive.google.com/file/d/14FKGODf5S4RWqbhBRU6v5QOS8MJd1SY7/preview",
                    preview:"https://drive.google.com/file/d/12xpA_D_WY6209q3Umf12-gKLAoqvjF3o/preview",
                    tags: ["Principle Component Analysis", "Support Vector Machines", "K-Nearest Neighbors", "Eigenfaces", "Bag-Of-Words"],
                    // github: "https://github.com/jcdw99/CV_Assignment_5"

                },
                {
                    name:"Calibration of a Stereo Camera System",
                    desc:"In this paper we configure a stereo camera system using a set of SIFT feature matches between two images taken from different perspectives. After RANSAC methods are applied to filter incorrect SIFT pairs, each point can be triangulated to obtain a 3D rendering of the image content. Thereafter, we perform image rectification to match the perspectives of both images, to facilitate fast subsequent feature matches by traversing the corresponding epipolar lines. ",
                    encrypt:"https://drive.google.com/file/d/17_2CjztRffgkNpRliqI2REW43LEqrSwE/preview",
                    preview:"https://drive.google.com/file/d/1TPRgE2D-CtOWEfFTbKkp_HZjZjrkkAwV/preview",
                    tags: ["RANSAC", "Image Rectification", "Homography", "Epipolar Lines"]

                },
                {
                    name:"Epipolar Geometry from Point Correspondences",
                    desc:"In this paper we use the known dimensions of a single lego brick to determine the intrinsic and extrinsic properties of the camera used to take the two photos. From these properties we estimate the XYZ location of the structure, as well as the camera positions at the time of taking the photos. We may use the estimated real-world coordinates to build a 3D rendering of the photo content, and the cameras.",
                    encrypt:"https://drive.google.com/file/d/1HNrpsT3yGwX8h9xHqz_8vtnluce4jZLg/preview",
                    preview:"https://drive.google.com/file/d/1vVtr-MlSFBKc7FqXZBn6nJGNBaV_xCSF/preview",
                    tags: ["Camera Calibration", "Epipolar Lines"]
                },
                {
                    name:"Perspective Distortion Using Homographies",
                    desc:"In this paper we apply basic linear algebra concepts to distort images. Thereafter, we use two photos and a set of static correspondences to estimate a homography that unifies the perspective between the images. Once the image perspectives agree, we can stitch the photos together to extend the frame of view, similar to a panoramic setup.",
                    encrypt:"https://drive.google.com/file/d/12C_-9O69gZ--rbX305v4YllRUwAqbRp5/preview",
                    preview:"https://drive.google.com/file/d/1GIS9GyB9JUJ1i7U7JZpdAAvG6eMrEYFW/preview",
                    tags: ["Homographies", "SIFT", "Image Stitching"]
                },
                {
                    name:"Correction and Feature Detection",
                    desc:"In this paper I've implemented popular image alteration methods like contrast stretching based off of a hyperbolic tangent function, median filtration for salt-and-pepper noise, and image sharpening through unsharp masking. Thereafter we implement image resizing using bilinear interpolation. Finally, we introduce feature matching using SIFT.",
                    encrypt:"https://drive.google.com/file/d/19grgolLndZREmKmUwRTQxtBw3O2C_15P/preview",
                    preview:"https://drive.google.com/file/d/1nOz4BwXBqz-kCj1rGJokyapgTS-Iqz8W/preview",
                    tags: ["Contrast Stretching", "Median Filtration", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]
                },      
                {
                    name:"CNN: Fresh and with Transfer Learning",
                    desc:"In this paper we implement a convolutional neural network using the popular PyTorch library. We are attempting to classify a set of images with nine classes. We find that the model quickly overfits, which is somewhat mitigated thereafter using random dropout and data augmentation. ",
                    encrypt:"https://drive.google.com/file/d/1NaF4TT4kkbIp5ENjHMshYhQtGkpvfi3G/preview",
                    preview:"https://drive.google.com/file/d/1B2GksMNZKH_2qtlrYxMp-lUf0RLd0Kyx/preview",
                    tags: ["CNN", "Transfer Learning", "Regularization", "Image Classification"]
                }
            ]
        }
        ,
        {
            field:"Image Processing",
            work:[
                {
                    name:"Similarity Using Fourier Description",
                    desc:"In this paper I attempt to find the candidate leaf which is most similar to that at the center of the Canadian flag, by computing and comparing the Fourier descriptors of each image. It is possible to adjust the Fourier descriptors such that they are invariant to changes in scale, rotation, translation, and a change in starting point of the contour. These properties make the method an attractive option for similarity estimation.",
                    encrypt:"https://drive.google.com/file/d/1mE7hquoJ7V4KS84zC8qCRPTtg0-dGAHU/preview",
                    preview:"https://drive.google.com/file/d/1T-iFCyOHjgxnDUJe2CDQyU8gfTYtS5HD/preview",
                    tags: ["Fourier Description", "Image Binarization", "Otsu's Method", "Erosion"]
                },
                {
                    name:"Morphological Processing",
                    desc:"In some scenarios an image must be processed in order to make it more understandable for computers or other machinery. In this context it is useful to binarize an image, where the area of interst is displayed in white. If the image contains complex or organic structures, binarization can be difficult. In this paper I've explored the binarization and identification procedure concerning a set of complex images. Automatic feature detection is implemented using convolutional techniques, or contour comparison.",
                    encrypt:"https://drive.google.com/file/d/1SOo4AaK8n68X_3uoMtTr5DL4KVq8UFM9/preview",
                    preview:"https://drive.google.com/file/d/1zVktTK70O4PR38gjT-y5A3ozggLKQDO_/preview",
                    tags: ["Convolution", "Dilation and Erosion", "Skeletonization", "Hit-Miss Transform", "Masking"]

                },
                {
                    name:"Restoration Using Fourier Transforms",
                    desc:"In this paper we demonstrate an advanced method to help mitigate the effects of noise within an image. The Convolution Theorem states that the point-wise product of the Fourier transforms of a pair of functions yields their convolution. In image processing, physical space convolution (using a mask) is computationally demanding; a quartic runtime. We achieve fast convolution using the Fourier transforms. ",
                    encrypt:"https://drive.google.com/file/d/1mVJwcEbFdTEHPs74QUI3oyNSI0Y2Izj0/preview",
                    preview:"https://drive.google.com/file/d/1aAyROnQEQJlF21TGnvrvjRttytBdb50P/preview",
                    tags: ["Wiener Filter", "Convolution Theorem", "Cutoff Filter"]

                },
                {
                    name:"Correction Via Frequency Filtering",
                    desc:"Periodic noise can be observed in the Fourier transform of the damaged image. The regular noise can be mitigated if filters are applied to frequencies of the associated transform that correspond to regular damage. In this paper we use frequency filtering to mitigate the effects of blurring, physical obstruction, and transmission noise imposed on the images taken by the Mariner Spacecraft in 1965. ",
                    encrypt:"https://drive.google.com/file/d/102XZ-tmFYc-lTxMTd52lzX7tcdaxm1TZ/preview",
                    preview:"https://drive.google.com/file/d/1n1gZYZxdgyN7h7oGcznPDre5Deii-jre/preview",
                    tags: ["Convolution Theorem", "Frequency Filtering", "Sharpening", "Bilinear Interpolation", "SIFT Matching"]

                }
                ,
                {
                    name:"Image Correction Using Spatial Methods",
                    desc:"In many situations images may be under or over illuminated, making it difficult to view certain features of the image. Sometimes there is insufficient diversity in the range of pixel intensities in the image. In this paper we implement a host of methods which are popularly cited to improve the intensity, or contrast of the base image. These techniques involve identifying a point transformation which may be applied to each pixel of the damaged image. ",
                    encrypt:"https://drive.google.com/file/d/1hBGlC39GVD6hJYrSgzvgOX8Aaci0iNhl/preview",
                    preview:"https://drive.google.com/file/d/1gPIn0dinqD2JKHeZ_hzptUQOYTy8OByc/preview",
                    tags: ["Histogram Equalization", "Gamma Equalization", "Contrast Stretching", "Median Filtration"]

                },
                {
                    name:"Color Models and Processing",
                    desc:"Humans posess trichromatic vision, we have receptors that are sensitive to red, green and blue light. A wide range of colors can be represented by combining differing magnitudes of each color channel. In this paper we show this result, and explore methods of converting between popular color channels including RGB, CMYK, and HSV. Thereafter notion of a \"color gamut\" is explained using examples of coordinate combination decomposition.",
                    encrypt:"https://drive.google.com/file/d/1syQPgQEHBiQjb-OyT1WHNvMFNR9P0-l-/preview",
                    preview:"https://drive.google.com/file/d/1fASMzp3-2uGCZZ9GdMUWHKUcsd1twh2w/preview",
                    tags: ["Color Models", "Chromaticity Diagram", "Chromaticity Decomposition", "Colour Gamut"]

                }
            ]
        }
    ]
}