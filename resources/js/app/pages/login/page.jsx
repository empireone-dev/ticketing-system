import { useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { GoogleOutlined } from "@ant-design/icons";

export default function LoginPage({ status, canResetPassword }) {
    const { url } = usePage();
    const searchStatus = url.split("=")[1];
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);
    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    function formHandler(value, name) {
        setData(name, value);
    }
    return (
        <form
            onSubmit={submit}
            className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-blue-200"
        >
            <div className="border border-gray-500 sm:mx-auto sm:w-full sm:max-w-md p-5 rounded-lg shadow-2xl bg-white">
                <div className="flex flex-1">
                    <div className="w-96">
                        <img src="/images/new logo.png" className="w-80" />
                    </div>
                    <div className="w-16 mt-3">
                        <img src="/images/vline.png" className="w-80 h-24" />
                    </div>
                    <div className="mt-4 w-40">
                        <img src="/images/logoIT.png" className="h-24" alt="" />
                    </div>
                </div>

                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                    {searchStatus == "invalid" && (
                        <div className="text-center text-red-500 text-bold">
                            You haven't ticket transaction yet.{" "}
                            <a href="#">
                                <u>Click Here</u>
                            </a>
                        </div>
                    )}

                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-blue-700">
                        Sign in to your account
                    </h2>
                    <div className="space-y-4" action="#" method="POST">
                        <div>
                            <div className="mt-2">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        onChange={(e) =>
                                            formHandler(
                                                e.target.value,
                                                e.target.name
                                            )
                                        }
                                        type="email"
                                        name="email"
                                        value={data?.email ?? ""}
                                        id="email"
                                        className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-30 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Email address
                                    </label>
                                </div>
                                {errors.email ==
                                    "These credentials do not match our records." &&
                                    (data?.email ?? "") !== "" && (
                                        <p className="text-red-500 text-sm mt-1.5 font-light">
                                            {errors.email}
                                        </p>
                                    )}
                            </div>
                        </div>

                        <div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    onChange={(e) =>
                                        formHandler(
                                            e.target.value,
                                            e.target.name
                                        )
                                    }
                                    type="password"
                                    name="password"
                                    value={data?.password ?? ""}
                                    id="password"
                                    className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="password"
                                    className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-30 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Password
                                </label>
                            </div>
                            {errors.password ==
                                "These credentials do not match our records." &&
                                (data?.password ?? "") !== "" && (
                                    <p className="text-red-500 text-sm mt-1.5 font-light">
                                        {errors.password}
                                    </p>
                                )}
                        </div>
                        <div className="flex gap-3 flex-col">
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-sm bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                            {/* <a
                                href="/auth/google"
                                type="submit"
                                className="flex w-full justify-center shadow-md border border-blue-500 rounded-sm bg-white px-3 py-2.5 text-sm font-semibold leading-6 text-blue-500 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <img src="/images/google.png" className="h-6" />{" "}
                                Sign in with Google
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
