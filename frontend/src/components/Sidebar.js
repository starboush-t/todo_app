import React from 'react';
import './Sidebar.css';
import { AiOutlineStar, AiOutlineCheckCircle } from 'react-icons/ai';
import { BsSun, BsFlag, BsListTask, BsPlusLg, BsCardList } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import {RiPlayListAddLine} from 'react-icons/ri'

function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="sidebar__container">
				<div className="sidebar__info">
					<div className="sidebar__info__image">
						<img src="images/1.jpg" alt="Avatar" />
					</div>
					<div className="sidebar__info_name">
						<h5>Suhaib Abutarboush</h5>
						<div className="user_status">
							<div className="circle" />
							<p>You're offline ...</p>
						</div>
					</div>
				</div>
				<div className="sidebar__searchbar">
					<input type="search" placeholder="Search" />
				</div>
				<div className="sidebar_main__menu">
					<ul>
						<li>
							<div className="menu__details">
								<div className="icon">
									<i>
										<BsSun />
									</i>
								</div>
								<div className="title">
									<p>My Day</p>
								</div>
							</div>
							<div className="badge">1</div>
						</li>
						<li>
							<div className="menu__details">
								<div className="icon">
									<i>
										<AiOutlineStar />
									</i>
								</div>
								<div className="title">
									<p>Important</p>
								</div>
							</div>
							<div className="badge">1</div>
						</li>
						<li>
							<div className="menu__details">
								<div className="icon">
									<i>
										<BsCardList />
									</i>
								</div>
								<div className="title">
									<p>Planned</p>
								</div>
							</div>
							<div className="badge">1</div>
						</li>
						<li>
							<div className="menu__details">
								<div className="icon">
									<i>
										<AiOutlineCheckCircle />
									</i>
								</div>
								<div className="title">
									<p>Completed</p>
								</div>
							</div>
							<div className="badge">1</div>
						</li>
						<li>
							<div className="menu__details">
								<div className="icon">
									<i>
										<FaUserAlt />
									</i>
								</div>
								<div className="title">
									<p>Assigned to me</p>
								</div>
							</div>
							<div className="badge">1</div>
						</li>
						<li>
							<div className="menu__details">
								<div className="icon">
									<i>
										<BsFlag />
									</i>
								</div>
								<div className="title">
									<p>Flagged email</p>
								</div>
							</div>
							<div className="badge">1</div>
						</li>
						<li>
							<div className="menu__details">
								<div className="icon">
									<i><BsListTask /></i>
								</div>
								<div className="title">
									<p>Tasks</p>
								</div>
							</div>
							<div className="badge">1</div>
						</li>
					</ul>
				</div>
				<hr />
				<div className="create__menu">
					<div className="create__menu_item">
						<ul>
							<li>
								<div className="menu__details">
									<div className="icon">
										<i>♠</i>
									</div>
									<div className="title">
										<p>Learn english</p>
									</div>
								</div>
								<div className="badge">23</div>
							</li>
							<li>
								<div className="menu__details">
									<div className="icon">
										<i>½</i>
									</div>
									<div className="title">
										<p>Create JavaScript Project</p>
									</div>
								</div>
								<div className="badge">31</div>
							</li>
						</ul>
					</div>
					<div className="create__menu__button__con">
						<ul>
							<li>
								<div className="menu__details">
									<div className="icon">
										<i><BsPlusLg /></i>
									</div>
									<div className="title">
										<p>New list</p>
									</div>
								</div>
								<div className="group_list">
									<div className="icon">
										<i><RiPlayListAddLine /></i>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
