import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={'/'}>John Doe</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/liveauction' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Current Auction
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/auctionoverview' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Auctions List
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                <div className='navbar-header'>
                    <Link className='navbar-brand' to={'/logout'}>Logout</Link>
                    </div>
                </div>
            </div>
        </div>;
    }
}