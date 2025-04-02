import { createContext, useContext } from 'react';

const AuthContext = createContext();

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

const AuthProvider = ({ children }) => {

    const user = {
        isLoggedIn: false,
    };

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, useAuth, AuthProvider };