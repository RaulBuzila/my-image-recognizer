import React  from 'react';

function ImageUpload (props) {
    return <div className='ImageUpload__Container'>
        <p className='ImageUpload__Text'>Select a picture to upload:</p>
        <input
            type="file"
            className='ImageUpload__Input'
            onChange={props.onImageUpload}
            accept="image/jpeg, image/png, image/jpg"
        />
    </div>
}

export default ImageUpload;