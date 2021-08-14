import { useDispatch, useSelector } from 'react-redux';
import { isCurrentUserFollowing } from '../../utils/utils';
import { loadCurrentUser } from '../currentUser/currentUserSlice';
import { followButtonClicked } from './usersSlice';

export const FollowButton = ({ currentUser, user }) => {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.currentUser);

	const onFollowButtonClicked = async (e) => {
		e.preventDefault();
		await dispatch(followButtonClicked({ followingUserId: user._id, token }));
		await dispatch(loadCurrentUser({ userName: currentUser.userName, token }));
	};
	return (
		<>
			{!isCurrentUserFollowing(currentUser.followingList, user._id) ? (
				<button
					className='p-2 border-0 rounded bg-yellow-400 text-white'
					onClick={(e) => onFollowButtonClicked(e)}>
					Follow
				</button>
			) : (
				<button
					className='p-2 border-0 rounded bg-green-400 text-white'
					onClick={(e) => onFollowButtonClicked(e)}>
					Following
				</button>
			)}
		</>
	);
};