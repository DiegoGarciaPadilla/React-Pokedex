import { Card } from "./Card";
import { CustomInput } from "./CustomInput";

export const SignUpCard = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <Card>
            <h1 className="text-3xl md:text-4xl font-medium text-center mb-8 ">
                Regístrate
            </h1>
            <div className="space-y-4">
            <form action="#" onSubmit={handleSubmit} className="space-y-4">
                    <CustomInput label="Correo electrónico" type="email" name="" id="" />
                    <CustomInput label="Contraseña" type="password" name="" id="" />
                    <CustomInput label="Confirmar contraseña" type="password" name="" id="" />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 mt-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Regístrate
                    </button>
                </form>
            </div>
        </Card>
    );
};
