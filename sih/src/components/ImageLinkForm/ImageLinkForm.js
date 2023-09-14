import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
	return (
		<div >
			<p className='f3 white athelas pt3'>
				{`Learn your forest region's statistics`}
			</p>	
			<div className='center'>
				<div className='form center shadow-5 '>
					<input className='f4 pa2 w-70 center' type='text' />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-green'>
					Analyze
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;
