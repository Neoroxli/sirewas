import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import BottomBar from './BottomBar';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="page-wraper">
            {/* <div id="preloader">
                <div className="spinner"></div>
            </div> */}

            <div className="author-notification">
                <div className="container inner-wrapper">
                    <div className="dz-info">
                        <span className="text-dark">Selamat Datang</span>
                        <h3 className="name mb-0">{user.name}</h3>
                    </div>
                </div>
            </div>

            {children}

            <BottomBar />
        </div>
    );
}
