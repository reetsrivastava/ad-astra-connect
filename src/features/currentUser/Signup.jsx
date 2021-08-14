import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signupFormValidation } from '../../utils/formValidation';
import { resetError, signUpUser } from './currentUserSlice';

export const SignUp = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		userName: '',
		email: '',
		password: '',
	});

	const [formError, setFormError] = useState({
		firstName: '',
		lastName: '',
		userName: '',
		email: '',
		password: '',
	});

	const dispatch = useDispatch();
	const { error } = useSelector((state) => state.currentUser);

	const onSignUpClicked = async (e) => {
		e.preventDefault();
		dispatch(resetError());
		if (signupFormValidation(user, setFormError))
			await dispatch(signUpUser({ user }));
	};

	const onUserChanged = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	return (
		<div className='flex justify-between min-h-screen bg-green-100'>
			
			<div className='flex flex-col items-start mx-4 justify-center w-full md:w-1/2 text-gray-500 my-2 mx-auto'>
				<h2 className='font-semibold text-2xl mb-2'>
					Sign Up into AD ASTRA
				</h2>
				<form className='flex flex-col w-full items-start'>
					<div className='mb-2 text-red-600 font-semibold text-xl'>{error}</div>

					<div className='mb-4 md:w-9/12 w-full'>
						<label className='mb-2 font-semibold block'>FirstName</label>
						<input
							placeholder='FirstName'
							type='text'
							value={user.firstName}
							name='firstName'
							onChange={(e) => onUserChanged(e)}
							className='px-3 py-2 w-full 
						 border focus:outline-none focus:ring focus:border-purple-700'
						/>
						{formError.firstName && (
							<span className='block font-semibold font-sm text-red-600'>
								*{formError.firstName}
							</span>
						)}
					</div>
					<div className='mb-4 md:w-9/12 w-full'>
						<label className='mb-2 font-semibold block'>LastName</label>
						<input
							placeholder='Last Name'
							type='text'
							value={user.lastName}
							name='lastName'
							onChange={(e) => onUserChanged(e)}
							className='px-3 py-2 w-full 
						 border focus:outline-none focus:ring focus:border-purple-700'
						/>
						{formError.lastName && (
							<span className='block font-semibold font-sm text-red-600'>
								*{formError.lastName}
							</span>
						)}
					</div>
					<div className='mb-4 md:w-9/12 w-full'>
						<label className='mb-2 font-semibold block'>Username</label>
						<input
							placeholder='Username'
							type='text'
							value={user.userName}
							name='userName'
							onChange={(e) => onUserChanged(e)}
							className='px-3 py-2 w-full 
						 border focus:outline-none focus:ring focus:border-purple-700'
						/>
						{formError.userName && (
							<span className='block font-semibold font-sm text-red-600'>
								*{formError.userName}
							</span>
						)}
					</div>
					<div className='mb-4 md:w-9/12 w-full'>
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
					<div className='mb-4 md:w-9/12 w-full'>
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
						type='submit'
						onClick={(e) => onSignUpClicked(e)}>
						SIGNUP
					</button>
					<div className='font-medium text-md p-2 hover:bg-gray-200'>
						Already a member?{' '}
						<NavLink
							to='/login'
							className='text-gray-900 font-bold'>
							LOGIN
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
};