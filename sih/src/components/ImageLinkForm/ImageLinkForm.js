import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputchange, onButtonSubmit }) => {
	return (
		<div >
			<p className='f3 white athelas pt3'>
				{`Learn your forest region's statistics`}
			</p>	
			<div className='center'>
				<div className='form center shadow-5 '>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputchange} />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-green' 
					onClick={onButtonSubmit}>
					Analyze
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;