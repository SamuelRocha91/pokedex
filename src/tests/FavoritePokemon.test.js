import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemon } from '../pages';

describe('Requisito 03', () => {
  test('Verifica na página de favoritos se é exibida na tela a mensagem "No favorite pokemon found" caso a pessoa não tenha Pokémon favoritos', () => {
    renderWithRouter(<FavoritePokemon />);

    const h2 = screen.getByRole('heading', { level: 2, name: /favorite pokémon/i });
    const notFavorite = screen.getByText(/No favorite Pokémon found/i);

    expect(h2).toBeInTheDocument();
    expect(notFavorite).toBeInTheDocument();
  });

  test('Verifica na página de favoritos se apenas são exibidos os Pokémon favoritados', () => {
    renderWithRouter(<App />);

    const linkDetails = screen.getByRole('link', { name: /More details/i });
    expect(linkDetails).toBeInTheDocument();

    userEvent.click(linkDetails);

    const checkbox = screen.getByRole('checkbox', { name: /Pokémon favoritado/i, checked: false });
    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    expect(screen.getByRole('img', { name: /pikachu is marked as favorite/i })).toBeInTheDocument();

    const favoritePokemonLink = screen.getByRole('link', { name: /favorite pokémon/i });
    userEvent.click(favoritePokemonLink);

    const name = screen.getByTestId('pokemon-name');
    const type = screen.getByTestId('pokemon-type');
    const weight = screen.getByTestId('pokemon-weight');

    expect(name).toHaveTextContent(/pikachu/i);
    expect(type).toHaveTextContent(/Electric/i);
    expect(weight).toHaveTextContent(/Average weight: 6.0 kg/i);
  });
});
