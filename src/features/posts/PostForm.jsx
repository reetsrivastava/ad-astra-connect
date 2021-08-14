import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTweet } from './postsSlice';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';

export const PostForm = () => {
	const [tweet, setTweet] = useState('');
	const { currentUser, token } = useSelector((state) => state.currentUser);

	const onTweetChanged = (e) => {
		setTweet(e.target.value);
	};
	const dispatch = useDispatch();

	const onTweetPostClicked = (e) => {
		e.preventDefault();
		if (tweet) {
			dispatch(postTweet({ tweet, token }));
			setTweet('');
		}
	};

	return (
		<form onSubmit={(e) => onTweetPostClicked(e)}>
			<div className='flex px-1 items-start mt-4 border-4 border-green-100 p-2 rounded-md my-2'>
				<div className='border-2 p-1 text-green-200 bg-green-600 rounded-full'>
					{currentUser?.firstName[0]}
					{currentUser?.lastName[0]}
				</div>
				<div className='w-full'>
					<div className=''>
						<textarea
							className='w-full py-1 px-2 h-24 outline-none border-b'
							placeholder='Fill the Void'
							value={tweet}
							onChange={(e) => onTweetChanged(e)}
						/>
					</div>
					<div className='text-green-500 flex justify-between items-center pb-2'>
						<div>
							<ImageOutlinedIcon fontSize='large' color='inherit' />
						</div>
						<button
							type='submit'
							className={`primary-btn p-2 bg-green-200 border-0 rounded-md ${
								tweet.length === 0 ? 'opacity-50' : ''
							}`}
							disabled={tweet.length === 0}>
							Tweet
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};