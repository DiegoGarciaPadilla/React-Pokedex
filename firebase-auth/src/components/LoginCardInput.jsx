export const LoginCardInput = ({ label, type, name, id, required }) => {
    return (
        <div>
            <label htmlFor={id} className="text-gray-100 text-sm font-medium">{label}</label>
            <input type={type} id={id} name={name} required={required} className="mt-1 block w-full p-2 bg-gray-800 text-gray-100 rounded-md border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500" />
        </div>
    );
}