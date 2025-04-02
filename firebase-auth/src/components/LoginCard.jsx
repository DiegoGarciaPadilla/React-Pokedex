import { Card } from "./Card";
import { CustomInput } from "./CustomInput";
import { useNavigate } from "react-router";

export const LoginCard = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log(e);
    };

    const handleClick = () => {
        navigate("/signup");
    };

    return (
        <Card>
            <h1 className="text-3xl md:text-4xl font-medium text-center mb-8 ">
                Iniciar sesión
            </h1>
            <div className="space-y-4">
                <form action="#" onSubmit={handleSubmit} className="space-y-4">
                    <CustomInput
                        label="Correo electrónico"
                        type="email"
                        name="email"
                        id="email"
                        required
                    />
                    <CustomInput
                        label="Contraseña"
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                    <span
                        className="text-center cursor-pointer hover:text-gray-300"
                        onClick={handleClick}
                    >
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
        </Card>
    );
};
