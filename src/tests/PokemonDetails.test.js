import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 07', () => {
  test(' Verifica se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    const { history } = renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });

    userEvent.click(link);

    const details = screen.getByRole('heading', { level: 2, name: /pikachu details/i });
    const summary = screen.getByRole('heading', { level: 2, name: /summary/i });
    const text = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    const locations = screen.getByRole('heading', { level: 2, name: /game locations of pikachu/i });

    const { location: { pathname } } = history;
    expect(details).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(locations).toBeInTheDocument();
    expect(pathname).toBe('/pokemon/25');
    expect(link).not.toBeInTheDocument();
  });

  test('Verifica se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });

    userEvent.click(link);

    const h2 = screen.getByRole('heading', { level: 2, name: /Game Locations of Pikachu/i });
    const imagesLocation = screen.getAllByRole('img', { name: /pikachu location/i });
    const location1 = screen.getByText('Kanto Viridian Forest');
    const location2 = screen.getByText('Kanto Power Plant');

    expect(h2).toBeInTheDocument();
    expect(imagesLocation[0]).toBeInTheDocument();
    expect(imagesLocation[0]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(imagesLocation[1]).toBeInTheDocument();
    expect(imagesLocation[1]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(location1).toBeInTheDocument();
    expect(location2).toBeInTheDocument();
  });

  test('Verifica se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    const { history } = renderWithRouter(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');

    userEvent.click(buttons[1]);

    const link = screen.getByRole('link', { name: /more details/i });

    userEvent.click(link);

    const details = screen.getByRole('heading', { level: 2, name: /charmander details/i });
    const checkbox = screen.getByLabelText(/Pokémon favoritado/i);

    expect(details).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveProperty('checked', false);

    userEvent.click(checkbox);

    expect(checkbox).toHaveProperty('checked', true);

    const linkFavorites = screen.getByRole('link', { name: /favorite pokémon/i });

    userEvent.click(linkFavorites);

    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonName = screen.getByTestId('pokemon-name');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    const image = screen.getByRole('img', { name: /charmander sprite/i });
    const linkDetailsFavorite = screen.getByRole('link', { name: /more details/i });
    const imageFavorite = screen.getByRole('img', { name: /charmander is marked as favorite/i });

    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType).toHaveTextContent(/fire/i);
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonName).toHaveTextContent(/charmander/i);
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonWeight).toHaveTextContent(/Average weight: 8.5 kg/i);
    expect(linkDetailsFavorite).toBeInTheDocument();
    expect(linkDetailsFavorite).toHaveAttribute('href', '/pokemon/4');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/0/0a/Spr_5b_004.png');
    expect(imageFavorite).toBeInTheDocument();
    expect(imageFavorite).toHaveAttribute('src', '/star-icon.svg');

    userEvent.click(linkDetailsFavorite);

    const checked = screen.getByRole('checkbox');

    userEvent.click(checked);

    act(() => {
      history.push('/favorites');
    });

    const imgFavorite = screen.queryByRole('img', { name: /charmander is marked as favorite/i });

    expect(imgFavorite).not.toBeInTheDocument();
    expect(screen.getByText(/no favorite pokémon found/i)).toBeInTheDocument();
  });
});
