import { FC } from 'react';
import '../styles/inputBasic.scss';

type props = { name: string };
const InputBasic: FC<props> = ({ name }) => {
	return (
		<div>
			{
				<form>
					<label className='InputBasic'>
						<label>TEXTO:</label>
						<br />
						<input className='InputBox' type='text' name='name' />
						<br />
					</label>
					<input type='submit' value='Enviar' />
				</form>
			}
		</div>
	);
};

export default InputBasic;
