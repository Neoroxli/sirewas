import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onSuccess: (e) => {
                console.log('succes', e);
            },
            onError: (e) => {
                console.log('error', e);
            }
        });
    };

    return (
        // <GuestLayout>
        //     <Head title="Log in" />

        //     {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

        //     <form onSubmit={submit}>
        //         <div>
        //             <InputLabel htmlFor="email" value="Email" />

        //             <TextInput
        //                 id="email"
        //                 type="email"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 isFocused={true}
        //                 onChange={(e) => setData('email', e.target.value)}
        //             />

        //             <InputError message={errors.email} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="password" value="Password" />

        //             <TextInput
        //                 id="password"
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 className="mt-1 block w-full"
        //                 autoComplete="current-password"
        //                 onChange={(e) => setData('password', e.target.value)}
        //             />

        //             <InputError message={errors.password} className="mt-2" />
        //         </div>

        //         <div className="block mt-4">
        //             <label className="flex items-center">
        //                 <Checkbox
        //                     name="remember"
        //                     checked={data.remember}
        //                     onChange={(e) => setData('remember', e.target.checked)}
        //                 />
        //                 <span className="ms-2 text-sm text-gray-600">Remember me</span>
        //             </label>
        //         </div>

        //         <div className="flex items-center justify-end mt-4">
        //             {canResetPassword && (
        //                 <Link
        //                     href={route('password.request')}
        //                     className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //                 >
        //                     Forgot your password?
        //                 </Link>
        //             )}

        //             <PrimaryButton className="ms-4" disabled={processing}>
        //                 Log in
        //             </PrimaryButton>
        //         </div>
        //     </form>
        // </GuestLayout>
        <GuestLayout>

            <Head title="Log in" />

            <div className="page-content">

                <div className="banner-wrapper">
                    <div className="circle-1"></div>
                    <div className="container inner-wrapper">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <img src="/logo-bawaslu-login.png" width="50" alt="" />
                            <h1 className="dz-title">Sirewas</h1>

                        </div>
                        <p className="text-white mb-0">Sistem Informasi Rekapitulasi Bawaslu</p>
                    </div>
                </div>
                <div className="account-box">
                    <div className="container">
                        <div className="account-area d-block" style={{ minHeight: "calc(100vh - 200px)" }}>
                            <h3 className="title mb-4">Silahkan Login</h3>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p> */}
                            <form onSubmit={submit}>
                                <div className="input-group input-mini mb-3">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="Username"
                                        autoComplete="username" autoFocus={true}
                                        onChange={(e) => setData('username', e.target.value)}
                                        value={data.username}
                                    />
                                </div>
                                <small className="text-danger">{errors.username}</small>
                                <div className="mb-3 input-group input-mini">
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                    <input type="password" className="form-control dz-password" id="password" name="password"
                                        placeholder="Password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        value={data.password}
                                    />
                                    <span className="input-group-text show-pass">
                                        <i className="fa fa-eye-slash"></i>
                                        <i className="fa fa-eye"></i>
                                    </span>
                                </div>
                                <small className="text-danger">{errors.password}</small>
                                <div className="input-group">
                                    <button type="submit" className="btn mt-2 btn-danger w-100 btn-rounded" disabled={processing}>Login</button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Keep Sign In
                                        </label>
                                    </div>
                                    {/* <a href="forgot-password.html" className="btn-link">Forgot password?</a> */}
                                </div>
                            </form>
                            {/* <div className="text-center mb-auto p-tb20">
                                    <a href="signup.html" className="saprate">Don’t have an account?</a>
                                </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <footer className="footer fixed">
                    <div className="container">
                        <a href="signup.html" className="btn btn-transparent btn-rounded d-block">CREATE AN ACCOUNT</a>
                    </div>
                </footer> */}
        </GuestLayout>
    );
}
