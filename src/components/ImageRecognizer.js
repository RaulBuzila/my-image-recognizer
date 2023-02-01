import { useState } from 'react';
import React  from 'react';

import * as ml5 from "ml5";

import '../style/ImageRecognizer.css';

import ImageUpload from './ImageUpload';
import ImagePredict from './ImagePredict';

function ImageRecognizer() {
    const [images, setImages] = useState([]);
    const [predictions, setPredictions] = useState([]);

    // eslint-disable-next-line
    const [error, setError] = useState({});

    const uploadImage = (event) => {
        const { files } = event.target;
        const images = files.length && files;

        setImages(images);
    }

    const onDeleteImage = () => {
        setImages([]);
        setPredictions([]);
    }

    const clasifyImage = () => {
        const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

        function modelLoaded() {
            console.log('Model Loaded!');
        }

        const image = document.getElementById('image');

        classifier.predict(image, 3, function (err, result) {
            if (err) {
                console.log("error");
                setError(err);
            }

            return result;
        }).then((result) => {
            setPredictions(result);
        });
    }

    return <div className='ImageRecognizer__Container'>
        <ImageUpload onImageUpload={uploadImage} />
        <div>
            {Array.from(images).map(image => {
                return <div>
                    <img id="image" style={{ maxWidth: 400, maxHeight: 400 }} src={URL.createObjectURL(image)} alt="recognize" />
                    <br />
                    <button onClick={() => onDeleteImage()}>Delete image &times;</button>
                    <button onClick={() => clasifyImage()}>Detect image </button>
                </div>
            })
            }
        </div>
        <ImagePredict predictions={predictions} error={error} />
    </div>
}

export default ImageRecognizer;


/* 
To Do:
- add unit tests 
- upload to GitHub
*/