import { LoginCardInput } from "./LoginCardInput";

export const LoginCard = () => {
    const handleSubmit = (e) => {
        console.log(e);
    };

    return (
        <div className="bg-gray-700 shadow-md rounded-lg p-8 max-w-md w-full">
            <h1 className="text-3xl md:text-4xl font-medium text-center mb-8 ">
                Inicia sesión
            </h1>
            <div className="space-y-4">
                <form action="#" onSubmit={handleSubmit} className="space-y-4">
                    <LoginCardInput
                        label="Correo electrónico"
                        type="email"
                        name="email"
                        id="email"
                        required
                    />
                    <LoginCardInput
                        label="Contraseña"
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                    <span className="text-center cursor-pointer hover:text-gray-300">
                        ¿Aún no tienes una cuenta?
                    </span>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 mt-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
};
