import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { formValidation } from '../../utils';
import { loginUser, resetError } from './currentUserSlice';

export const Login = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const [formError, setFormError] = useState({
		email: '',
		password: '',
	});
	
	const [isLoading, setLoading] = useState(false);

	const { error } = useSelector((state) => state.currentUser);
	const dispatch = useDispatch();
	const onUserChanged = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const onLoginClicked = async (e) => {
		e.preventDefault();
		dispatch(resetError());
		if (formValidation(user.email, user.password, formError, setFormError)) {
			await dispatch(loginUser({ email: user.email, password: user.password }));
		}
	};

	return (
		<div className='flex justify-between min-h-screen bg-green-100'>
			<div className='flex flex-col items-start mx-4 justify-center w-full md:w-1/2 text-gray-500 mx-auto'>
				<h2 className='font-semibold text-2xl mb-6 '>
					Sign in to AD ASTRA
				</h2>
				<form
					className='flex flex-col w-full items-start '
					onSubmit={(e) => onLoginClicked(e)}>
					<div className='mb-6 md:w-9/12 w-full'>
						<label className='mb-2 font-semibold block'>Email Address</label>
						<input
							placeholder='email@abc.com'
							type='text'
							value={user.email}
							name='email'
							onChange={(e) => onUserChanged(e)}
							className='px-3 py-2 w-full 
						 border focus:outline-none focus:ring focus:border-purple-700'
						/>
						{formError.email && (
							<span className='block font-semibold font-sm text-red-600'>
								*{formError.email}
							</span>
						)}
					</div>
					<div className='mb-6 md:w-9/12 w-full'>
						<label className='mb-2 font-semibold block font-sm'>Password</label>

						<input
							placeholder='p****d'
							type='password'
							value={user.password}
							name='password'
							onChange={(e) => onUserChanged(e)}
							className='px-3 py-2 w-full 
						 border focus:outline-none focus:ring focus:border-purple-700'
						/>
						{formError.password && (
							<span className='block font-semibold text-red-600'>
								*{formError.password}
							</span>
						)}
					</div>
					<button
						className='bg-gray-700 hover:bg-gray-900 p-2 md:w-9/12 w-full text-white font-semibold mb-2'
						type='submit'>
							{ isLoading ? "Processing..." : "LOGIN" }
					</button>
					<div className='font-medium text-md hover:bg-gray-200 p-2'>
						Not a member?{' '}
						<NavLink
							to='/signup'
							className='text-gray-700 font-bold '>
							SIGN UP
						</NavLink>
					</div>
					<div className='mt-2 text-red-600 font-semibold text-xl'>{error}</div>
				</form>
			</div>
		</div>
	);
};
