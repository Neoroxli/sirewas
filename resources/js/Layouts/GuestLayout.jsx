import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="page-wraper">
            <div id="preloader">
                <div className="spinner"></div>
            </div>
            {children}
        </div>
    );
}
