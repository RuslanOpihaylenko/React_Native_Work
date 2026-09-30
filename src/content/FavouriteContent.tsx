import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

import { Product } from "../datas/data";

type FavoritesContentType = {
    favorites: Product[];
    addToFavorites: (product: Product) => void;
    removeFromFavorites: (productId: number) => void;
    isFavorite: (productId: number) => boolean;
};

const FavoritesContent = createContext<
    FavoritesContentType | undefined
>(undefined);

type Props = {
    children: ReactNode;
};

export const FavoritesProvider = ({ children }: Props) => {

    const [favorites, setFavorites] = useState<Product[]>([]);

    const addToFavorites = (product: Product) => {

        setFavorites((currentFavorites) => {

            const alreadyExists = currentFavorites.some(
                (item) => item.id === product.id
            );

            if (alreadyExists) {
                return currentFavorites;
            }

            return [...currentFavorites, product];
        });
    };

    const removeFromFavorites = (productId: number) => {

        setFavorites((currentFavorites) =>
            currentFavorites.filter(
                (item) => item.id !== productId
            )
        );
    };

    const isFavorite = (productId: number) => {

        return favorites.some(
            (item) => item.id === productId
        );
    };

    return (
        <FavoritesContent.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                isFavorite,
            }}
        >
            {children}
        </FavoritesContent.Provider>
    );
};

export const useFavorites = () => {

    const context = useContext(FavoritesContent);

    if (!context) {
        throw new Error(
            "useFavorites must be used inside FavoritesProvider"
        );
    }

    return context;
};