import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'

const RegisterModal = ({closeModal, isOpen, handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto font-future"
                onClose={closeModal}>
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"/>
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true">
              &#8203;
            </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                        <div
                            className="inline-block w-full max-w-xl py-4 px-3 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl bg-gray-900">
                            <Dialog.Title
                                as="h3"
                                className="text-4xl leading-6 text-gray-100 text-center mb-8">
                                Login
                            </Dialog.Title>

                            <div className="w-full px-16 my-4">
                                <form
                                    onSubmit={(e)=>{
                                        e.preventDefault();

                                        if(email.trim().length < 1 || password.trim().length < 1){
                                            alert("No");
                                            return;
                                        }

                                        handleLogin({email, password});
                                        setEmail('');
                                        setPassword('');
                                        closeModal();
                                    }}
                                    className="space-y-4">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='text'
                                           placeholder='Email'
                                           className="w-full text-white bg-gray-800 py-2.5 px-5 rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-400"/>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                                           type='password' placeholder='Password'
                                           className="w-full text-white bg-gray-800 py-2.5 px-5 rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-400"/>
                                    <button type='submit' placeholder='Password'
                                            className="w-full text-lg text-black hover:bg-yellow-200 bg-yellow-400 py-2.5 px-5 rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-400">Login
                                    </button>
                                </form>
                            </div>


                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}

export default RegisterModal;