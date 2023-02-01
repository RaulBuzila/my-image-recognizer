import React  from 'react';

function ImagePredict(props) {
    const { predictions, error } = props;

    return (
        <div>
            {predictions ?
                <ul>
                    {predictions.map(prediction => {
                        const { label, confidence } = prediction;

                        return (<li>
                            <b>{label}</b> with confidence: {parseFloat(confidence).toFixed(2) + "%"}
                        </li>
                        )
                    })}
                </ul>
                : <p>{error}</p>
            }
        </div>
    )
}

export default ImagePredict;