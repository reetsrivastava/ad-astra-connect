import { NavLink } from 'react-router-dom';
import { transformISOString } from '../../utils/utils';
import { ReactionButtons } from './ReactionButtons';

export const PostCard = ({ tweetObj }) => {
	const { tweet, userId, createdAt } = tweetObj;

	return (
		<div className='flex items-start justify-start mb-4 py-3 px-1 md:px-2 rounded-lg bg-yellow-100'>
			<NavLink to={`/${userId.userName}`}>
				<div className='img-logo uppercase p-1 border-2 mx-2 rounded text-white bg-yellow-600'>
					{' '}
					{userId.firstName[0]}
					{userId.lastName[0]}
				</div>
			</NavLink>
			<div className='text-left'>
				<div className='mb-4'>
					<NavLink to={`/${userId.userName}`}>
						<span className='text-yellow-900 font-semibold text-md capitalize md:hover:underline '>
							{userId.firstName} {userId.lastName}
						</span>{' '}
					</NavLink>
					<span className='text-yellow-300 text-sm'>
						<NavLink to={`/${userId.userName}`}>
							<span className='md:hover:underline'>@{userId.userName}</span>
						</NavLink>{' '}
						· {transformISOString(createdAt)}
					</span>
				</div>
				<div className='whitespace-pre-line'>{tweet}</div>
				<ReactionButtons tweetObj={tweetObj} />
			</div>
		</div>
	);
};